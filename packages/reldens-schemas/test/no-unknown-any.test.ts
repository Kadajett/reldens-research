/**
 * The "no unknowns, no anys" enforcement.
 *
 * Every payload schema this package hands out must type its values. A z.unknown()
 * or z.any() anywhere in a schema tree - however deep - fails this test. The honest
 * floor for a value the reldens source cannot type is `zAny` (z.custom accepting any
 * value while still requiring the key), which is NOT z.unknown()/z.any() and so is
 * allowed. This is what keeps the generated docs free of `unknown`/`any`.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { z } from 'zod';

import { RELDENS_EVENT_PAYLOAD_INFO } from '../src/generated/event-payloads';
import { payloadSchemaFor } from '../src/event-payload-schemas';
import { EVENT_PAYLOADS } from '../src/events';

type Def = {type: string; [k: string]: unknown};
function defOf(schema: unknown): Def | null {
    const d = (schema as {def?: Def})?.def;
    return d && 'string' === typeof d.type ? d : null;
}

/** Every banned node (unknown/any) reachable from a schema, as a path list. */
function findBanned(schema: unknown, path: string, seen = new Set<unknown>()): string[] {
    if(!schema || 'object' !== typeof schema || seen.has(schema)){ return []; }
    seen.add(schema);
    const def = defOf(schema);
    if(!def){ return []; }
    const hits: string[] = [];
    if('unknown' === def.type || 'any' === def.type){ hits.push(path+' -> z.'+def.type+'()'); }
    const recur = (child: unknown, label: string) => hits.push(...findBanned(child, path+'.'+label, seen));
    if(def.shape){ for(const [k, v] of Object.entries(def.shape as Record<string, unknown>)){ recur(v, k); } }
    if(def.element){ recur(def.element, '[]'); }
    if(def.items){ (def.items as unknown[]).forEach((it, i) => recur(it, '['+i+']')); }
    if(def.rest){ recur(def.rest, '[...]'); }
    if(def.innerType){ recur(def.innerType, 'inner'); }
    if(def.options){ (def.options as unknown[]).forEach((o, i) => recur(o, '|'+i)); }
    if(def.valueType){ recur(def.valueType, 'value'); }
    if(def.keyType){ recur(def.keyType, 'key'); }
    if(def.catchall){ recur(def.catchall, 'catchall'); }
    if(def.left){ recur(def.left, 'left'); }
    if(def.right){ recur(def.right, 'right'); }
    return hits;
}

test('no payload schema contains z.unknown() or z.any(), at any depth', () => {
    const offenders: string[] = [];
    for(const name of Object.keys(RELDENS_EVENT_PAYLOAD_INFO)){
        offenders.push(...findBanned(payloadSchemaFor(name), name));
    }
    assert.equal(offenders.length, 0,
        'found '+offenders.length+' banned nodes:\n'+offenders.slice(0, 40).join('\n'));
});

test('hand-verified EVENT_PAYLOADS are also free of z.unknown()/z.any()', () => {
    const offenders: string[] = [];
    for(const [name, schema] of Object.entries(EVENT_PAYLOADS as Record<string, z.ZodType>)){
        offenders.push(...findBanned(schema, name));
    }
    assert.equal(offenders.length, 0,
        'found '+offenders.length+' banned nodes:\n'+offenders.slice(0, 40).join('\n'));
});

test('the ENTIRE exported schema surface is free of z.unknown()/z.any()', async () => {
    const S = await import('../src/index') as Record<string, unknown>;
    const offenders: string[] = [];
    for(const [exportName, value] of Object.entries(S)){
        if(defOf(value)){
            offenders.push(...findBanned(value, exportName));
        } else if(value instanceof Map){
            for(const [k, v] of value){ if(defOf(v)){ offenders.push(...findBanned(v, exportName+'.'+String(k))); } }
        } else if(value && 'object' === typeof value && !Array.isArray(value)){
            for(const [k, v] of Object.entries(value)){ if(defOf(v)){ offenders.push(...findBanned(v, exportName+'.'+k)); } }
        }
    }
    assert.equal(offenders.length, 0,
        'found '+offenders.length+' banned nodes across '+Object.keys(S).length+' exports:\n'+offenders.slice(0, 40).join('\n'));
});
