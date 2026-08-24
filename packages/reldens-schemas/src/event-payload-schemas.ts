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
import { EVENT_PAYLOADS } from './events';

export { RELDENS_EVENT_PAYLOAD_INFO };
export type { EventPayloadInfo };

const generatedSchemas = new Map<string, z.ZodType>();

function buildSchema(name: string, info: EventPayloadInfo): z.ZodType | null {
    if('object' === info.style){
        const shape: Record<string, z.ZodType> = {};
        for(const key of info.requiredKeys){
            shape[key] = z.unknown();
        }
        for(const key of info.sometimesKeys){
            shape[key] = z.unknown().optional();
        }
        return z.looseObject(shape).meta({
            description: 'Keys extracted from '+info.sites.join('; ')
                +(info.hasSpreadOrComputed ? '. Site uses spreads or computed keys, so extra keys are expected.' : ''),
            reldensPayloadInfo: info
        });
    }
    if('class' === info.style){
        const shape: Record<string, z.ZodType> = {};
        for(const property of info.properties){
            shape[property] = z.unknown();
        }
        return z.looseObject(shape).meta({
            description: 'Instance of '+info.className+' ('+(info.classFile ?? 'unresolved')
                +'); properties are the constructor assignments.',
            reldensPayloadInfo: info
        });
    }
    return null;
}

for(const [name, info] of Object.entries(RELDENS_EVENT_PAYLOAD_INFO)){
    const schema = buildSchema(name, info);
    if(schema){
        generatedSchemas.set(name, schema);
    }
}

/**
 * The strongest available schema for an event's payload:
 * hand-verified > generated keys > unknown.
 */
export function payloadSchemaFor(name: string): z.ZodType {
    return (EVENT_PAYLOADS as Record<string, z.ZodType>)[name]
        ?? generatedSchemas.get(name)
        ?? z.unknown();
}

/** True when a schema exists that actually constrains the payload. */
export function hasPayloadSchema(name: string): boolean {
    return Object.hasOwn(EVENT_PAYLOADS, name) || generatedSchemas.has(name);
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
