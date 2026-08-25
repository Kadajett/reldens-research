/**
 * The fully-typed payload zod schemas, keyed by event name.
 *
 * These are the schemas ts-to-zod derives from the hand-written payload types in
 * docs-gen/event-api.ts (the same types the Schema API docs render), so the docs,
 * the TypeScript types and these zod schemas are one and the same description of
 * every event's payload. Opaque reldens class instances validate as `zAny` (an
 * object/any value); primitives and known shapes validate concretely. There are no
 * z.unknown()/z.any() nodes - the no-unknown-any test enforces that here too.
 *
 * `typedPayloadSchemaFor(name)` returns the schema for one event (or zAny if the
 * event has no derived schema, e.g. a name only ever listened for).
 */
import type { z } from 'zod';
import * as schemas from './generated/typed-payload-schemas';
import { RELDENS_EVENT_PAYLOAD_INFO } from './generated/event-payloads';
import { zAny } from './zod-floors';

// event name -> ts-to-zod schema variable name (e.g. reldens.serverConfigReady ->
// serverConfigReadyPayloadSchema); non-alphanumerics are dropped to match ts-to-zod,
// so a dynamic-name event (activatedRoom_) shares its base event's schema.
function schemaVarFor(name: string): string {
    const pascal = name.replace(/^reldens\./, '')
        .replace(/(^|[^a-zA-Z0-9])([a-zA-Z0-9])/g, (_m, _s, ch: string) => ch.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, '');
    return pascal.charAt(0).toLowerCase() + pascal.slice(1) + 'PayloadSchema';
}

const registry = schemas as unknown as Record<string, z.ZodType>;

// A lowercase-keyed index so acronym casing (ts-to-zod lowercases "UI" to "Ui",
// so CloseUIPayload -> closeUiPayloadSchema) still resolves against our computed name.
const lowerIndex: Record<string, z.ZodType> = {};
for(const [key, value] of Object.entries(registry)){
    if(value && 'object' === typeof value && 'def' in value){ lowerIndex[key.toLowerCase()] = value; }
}

/** event name -> its derived, fully-typed payload schema. */
export const TYPED_PAYLOAD_SCHEMAS: Record<string, z.ZodType> = {};
for(const name of Object.keys(RELDENS_EVENT_PAYLOAD_INFO)){
    const varName = schemaVarFor(name);
    const schema = registry[varName] ?? lowerIndex[varName.toLowerCase()];
    if(schema){
        TYPED_PAYLOAD_SCHEMAS[name] = schema;
    }
}

/** The fully-typed schema for one event, or the zAny floor if none was derived. */
export function typedPayloadSchemaFor(name: string): z.ZodType {
    return TYPED_PAYLOAD_SCHEMAS[name] ?? zAny;
}
