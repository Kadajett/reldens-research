/**
 * Builds research/server-messages.json: every message object the server sends to a
 * client (`client.send('*', {...})`, `broadcast('*', {...})`), keyed by the resolved
 * wire value of its `act` field.
 *
 * Act references (GameConst.UI, ObjectsConst.OBJECT_INTERACTION) and computed keys
 * ([ActionsConst.DATA_OWNER_TYPE]) resolve through research/runtime-constants.json,
 * so the output is keyed and shaped by what actually travels on the wire.
 *
 * Usage: node research/scripts/extract-server-messages.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { extractServerMessages, makeConstantResolver } from './lib/scan.mjs';

const repoRoot = join(import.meta.dirname, '..', '..');
const runtime = JSON.parse(readFileSync(join(repoRoot, 'research', 'runtime-constants.json'), 'utf8'));
const resolver = makeConstantResolver(runtime.modules);

const messages = extractServerMessages(join(repoRoot, 'reldens-source'), ['lib', 'theme'], resolver);

let totalSites = 0;
let unresolvedActs = 0;
for(const sites of Object.values(messages)){
    totalSites += sites.length;
    unresolvedActs += sites.filter((site) => site.actVia.startsWith('unresolved')).length;
}

writeFileSync(join(repoRoot, 'research', 'server-messages.json'), JSON.stringify({
    generatedFrom: {
        method: "balanced-paren scan of every client.send('*', {...}) / broadcast('*', {...}) literal "
            +'(research/scripts/lib/scan.mjs); act values and computed keys resolved through runtime-constants.json',
        totalSites,
        distinctActs: Object.keys(messages).length,
        unresolvedActs
    },
    messages
}, null, 2)+'\n');

console.log('sites:', totalSites, '| distinct act values:', Object.keys(messages).length, '| unresolved acts:', unresolvedActs);
