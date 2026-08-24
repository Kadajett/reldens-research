/**
 * Builds research/api-inventory.json: every `module.exports.X` in the reldens
 * package, joined against the graphify AST graph for methods and inbound edges.
 *
 * Two independent sources on purpose:
 *   - grep over the source for the export statements and class headers, because
 *     graphify's JavaScript extractor does not emit `extends` edges for JS
 *     classes (verified: all 18 `extends` edges in the graph come from JSON
 *     arrays in package.json, not from code)
 *   - graphify's graph.json for the method inventory, call graph and import
 *     graph, all tagged EXTRACTED (tree-sitter AST, no LLM)
 *
 * Usage: node research/scripts/build-api-inventory.mjs
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = join(import.meta.dirname, '..', '..');
const sourceRoot = join(repoRoot, 'reldens-source');
const graphPath = join(repoRoot, 'research', 'graphify-out', 'graph.json');

function grepLines(pattern, paths) {
    try {
        return execFileSync('grep', ['-rnE', pattern, ...paths], {cwd: sourceRoot, encoding: 'utf8'})
            .split('\n').filter(Boolean);
    } catch {
        return [];
    }
}

// --- exports -------------------------------------------------------------
const exportRe = /^([^:]+):(\d+):module\.exports\.([A-Za-z0-9_]+)\s*=\s*(.*)$/;
const exports_ = [];
for(const line of grepLines('^module\\.exports\\.', ['lib', 'server.js', 'client.js', 'bin'])){
    const match = exportRe.exec(line);
    if(!match){
        continue;
    }
    const [, file, lineNo, name, rhs] = match;
    exports_.push({name, file, line: Number(lineNo), assignedFrom: rhs.replace(/;$/, '').trim()});
}

// --- class declarations and inheritance ----------------------------------
const classRe = /^([^:]+):(\d+):class\s+([A-Za-z0-9_]+)(?:\s+extends\s+([A-Za-z0-9_.]+))?/;
const classes = new Map();
for(const line of grepLines('^class [A-Za-z0-9_]+', ['lib', 'bin'])){
    const match = classRe.exec(line);
    if(!match){
        continue;
    }
    const [, file, lineNo, name, base] = match;
    classes.set(file+'#'+name, {name, file, line: Number(lineNo), extends: base ?? null});
}

// --- graph join ----------------------------------------------------------
const graph = JSON.parse(readFileSync(graphPath, 'utf8'));
const byId = new Map(graph.nodes.map((node) => [node.id, node]));

const methodsByOwner = new Map();
const inboundByTarget = new Map();
for(const link of graph.links){
    if('method' === link.relation){
        const owner = byId.get(link.source);
        const method = byId.get(link.target);
        if(owner && method){
            if(!methodsByOwner.has(owner.id)){
                methodsByOwner.set(owner.id, []);
            }
            methodsByOwner.get(owner.id).push({name: method.label, location: link.source_location});
        }
    }
    inboundByTarget.set(link.target, (inboundByTarget.get(link.target) ?? 0) + 1);
}

const classNodesByFileAndLabel = new Map();
for(const node of graph.nodes){
    if(node._callable_class && node.source_file){
        classNodesByFileAndLabel.set(node.source_file+'#'+node.label, node);
    }
}

// --- the surface the platform's own project template demonstrates ---------
const demonstrated = new Set();
for(const line of grepLines("require\\('reldens", ['theme', 'bin'])){
    const match = /require\('(reldens[^']*)'\)/.exec(line);
    if(match){
        demonstrated.add(match[1]);
    }
}

function importPathFor(file){
    if('server.js' === file){
        return 'reldens/server';
    }
    if('client.js' === file){
        return 'reldens/client';
    }
    return 'reldens/'+file.replace(/\.js$/, '');
}

// A file can re-export a class declared elsewhere - server.js and client.js both
// do exactly that. Resolve those by label, but only when the label is unambiguous
// across the whole package, and record which path was used.
const classesByName = new Map();
for(const info of classes.values()){
    if(!classesByName.has(info.name)){
        classesByName.set(info.name, []);
    }
    classesByName.get(info.name).push(info);
}

const inventory = exports_.map((entry) => {
    const importPath = importPathFor(entry.file);
    const localName = entry.assignedFrom.replace(/;$/, '');

    let classInfo = classes.get(entry.file+'#'+localName) ?? classes.get(entry.file+'#'+entry.name);
    let resolution = classInfo ? 'declared-in-file' : null;
    if(!classInfo){
        const candidates = classesByName.get(entry.name) ?? classesByName.get(localName) ?? [];
        if(1 === candidates.length){
            classInfo = candidates[0];
            resolution = 're-export-resolved-by-unique-name';
        } else if(1 < candidates.length){
            resolution = 'ambiguous-name-'+candidates.length+'-candidates';
        }
    }

    const node = classInfo
        ? classNodesByFileAndLabel.get(classInfo.file+'#'+classInfo.name)
        : classNodesByFileAndLabel.get(entry.file+'#'+entry.name);

    return {
        name: entry.name,
        importPath,
        exportedFrom: {file: entry.file, line: entry.line},
        declaredIn: classInfo ? {file: classInfo.file, line: classInfo.line} : null,
        resolution,
        kind: classInfo ? 'class' : 'value',
        extends: classInfo?.extends ?? null,
        methods: node ? [...new Set((methodsByOwner.get(node.id) ?? []).map((m) => m.name))].sort() : [],
        graphInboundEdges: node ? (inboundByTarget.get(node.id) ?? 0) : 0,
        demonstratedInProjectTemplate: demonstrated.has(importPath)
    };
});

inventory.sort((a, b) => a.importPath.localeCompare(b.importPath) || a.name.localeCompare(b.name));

const subclassCounts = {};
for(const info of classes.values()){
    if(info.extends){
        subclassCounts[info.extends] = (subclassCounts[info.extends] ?? 0) + 1;
    }
}

writeFileSync(join(repoRoot, 'research', 'api-inventory.json'), JSON.stringify({
    generatedFrom: {
        package: 'reldens',
        version: JSON.parse(readFileSync(join(sourceRoot, 'package.json'), 'utf8')).version,
        graph: 'research/graphify-out/graph.json',
        graphNodes: graph.nodes.length,
        graphLinks: graph.links.length,
        allEdgesExtracted: graph.links.every((l) => 'EXTRACTED' === l.confidence)
    },
    demonstratedImportPaths: [...demonstrated].sort(),
    subclassCountsInsidePlatform: Object.fromEntries(
        Object.entries(subclassCounts).sort((a, b) => b[1] - a[1])
    ),
    exports: inventory
}, null, 2)+'\n');

console.log('exports:', inventory.length);
console.log('classes:', inventory.filter((e) => 'class' === e.kind).length);
console.log('demonstrated import paths:', demonstrated.size);
