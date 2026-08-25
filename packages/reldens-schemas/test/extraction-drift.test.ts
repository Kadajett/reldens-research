/**
 * The drift proof for the extracted payload shapes.
 *
 * These tests re-run the SAME scanner (research/scripts/lib/scan.mjs) that
 * produced the generated data, but over the INSTALLED reldens package instead of
 * the source clone. If the installed code emits different keys, sends different
 * messages, or moved an emit site, the comparison names the exact event or act
 * that changed.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { dirname, join } from 'node:path';

import { z } from 'zod';
import { RELDENS_EVENT_PAYLOAD_INFO } from '../src/generated/event-payloads';
import { RELDENS_SERVER_MESSAGE_INFO } from '../src/generated/server-messages';

/** A value that satisfies `schema`, built by walking its zod definition. Used to
 *  prove a generated schema accepts the shape it describes (fields are now typed,
 *  so a single sentinel no longer fits every field). */
function sampleFor(schema: z.ZodType): unknown {
    const def = (schema as unknown as {def: {type: string; [k: string]: unknown}}).def;
    switch(def.type){
        case 'string': return '';
        case 'number': return 0;
        case 'boolean': return false;
        case 'null': return null;
        case 'array': return [];
        case 'custom': return {};
        case 'literal': return (def.values as unknown[])?.[0] ?? (def as {value?: unknown}).value;
        case 'optional': case 'nullable': return sampleFor(def.innerType as z.ZodType);
        case 'union': return sampleFor((def.options as z.ZodType[])[0]);
        case 'tuple': return (def.items as z.ZodType[]).map(sampleFor);
        case 'object': {
            const out: Record<string, unknown> = {};
            for(const [key, field] of Object.entries(def.shape as Record<string, z.ZodType>)){
                const fieldDef = (field as unknown as {def: {type: string}}).def;
                if('optional' === fieldDef.type){ continue; }
                out[key] = sampleFor(field);
            }
            return out;
        }
        default: return {};
    }
}

const reldensRoot = dirname(require.resolve('reldens/package.json'));
const scanPath = join(__dirname, '..', '..', '..', 'research', 'scripts', 'lib', 'scan.mjs');

type Scan = {
    extractEmitPayloads: (root: string, dirs: string[], origin: string) => Record<string, any[]>;
    extractServerMessages: (root: string, dirs: string[], resolve: (expr: string) => {value: unknown; via: string}) => Record<string, any[]>;
    makeConstantResolver: (modules: Record<string, any>) => (expr: string) => {value: unknown; via: string};
};

async function loadScan(): Promise<Scan> {
    return await import(scanPath) as Scan;
}

function plainKeys(site: any): string[] {
    const keys = (site.keys ?? [])
        .filter((entry: any) => !entry.computed && !entry.spread && !entry.unparsed)
        .map((entry: any) => entry.key);
    return site.wrapped ? ['adminManager', ...keys] : keys;
}

test('event payload shapes match a fresh scan of the installed package', async () => {
    const scan = await loadScan();
    const live = scan.extractEmitPayloads(reldensRoot, ['lib'], 'reldens');

    let compared = 0;
    for(const [eventName, info] of Object.entries(RELDENS_EVENT_PAYLOAD_INFO)){
        // Only reldens-origin, single-style events are comparable here; the sibling
        // packages are covered by the constants tests.
        const generatedSites = info.sites.filter((site) => site.startsWith('reldens:'));
        if(0 === generatedSites.length){
            continue;
        }
        const liveSites = live[eventName];
        assert.ok(liveSites, eventName+': no emit site in the installed package any more');

        if('object' === info.style){
            const liveKeys = [...new Set(liveSites
                .filter((site) => 'object-literal' === site.style)
                .flatMap(plainKeys))].sort();
            for(const key of info.requiredKeys){
                assert.ok(
                    liveKeys.includes(key),
                    eventName+': required key "'+key+'" missing from installed emit sites ('+liveKeys.join(', ')+')'
                );
            }
            compared++;
        }
        if('class' === info.style){
            const liveSite = liveSites.find((site) => 'class-instance' === site.style);
            assert.ok(liveSite, eventName+': class-instance emit no longer found');
            assert.equal(liveSite.className, info.className, eventName+': payload class changed');
            assert.deepEqual(
                (liveSite.properties ?? []).sort(),
                info.properties.slice().sort(),
                eventName+': '+info.className+' properties changed'
            );
            compared++;
        }
        if('positional' === info.style){
            const liveSite = liveSites[0];
            assert.equal(
                liveSite.style,
                'positional',
                eventName+': emit style changed from positional to '+liveSite.style
            );
            assert.equal(
                (liveSite.args ?? []).length,
                info.args.length,
                eventName+': positional argument count changed'
            );
            compared++;
        }
    }
    assert.ok(150 < compared, 'expected to compare most events, got '+compared);
});

test('server message shapes match a fresh scan of the installed package', async () => {
    const scan = await loadScan();
    // Build the resolver from the LIVE constants modules, not the snapshot.
    const modules: Record<string, any> = {};
    for(const [group, importPath] of Object.entries({
        GameConst: 'reldens/lib/game/constants',
        ActionsConst: 'reldens/lib/actions/constants',
        ObjectsConst: 'reldens/lib/objects/constants',
        ChatConst: 'reldens/lib/chat/constants',
        UsersConst: 'reldens/lib/users/constants',
        RewardsConst: 'reldens/lib/rewards/constants',
        ScoresConst: 'reldens/lib/scores/constants',
        TeamsConst: 'reldens/lib/teams/constants',
        AudioConst: 'reldens/lib/audio/constants',
        AdsConst: 'reldens/lib/ads/constants',
        RoomsConst: 'reldens/lib/rooms/constants',
        InventoryConst: 'reldens/lib/inventory/constants'
    })){
        const flat: Record<string, unknown> = {};
        const walk = (value: any, prefix: string) => {
            for(const [key, entry] of Object.entries(value ?? {})){
                const path = prefix ? prefix+'.'+key : key;
                if(entry && 'object' === typeof entry && !Array.isArray(entry) && !(entry instanceof Set)){
                    walk(entry, path);
                } else if('function' !== typeof entry){
                    flat[path] = entry;
                }
            }
        };
        walk(require(importPath)[group], '');
        modules[importPath] = {[group]: flat};
    }
    const resolver = scan.makeConstantResolver(modules);
    const live = scan.extractServerMessages(reldensRoot, ['lib', 'theme'], resolver);

    for(const [act, info] of Object.entries(RELDENS_SERVER_MESSAGE_INFO)){
        const liveSites = live[act];
        assert.ok(liveSites, 'act "'+act+'": no send/broadcast site in the installed package any more');
        const liveKeys = [...new Set(liveSites.flatMap((site) => site.keys
            .filter((entry: any) => !entry.spread)
            .map((entry: any) => 'act' === entry.key || /ACTION_KEY/.test(entry.key) ? 'act' : entry.key)))];
        for(const key of info.requiredKeys){
            assert.ok(
                liveKeys.includes(key),
                'act "'+act+'": required key "'+key+'" missing from installed sites ('+liveKeys.join(', ')+')'
            );
        }
    }
});

test('every schemable payload schema accepts a payload built from its own keys', async () => {
    const { payloadSchemaFor, hasPayloadSchema } = await import('../src/event-payload-schemas');
    const { EVENT_PAYLOADS } = await import('../src/events');
    let checked = 0;
    for(const [eventName, info] of Object.entries(RELDENS_EVENT_PAYLOAD_INFO)){
        if('object' !== info.style){
            continue;
        }
        if(Object.hasOwn(EVENT_PAYLOADS, eventName)){
            // Hand-verified schemas demand real value types, not placeholders; they
            // are exercised by their own tests in against-live-package.test.ts.
            continue;
        }
        assert.ok(hasPayloadSchema(eventName), eventName+' should have a schema');
        const schema = payloadSchemaFor(eventName);
        // a value satisfying each field's now-typed schema (not a bare sentinel)
        const payload = sampleFor(schema) as Record<string, unknown>;
        const result = schema.safeParse(payload);
        assert.ok(result.success, eventName+': '+JSON.stringify(result.error?.issues?.[0]));
        // And dropping a required key must fail.
        if(0 < info.requiredKeys.length && Object.hasOwn(payload, info.requiredKeys[0]!)){
            const broken = {...payload};
            delete broken[info.requiredKeys[0]!];
            assert.ok(
                !schema.safeParse(broken).success,
                eventName+': schema should demand "'+info.requiredKeys[0]+'"'
            );
        }
        checked++;
    }
    assert.ok(100 < checked, 'expected 100+ schemable events, got '+checked);
});

test('positional events get a tuple schema, never an object schema', async () => {
    const { payloadSchemaFor, POSITIONAL_EVENTS } = await import('../src/event-payload-schemas');
    const { RELDENS_EVENT_PAYLOAD_INFO } = await import('../src/generated/event-payloads');
    const { EVENT_PAYLOADS } = await import('../src/events');
    for(const eventName of POSITIONAL_EVENTS){
        if(Object.hasOwn(EVENT_PAYLOADS, eventName)){
            continue; // hand-verified overrides are allowed to know better
        }
        const schema = payloadSchemaFor(eventName);
        // a positional listener receives separate args - the schema is a tuple of them,
        // so it accepts the argument LIST and rejects a lone non-array value
        assert.ok(schema.safeParse(sampleFor(schema)).success, eventName+' should accept its arg list');
        assert.ok(!schema.safeParse(42).success, eventName+' should reject a non-array');
    }
});
