/**
 * Builds research/event-payloads.json: the payload shape of every reldens.* emit,
 * read from the emit site itself.
 *
 * Reldens documents no event payloads. lib/scan.mjs walks every emit call with a
 * balanced parenthesis scanner (not line-oriented regex - several payloads span
 * lines) and classifies each site:
 *
 *   object-literal   emit(name, {a, b: x.y}) - also resolves the common
 *                    `let event = {...}; emit(name, event)` pattern
 *   class-instance   emit(name, new SomeEvent(..)) - resolved to the class file and
 *                    the properties its constructor assigns
 *   positional       emit(name, this, client, ...) - listeners get separate params
 *   none             emit(name)
 *
 * A zod schema can only demand keys for the first two styles.
 *
 * Usage: node research/scripts/extract-event-payloads.mjs
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { extractEmitPayloads } from './lib/scan.mjs';

const repoRoot = join(import.meta.dirname, '..', '..');
const nodeModules = join(repoRoot, 'node_modules');

const scanRoots = [
    {origin: 'reldens', root: join(repoRoot, 'reldens-source'), dirs: ['lib']},
    ...['cms', 'items-system', 'skills'].map((name) => ({
        origin: '@reldens/'+name,
        root: join(nodeModules, '@reldens', name),
        dirs: ['lib']
    }))
];

const events = {};
for(const {origin, root, dirs} of scanRoots){
    for(const [name, sites] of Object.entries(extractEmitPayloads(root, dirs, origin))){
        events[name] = [...(events[name] ?? []), ...sites];
    }
}

const names = Object.keys(events).sort();
const styleCounts = {};
for(const sites of Object.values(events)){
    for(const site of sites){
        styleCounts[site.style] = (styleCounts[site.style] ?? 0) + 1;
    }
}
let uniform = 0;
for(const name of names){
    const sites = events[name];
    if(sites.every((site) => 'object-literal' === site.style)){
        const keySets = new Set(sites.map((site) => JSON.stringify(site.keys.map((entry) => entry.key).sort())));
        if(1 === keySets.size){
            uniform++;
        }
    }
}

writeFileSync(join(repoRoot, 'research', 'event-payloads.json'), JSON.stringify({
    generatedFrom: {
        method: 'balanced-paren scan of every emit site (research/scripts/lib/scan.mjs); '
            +'object keys and class properties extracted, never guessed',
        styleCounts,
        eventsWithUniformObjectPayload: uniform,
        totalEvents: names.length
    },
    events: Object.fromEntries(names.map((name) => [name, events[name]]))
}, null, 2)+'\n');

console.log('events:', names.length, '| sites by style:', JSON.stringify(styleCounts));
console.log('uniform object payloads (schemable):', uniform);
