/**
 * Builds research/api-surface.json: the contract surfaces of the reldens package
 * that are not classes, each one recorded with the file and line it was read from.
 *
 * These are the things a plugin author actually has to get right, and none of them
 * are types in the source: they are string keys looked up at runtime.
 *
 * Everything here is EXTRACTED in graphify's sense - a literal read out of the
 * source, never inferred. Where a value could not be resolved statically the entry
 * says so rather than guessing.
 *
 * Usage: node research/scripts/build-api-surface.mjs
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = join(import.meta.dirname, '..', '..');
const sourceRoot = join(repoRoot, 'reldens-source');
const nodeModules = join(repoRoot, 'node_modules');

function grep(pattern, paths, cwd = sourceRoot) {
    try {
        return execFileSync('grep', ['-rnE', pattern, ...paths], {cwd, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024})
            .split('\n').filter(Boolean);
    } catch {
        return [];
    }
}

function splitHit(line) {
    const match = /^([^:]+):(\d+):(.*)$/.exec(line);
    return match ? {file: match[1], line: Number(match[2]), text: match[3].trim()} : null;
}

// ---------------------------------------------------------------- customClasses
// Every runtime lookup into the customClasses tree. The bucket path is the public
// contract; the leaf after it is usually a database-supplied key.
const customClasses = [];
for(const raw of grep("customClasses", ['lib', 'theme'])){
    const hit = splitHit(raw);
    if(!hit){
        continue;
    }
    const pathMatch = /['"]((?:server|client)\/customClasses\/[a-zA-Z/]*)/.exec(hit.text);
    const bracketMatch = /customClasses(?:\.|\[')([a-zA-Z]+)/.exec(hit.text);
    if(!pathMatch && !bracketMatch){
        continue;
    }
    const concatenated = /\+\s*[a-zA-Z]/.test(hit.text);
    customClasses.push({
        bucket: pathMatch ? pathMatch[1].replace(/\/$/, '') : ('customClasses.'+bracketMatch[1]),
        keyedByRuntimeValue: Boolean(pathMatch && concatenated),
        file: hit.file,
        line: hit.line,
        source: hit.text
    });
}

// ---------------------------------------------------------------- plugin setup
// The four distinct setup() signatures. Each entry is a real call site.
const pluginSetupCallSites = grep("\\.setup\\(", ['lib'])
    .map(splitHit)
    .filter((hit) => hit && /setup\(\{|setup\(setup|setup\(props/.test(hit.text))
    .map((hit) => ({file: hit.file, line: hit.line, source: hit.text}));

// ---------------------------------------------------------------- env vars
// reldens reads these three ways, and its @reldens/* dependencies read more.
const envReadSites = {};
function recordEnv(hits, origin) {
    for(const raw of hits){
        const hit = splitHit(raw);
        if(!hit){
            continue;
        }
        for(const name of hit.text.match(/RELDENS_[A-Z0-9_]+/g) ?? []){
            envReadSites[name] ??= [];
            envReadSites[name].push({origin, file: hit.file, line: hit.line});
        }
    }
}
recordEnv(grep("RELDENS_[A-Z0-9_]+", ['lib', 'bin']), 'reldens');
for(const pkg of ['utils', 'server-utils', 'storage', 'cms']){
    recordEnv(grep("RELDENS_[A-Z0-9_]+", ['lib', 'index.js'], join(nodeModules, '@reldens', pkg)), '@reldens/'+pkg);
}
const envTemplate = new Set(
    (readFileSync(join(sourceRoot, 'lib/game/server/install-templates/.env.dist'), 'utf8')
        .match(/RELDENS_[A-Z0-9_]+/g) ?? [])
);

const envVars = Object.keys(envReadSites).concat([...envTemplate]).filter((v, i, a) => a.indexOf(v) === i).sort()
    .map((name) => ({
        name,
        inInstallTemplate: envTemplate.has(name),
        readBy: [...new Set((envReadSites[name] ?? []).map((s) => s.origin))].sort(),
        readSites: (envReadSites[name] ?? []).slice(0, 4)
    }));

// ---------------------------------------------------------------- config paths
// Database-backed configuration, addressed by path string.
const configPaths = {};
for(const raw of grep("(get|getWithoutLogs)\\('(server|client)/", ['lib'])){
    const hit = splitHit(raw);
    if(!hit){
        continue;
    }
    for(const match of hit.text.matchAll(/(get|getWithoutLogs)\('((?:server|client)\/[a-zA-Z0-9/_.]*)'/g)){
        const path = match[2];
        configPaths[path] ??= {path, sites: []};
        if(4 > configPaths[path].sites.length){
            configPaths[path].sites.push({file: hit.file, line: hit.line});
        }
    }
}

// ---------------------------------------------------------------- events
// Emits are matched against whole file text, not line by line: several of them
// wrap the event name onto its own line (lib/rooms/server/scene.js:156 is the one
// that caught a line-oriented pass out), and a line-based grep silently misses
// those. Payload capture stops at the first newline, so a multi-line payload is
// recorded truncated rather than wrongly.
// Eight admin events are listened for inside reldens but emitted by @reldens/cms,
// so the scan covers the sibling packages too and tags each site with its origin.
const scanRoots = [
    {origin: 'reldens', root: sourceRoot, dirs: ['lib', 'theme']},
    ...['cms', 'utils', 'server-utils', 'storage', 'items-system', 'skills', 'modifiers']
        .map((name) => ({origin: '@reldens/'+name, root: join(nodeModules, '@reldens', name), dirs: ['lib']}))
];

const sourceFiles = scanRoots.flatMap(({origin, root, dirs}) => {
    try {
        return execFileSync('find', [...dirs, '-name', '*.js'], {cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024})
            .split('\n').filter(Boolean).map((file) => ({origin, root, file}));
    } catch {
        return [];
    }
});

const eventEmits = {};
const allEventNamesSet = new Set();
for(const {origin, root, file} of sourceFiles){
    const text = readFileSync(join(root, file), 'utf8');
    const lineStarts = [0];
    for(let index = 0; index < text.length; index++){
        if('\n' === text[index]){
            lineStarts.push(index + 1);
        }
    }
    const lineOf = (offset) => {
        let low = 0;
        let high = lineStarts.length - 1;
        while(low < high){
            const mid = Math.ceil((low + high) / 2);
            if(lineStarts[mid] <= offset){
                low = mid;
            } else {
                high = mid - 1;
            }
        }
        return low + 1;
    };

    for(const match of text.matchAll(/'(reldens\.[a-zA-Z0-9_.]+)'/g)){
        allEventNamesSet.add(match[1]);
    }
    // `emitEvent` is @reldens/cms' own wrapper around events.emit (admin-manager.js:58).
    for(const match of text.matchAll(/\.(emit|emitSync|emitEvent)\(\s*'(reldens\.[a-zA-Z0-9_.]+)'\s*(?:,\s*([^\n]*))?/g)){
        const name = match[2];
        eventEmits[name] ??= {name, sync: false, async: false, sites: []};
        eventEmits[name]['emitSync' === match[1] ? 'sync' : 'async'] = true;
        eventEmits[name].sites.push({
            origin,
            file,
            line: lineOf(match.index),
            payload: (match[3] ?? '').replace(/\);?\s*$/, '').trim()
        });
    }
}
const allEventNames = [...allEventNamesSet].sort();

// ---------------------------------------------------------------- constants
// The wire protocol lives in per-feature constants files, as string literals.
const constantsFiles = grep("^", ['lib'])
    .map(splitHit)
    .filter((hit) => hit && hit.file.endsWith('constants.js'))
    .map((hit) => hit.file)
    .filter((file, index, all) => all.indexOf(file) === index)
    .sort();

writeFileSync(join(repoRoot, 'research', 'api-surface.json'), JSON.stringify({
    generatedFrom: {
        package: 'reldens',
        version: JSON.parse(readFileSync(join(sourceRoot, 'package.json'), 'utf8')).version,
        method: 'literal grep over the source tree; every entry carries file:line'
    },
    customClassBuckets: [...new Set(customClasses.map((c) => c.bucket))].sort()
        .map((bucket) => ({
            bucket,
            sites: customClasses.filter((c) => c.bucket === bucket)
                .map(({file, line, keyedByRuntimeValue, source}) => ({file, line, keyedByRuntimeValue, source}))
        })),
    pluginSetupCallSites,
    envVars,
    configPaths: Object.values(configPaths).sort((a, b) => a.path.localeCompare(b.path)),
    events: {
        totalNames: allEventNames.length,
        names: allEventNames,
        emitSites: Object.values(eventEmits).sort((a, b) => a.name.localeCompare(b.name))
    },
    constantsFiles
}, null, 2)+'\n');

console.log('customClass buckets:', new Set(customClasses.map((c) => c.bucket)).size);
console.log('plugin setup call sites:', pluginSetupCallSites.length);
console.log('env vars:', envVars.length);
console.log('config paths:', Object.keys(configPaths).length);
console.log('event names:', allEventNames.length, '| with emit sites:', Object.keys(eventEmits).length);
console.log('constants files:', constantsFiles.length);
