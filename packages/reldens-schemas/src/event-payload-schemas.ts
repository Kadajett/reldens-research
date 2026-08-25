/**
 * Payload schemas for ALL events, built from the extracted emit-site data.
 *
 * Three tiers, in order of strength:
 *
 *   1. Hand-verified schemas (EVENT_PAYLOADS in events.ts) - typed values, read and
 *      annotated line by line.
 *   2. Generated key schemas (this file) - for every event whose emit sites are
 *      object literals or a payload class, a looseObject requiring the extracted
 *      keys with unknown values. The KEYS are proven; the value types are not, so
 *      they stay unknown rather than being guessed.
 *   3. z.unknown() - positional, mixed and dynamic events, where demanding an
 *      object shape would be wrong (listeners receive separate arguments).
 *
 * `payloadSchemaFor` walks the tiers. `describePayload` explains what a listener
 * receives for any event, including the positional ones.
 */
import { z } from 'zod';
import { RELDENS_EVENT_PAYLOAD_INFO, type EventPayloadInfo } from './generated/event-payloads';
import { GENERATED_PAYLOAD_SCHEMAS } from './generated/payload-field-schemas';
import { zAny } from './zod-floors';
import { EVENT_PAYLOADS } from './events';

export { zAny };

export { RELDENS_EVENT_PAYLOAD_INFO };
export type { EventPayloadInfo };

/**
 * The strongest available schema for an event's payload:
 * hand-verified (typed values) > generated-from-source (typed, zAny floor) > zAny.
 * Never z.unknown(): a value the source cannot type still gets zAny, which requires
 * the key to be present without asserting a shape.
 */
export function payloadSchemaFor(name: string): z.ZodType {
    return (EVENT_PAYLOADS as Record<string, z.ZodType>)[name]
        ?? GENERATED_PAYLOAD_SCHEMAS[name]
        ?? zAny;
}

/** True when a schema exists that actually constrains the payload's keys/arity
 *  (i.e. it is more than the bare zAny floor). */
export function hasPayloadSchema(name: string): boolean {
    return Object.hasOwn(EVENT_PAYLOADS, name) || Object.hasOwn(GENERATED_PAYLOAD_SCHEMAS, name);
}

/** Human-readable description of what a listener receives. */
export function describePayload(name: string): string {
    const info = RELDENS_EVENT_PAYLOAD_INFO[name];
    if(!info){
        return 'Unknown event: no emit site was extracted for "'+name+'".';
    }
    switch(info.style){
        case 'object':
            return 'One object with keys: '+info.requiredKeys.join(', ')
                +(0 < info.sometimesKeys.length ? ' (sometimes: '+info.sometimesKeys.join(', ')+')' : '')
                +'. Sites: '+info.sites.join('; ');
        case 'class':
            return 'One '+info.className+' instance with properties: '+info.properties.join(', ')
                +'. Sites: '+info.sites.join('; ');
        case 'positional':
            return 'POSITIONAL arguments, not an object - the listener signature is ('
                +info.args.join(', ')+'). Sites: '+info.sites.join('; ');
        case 'none':
            return 'No payload. Sites: '+info.sites.join('; ');
        case 'mixed':
            return 'Emitted with different shapes at different sites - read them: '+info.sites.join('; ');
    }
}

/** Events whose listeners receive positional arguments instead of one object. */
export const POSITIONAL_EVENTS = Object.entries(RELDENS_EVENT_PAYLOAD_INFO)
    .filter(([, info]) => 'positional' === info.style)
    .map(([name]) => name)
    .sort();
