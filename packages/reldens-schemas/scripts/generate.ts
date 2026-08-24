/**
 * Regenerates src/generated/* from the audit artifacts in research/.
 *
 * Nothing in src/generated/ is hand-written. The chain is:
 *
 *   node_modules/reldens          the installed package
 *     -> graphify extract          AST graph, every edge EXTRACTED
 *     -> research/scripts/*.mjs    api-inventory.json, api-surface.json, runtime-constants.json
 *     -> this script               src/generated/*.ts
 *     -> src/*.ts                  the hand-written schemas that consume them
 *     -> test/*.test.ts            re-reads the live package and fails if any of it drifted
 *
 * Run `npm run generate` after upgrading reldens, then `npm test`.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const packageRoot = dirname(__dirname);
const repoRoot = join(packageRoot, '..', '..');
const researchDir = join(repoRoot, 'research');
const outDir = join(packageRoot, 'src', 'generated');

interface ApiSurface {
    generatedFrom: {package: string; version: string; method: string};
    customClassBuckets: Array<{
        bucket: string;
        sites: Array<{file: string; line: number; keyedByRuntimeValue: boolean; source: string}>;
    }>;
    pluginSetupCallSites: Array<{file: string; line: number; source: string}>;
    envVars: Array<{name: string; inInstallTemplate: boolean; readBy: string[]}>;
    configPaths: Array<{path: string; sites: Array<{file: string; line: number}>}>;
    events: {
        totalNames: number;
        names: string[];
        emitSites: Array<{
            name: string;
            sync: boolean;
            async: boolean;
            sites: Array<{origin: string; file: string; line: number; payload: string}>;
        }>;
    };
}

interface RuntimeConstants {
    generatedFrom: {package: string; version: string; method: string};
    modules: Record<string, Record<string, Record<string, unknown> | unknown>>;
}

interface ApiInventory {
    generatedFrom: {version: string; graphNodes: number; graphLinks: number; allEdgesExtracted: boolean};
    demonstratedImportPaths: string[];
    subclassCountsInsidePlatform: Record<string, number>;
    exports: Array<{
        name: string;
        importPath: string;
        exportedFrom: {file: string; line: number};
        declaredIn: {file: string; line: number} | null;
        resolution: string | null;
        kind: string;
        extends: string | null;
        methods: string[];
        graphInboundEdges: number;
        demonstratedInProjectTemplate: boolean;
    }>;
}

function read<T>(name: string): T {
    return JSON.parse(readFileSync(join(researchDir, name), 'utf8')) as T;
}

const surface = read<ApiSurface>('api-surface.json');
const constants = read<RuntimeConstants>('runtime-constants.json');
const inventory = read<ApiInventory>('api-inventory.json');

const header = (what: string): string => `/**
 * GENERATED - do not edit by hand.
 *
 * ${what}
 *
 * Source: reldens@${surface.generatedFrom.version}
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */
`;

const asConst = (value: unknown): string => JSON.stringify(value, null, 4);

// ---------------------------------------------------------------- events
const emitByName = new Map(surface.events.emitSites.map((entry) => [entry.name, entry]));

type ProvenanceEntry = {
    emitted: boolean;
    sync: boolean;
    async: boolean;
    origin: string | null;
    site: string | null;
    emitSiteCount: number;
};

const eventProvenance: Array<readonly [string, ProvenanceEntry]> = surface.events.names
    .filter((name) => !name.endsWith('.'))
    .map((name) => {
        const emit = emitByName.get(name);
        const first = emit?.sites[0];
        return [name, {
            emitted: Boolean(emit),
            sync: emit?.sync ?? false,
            async: emit?.async ?? false,
            origin: first?.origin ?? null,
            site: first ? first.file+':L'+first.line : null,
            emitSiteCount: emit?.sites.length ?? 0
        }] as const;
    });

// The items and skills packages build their event names at load time
// ('reldens.items.' + name), so the literal scan above only ever sees the prefix.
// Their real values come from the runtime dump, and each one's emit status is
// verified by looking for a `<LocalName>.<KEY>` reference inside `.emit(` in the
// owning package. A name that is defined but never emitted (LOADED_OWNER_SKILLS is
// one) is recorded emitted: false, exactly like an unemitted reldens literal.
const runtimeEventModules: Array<{importPath: string; localName: string; origin: string; pkgDir: string}> = [
    {
        importPath: '@reldens/items-system/lib/items-events',
        localName: 'ItemsEvents',
        origin: '@reldens/items-system',
        pkgDir: join(repoRoot, 'node_modules', '@reldens', 'items-system')
    },
    {
        importPath: '@reldens/skills/lib/skills-events',
        localName: 'SkillsEvents',
        origin: '@reldens/skills',
        pkgDir: join(repoRoot, 'node_modules', '@reldens', 'skills')
    }
];

const alreadyKnown = new Set(eventProvenance.map(([name]) => name));
for(const {importPath, localName, origin, pkgDir} of runtimeEventModules){
    const moduleDump = constants.modules[importPath] ?? {};
    const entries: Array<{ref: string; value: string}> = [];
    for(const [exportName, value] of Object.entries(moduleDump)){
        if('PREF' === exportName){
            continue;
        }
        if('string' === typeof value){
            entries.push({ref: localName+'.'+exportName, value});
            continue;
        }
        for(const [subKey, subValue] of Object.entries(value as Record<string, unknown>)){
            if('string' === typeof subValue){
                entries.push({ref: localName+'.'+exportName+'.'+subKey, value: subValue});
            }
        }
    }
    for(const {ref, value} of entries){
        if(alreadyKnown.has(value)){
            continue;
        }
        let emitFiles: string[] = [];
        try {
            emitFiles = execFileSync('grep', ['-rl', 'emit('+ref, 'lib'], {cwd: pkgDir, encoding: 'utf8'})
                .split('\n').filter(Boolean);
        } catch {
            emitFiles = [];
        }
        alreadyKnown.add(value);
        eventProvenance.push([value, {
            emitted: 0 < emitFiles.length,
            // Both packages emit through events.emit (awaited); no emitSync usages found.
            sync: false,
            async: 0 < emitFiles.length,
            origin: 0 < emitFiles.length ? origin : null,
            site: 0 < emitFiles.length ? emitFiles[0]!+' ('+ref+')' : null,
            emitSiteCount: emitFiles.length
        }]);
    }
}
eventProvenance.sort((a, b) => a[0].localeCompare(b[0]));

writeFileSync(join(outDir, 'events.ts'), header(
    `Every 'reldens.*' event name found in reldens and its @reldens/* siblings, with the\n * first emit site for each. "emitted: false" means the name appears only in listeners,\n * which usually means a sibling package emits it under a name built at runtime.`
)+`
export const RELDENS_EVENT_NAMES = ${asConst(eventProvenance.map(([name]) => name))} as const;

export type ReldensEventName = typeof RELDENS_EVENT_NAMES[number];

export interface EventProvenance {
    /** Whether an emit site was found. False means listeners exist but no literal emit. */
    emitted: boolean;
    /** Emitted with emitSync - the listener runs inside the caller's tick and is not awaited. */
    sync: boolean;
    /** Emitted with emit - the listener is awaited. */
    async: boolean;
    /** Which package emits it. */
    origin: string | null;
    /** file:Lnnn of the first emit site. */
    site: string | null;
    emitSiteCount: number;
}

export const RELDENS_EVENT_PROVENANCE: Record<ReldensEventName, EventProvenance> = ${
    asConst(Object.fromEntries(eventProvenance))
};
`);

// ---------------------------------------------------------------- custom classes
const buckets = surface.customClassBuckets
    .filter((entry) => entry.bucket.startsWith('server/') || entry.bucket.startsWith('client/'))
    .map((entry) => {
        const site = entry.sites[0]!;
        return [entry.bucket, {
            side: entry.bucket.startsWith('server/') ? 'server' : 'client',
            keyedByRuntimeValue: entry.sites.some((s) => s.keyedByRuntimeValue),
            site: site.file+':L'+site.line,
            lookupSiteCount: entry.sites.length
        }] as const;
    });

writeFileSync(join(outDir, 'custom-classes.ts'), header(
    `The complete customClasses registry: every path Reldens looks a user-supplied class\n * up under at runtime. "keyedByRuntimeValue" means the bucket is followed by a key that\n * comes from the database (an object class key, a room's roomClassPath), so the schema\n * accepts any string there.`
)+`
export const CUSTOM_CLASS_BUCKETS = ${asConst(buckets.map(([path]) => path))} as const;

export type CustomClassBucket = typeof CUSTOM_CLASS_BUCKETS[number];

export interface CustomClassBucketProvenance {
    side: 'server' | 'client';
    /** The bucket is a prefix; the final segment is a runtime key from the database. */
    keyedByRuntimeValue: boolean;
    /** file:Lnnn of the lookup. */
    site: string;
    lookupSiteCount: number;
}

export const CUSTOM_CLASS_BUCKET_PROVENANCE: Record<CustomClassBucket, CustomClassBucketProvenance> = ${
    asConst(Object.fromEntries(buckets))
};
`);

// ---------------------------------------------------------------- env
writeFileSync(join(outDir, 'env.ts'), header(
    `Every RELDENS_* environment variable read by reldens or one of its @reldens/* siblings,\n * plus the ones the installer writes into .env. "readBy" is empty for variables that only\n * appear in the .env template.`
)+`
export const RELDENS_ENV_VARS = ${asConst(surface.envVars.map((entry) => entry.name))} as const;

export type ReldensEnvVar = typeof RELDENS_ENV_VARS[number];

export const RELDENS_ENV_PROVENANCE: Record<ReldensEnvVar, {inInstallTemplate: boolean; readBy: string[]}> = ${
    asConst(Object.fromEntries(surface.envVars.map((entry) => [
        entry.name,
        {inInstallTemplate: entry.inInstallTemplate, readBy: entry.readBy}
    ])))
};
`);

// ---------------------------------------------------------------- config paths
writeFileSync(join(outDir, 'config-paths.ts'), header(
    `Every database-backed configuration path read through ConfigManager.get() /\n * getWithoutLogs() with a literal argument. Paths assembled at runtime are not here.`
)+`
export const RELDENS_CONFIG_PATHS = ${asConst(surface.configPaths.map((entry) => entry.path))} as const;

export type ReldensConfigPath = typeof RELDENS_CONFIG_PATHS[number];

export const RELDENS_CONFIG_PATH_SITES: Record<ReldensConfigPath, string> = ${
    asConst(Object.fromEntries(surface.configPaths.map((entry) => [
        entry.path,
        entry.sites[0]!.file+':L'+entry.sites[0]!.line
    ])))
};
`);

// ---------------------------------------------------------------- constants
// Only the reldens/lib modules; the sibling packages' constants are re-exported by
// name from their own packages and are not part of reldens' own surface.
const reldensConstants: Record<string, Record<string, unknown>> = {};
for(const [importPath, exportsMap] of Object.entries(constants.modules)){
    if(!importPath.startsWith('reldens/lib/')){
        continue;
    }
    for(const [exportName, value] of Object.entries(exportsMap)){
        if(value && 'object' === typeof value){
            reldensConstants[exportName] = value as Record<string, unknown>;
        }
    }
}

writeFileSync(join(outDir, 'constants.ts'), header(
    `The real runtime values of every reldens constants module, flattened to dotted paths.\n * Produced by require()-ing each module, not by parsing it, so concatenated and nested\n * values are the actual strings the wire protocol uses.`
)+`
export const RELDENS_CONSTANTS = ${asConst(reldensConstants)} as const;

export type ReldensConstantsGroup = keyof typeof RELDENS_CONSTANTS;
`);

// ---------------------------------------------------------------- exports index
writeFileSync(join(outDir, 'exports.ts'), header(
    `Every module.exports.* in the reldens package, with where it is declared, what it\n * extends, and its method list from the graphify AST graph.\n *\n * "demonstratedInProjectTemplate" marks the nine import paths the platform's own project\n * template and sample plugins use. That is the strongest available evidence of what is\n * intended to be public: everything else is reachable but undocumented.`
)+`
export interface ReldensExport {
    name: string;
    importPath: string;
    exportedFrom: {file: string; line: number};
    declaredIn: {file: string; line: number} | null;
    /** How the declaration was located: declared-in-file, or resolved through a re-export. */
    resolution: string | null;
    kind: string;
    extends: string | null;
    methods: string[];
    graphInboundEdges: number;
    demonstratedInProjectTemplate: boolean;
}

export const RELDENS_DEMONSTRATED_IMPORT_PATHS = ${asConst(inventory.demonstratedImportPaths)} as const;

export const RELDENS_SUBCLASS_COUNTS = ${asConst(inventory.subclassCountsInsidePlatform)} as const;

export const RELDENS_EXPORTS: ReldensExport[] = ${asConst(inventory.exports)};
`);

// ---------------------------------------------------------------- meta
writeFileSync(join(outDir, 'meta.ts'), header('Provenance for the whole generated set.')+`
export const GENERATION_META = {
    reldensVersion: ${JSON.stringify(surface.generatedFrom.version)},
    graph: {
        nodes: ${inventory.generatedFrom.graphNodes},
        links: ${inventory.generatedFrom.graphLinks},
        allEdgesExtracted: ${inventory.generatedFrom.allEdgesExtracted}
    },
    counts: {
        exports: ${inventory.exports.length},
        events: ${eventProvenance.length},
        customClassBuckets: ${buckets.length},
        envVars: ${surface.envVars.length},
        configPaths: ${surface.configPaths.length}
    }
} as const;
`);

try {
    execFileSync('git', ['diff', '--stat', '--', 'packages/reldens-schemas/src/generated'], {cwd: repoRoot});
} catch {
    // not a git repo, or nothing to diff
}

console.log('generated:', ['events', 'custom-classes', 'env', 'config-paths', 'constants', 'exports', 'meta']
    .map((name) => name+'.ts').join(', '));
console.log('events:', eventProvenance.length, '| buckets:', buckets.length,
    '| env:', surface.envVars.length, '| config paths:', surface.configPaths.length,
    '| exports:', inventory.exports.length);
