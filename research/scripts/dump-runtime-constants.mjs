/**
 * Builds research/runtime-constants.json by REQUIRING the constants modules and
 * dumping their real values.
 *
 * Grep tells you a literal exists; requiring the module tells you what the value
 * actually is after concatenation, nesting and re-export. Several of these maps
 * are built at load time ('reldens.items.' + name), so a static pass cannot see
 * the final strings at all.
 *
 * This is the ground truth the zod schemas are generated against, and the test
 * suite re-runs it to prove the schemas still match the installed package.
 *
 * Usage: node research/scripts/dump-runtime-constants.mjs
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = join(import.meta.dirname, '..', '..');
const require = createRequire(join(repoRoot, 'noop.js'));
const reldensRoot = join(require.resolve('reldens/package.json'), '..');

const constantsFiles = execFileSync('find', ['lib', '-name', 'constants.js'], {
    cwd: reldensRoot, encoding: 'utf8'
}).split('\n').filter(Boolean).sort();

const modules = {};
const failures = [];

function load(importPath, absolute) {
    try {
        modules[importPath] = require(absolute);
    } catch (error) {
        failures.push({importPath, error: String(error).split('\n')[0]});
    }
}

for(const file of constantsFiles){
    load('reldens/'+file.replace(/\.js$/, ''), join(reldensRoot, file));
}

// The items and skills packages build their event names at load time, which is why
// a static scan of reldens/lib only ever sees the 'reldens.items.' prefix.
load('@reldens/items-system/lib/items-events', require.resolve('@reldens/items-system/lib/items-events'));
load('@reldens/skills/lib/skills-events', require.resolve('@reldens/skills/lib/skills-events'));
load('@reldens/items-system/lib/constants', require.resolve('@reldens/items-system/lib/constants'));
load('@reldens/skills/lib/constants', require.resolve('@reldens/skills/lib/constants'));

/** Flattens a nested constants object into dotted paths so values can be diffed. */
function flatten(value, prefix = '', out = {}) {
    for(const [key, entry] of Object.entries(value ?? {})){
        const path = prefix ? prefix+'.'+key : key;
        if(entry && 'object' === typeof entry && !Array.isArray(entry)){
            flatten(entry, path, out);
            continue;
        }
        if('function' === typeof entry){
            continue;
        }
        out[path] = entry instanceof Set ? [...entry] : entry;
    }
    return out;
}

const dumped = {};
for(const [importPath, moduleExports] of Object.entries(modules)){
    dumped[importPath] = {};
    for(const [exportName, value] of Object.entries(moduleExports)){
        dumped[importPath][exportName] = ('object' === typeof value && null !== value)
            ? flatten(value)
            : value;
    }
}

writeFileSync(join(repoRoot, 'research', 'runtime-constants.json'), JSON.stringify({
    generatedFrom: {
        package: 'reldens',
        version: require('reldens/package.json').version,
        method: 'require() of each constants module; values are the real runtime values'
    },
    failures,
    modules: dumped
}, null, 2)+'\n');

const totalKeys = Object.values(dumped)
    .flatMap((m) => Object.values(m))
    .reduce((sum, v) => sum + ('object' === typeof v ? Object.keys(v).length : 1), 0);

console.log('modules loaded:', Object.keys(dumped).length, '| failed:', failures.length);
console.log('constant leaves:', totalKeys);
for(const failure of failures){
    console.log('  FAILED', failure.importPath, '-', failure.error);
}
