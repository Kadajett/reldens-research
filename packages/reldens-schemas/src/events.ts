/**
 * Events.
 *
 * 231 event names, extracted from reldens and its @reldens/* siblings. Each one
 * carries where it is emitted from and whether it is emitted with `emit` (awaited) or
 * `emitSync` (inside the caller's tick, not awaited).
 *
 * That sync/async split is not cosmetic. 42 of these are emitted synchronously, several
 * from inside the physics tick, so a slow listener on one of them slows the room down
 * for every player in it. `isSyncEvent()` lets a plugin definition be checked for that.
 *
 * Payload shapes are NOT uniform and Reldens documents none of them. The payload
 * schemas below cover the handful whose shape was verified at the emit site; every
 * other event validates its payload as `unknown` rather than inventing a shape.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { RELDENS_EVENT_NAMES, RELDENS_EVENT_PROVENANCE, type ReldensEventName } from './generated/events';

export { RELDENS_EVENT_NAMES, RELDENS_EVENT_PROVENANCE };
export type { ReldensEventName };

export const ReldensEventNameSchema = withSource(
    z.enum(RELDENS_EVENT_NAMES),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/**/*.js', line: 0, note: "every 'reldens.*' literal, plus @reldens/* siblings"}],
        describe: 'A known Reldens event name. Games may emit their own names through the same manager; '
            +'use ReldensOrCustomEventNameSchema for those.'
    }
);

/** Accepts a known Reldens event plus any custom name a game emits on the same manager. */
export const ReldensOrCustomEventNameSchema = z.union([
    ReldensEventNameSchema,
    z.string().min(1)
]);

export function isKnownEvent(name: string): name is ReldensEventName {
    return Object.hasOwn(RELDENS_EVENT_PROVENANCE, name);
}

/** True when the event is emitted with emitSync, so listeners must stay cheap. */
export function isSyncEvent(name: string): boolean {
    return isKnownEvent(name) && RELDENS_EVENT_PROVENANCE[name].sync;
}

/** file:Lnnn of the first emit site, or null for a name only ever listened for. */
export function emitSiteOf(name: string): string | null {
    return isKnownEvent(name) ? RELDENS_EVENT_PROVENANCE[name].site : null;
}

// ---------------------------------------------------------------------------
// Verified payloads.
// ---------------------------------------------------------------------------

export const BeforeInitializeManagersPayloadSchema = withSource(
    z.looseObject({
        serverManager: z.looseObject({
            configManager: z.looseObject({
                configList: z.looseObject({
                    server: z.looseObject({
                        customClasses: z.record(z.string(), z.unknown())
                    })
                })
            })
        })
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/server/manager.js', line: 144, note: "emit('reldens.beforeInitializeManagers', ...)"},
            {file: 'theme/plugins/server-plugin.js', line: 29, note: 'props.serverManager.configManager.configList.server.customClasses'}
        ],
        describe: 'The registration deadline for server custom classes. RoomsManager reads '
            +'server/customClasses/roomsClass/* immediately after this event, so a class registered '
            +'later is invisible to it.'
    }
);

export const BeforeJoinGamePayloadSchema = withSource(
    z.looseObject({
        gameManager: z.looseObject({
            config: z.looseObject({
                client: z.looseObject({
                    customClasses: z.record(z.string(), z.unknown())
                })
            })
        })
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'theme/plugins/client-plugin.js',
            line: 25,
            note: 'props.gameManager.config.client.customClasses'
        }],
        describe: 'The registration deadline for client custom classes. The scene preloader reads '
            +'client/customClasses/objects/* right after the join.'
    }
);

export const RoomLoginOnAuthPayloadSchema = withSource(
    z.looseObject({
        loginResult: z.looseObject({user: z.looseObject({role_id: z.number().optional()})}),
        result: z.looseObject({confirm: z.boolean().optional()})
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'theme/index.js.dist',
            line: 49,
            note: 'props.loginResult.user.role_id / props.result.confirm = false'
        }],
        describe: 'Custom authentication hook. Setting props.result.confirm = false denies the login. '
            +'Shape read from the platform\'s own project template, which is the only place it is shown.'
    }
);

export const JoinedSceneRoomEventSchema = withSource(
    z.looseObject({
        room: z.unknown(),
        client: z.unknown(),
        options: z.unknown(),
        userModel: z.unknown(),
        loggedPlayer: z.unknown(),
        isGuest: z.boolean().optional()
    }),
    {
        confidence: 'INFERRED',
        sources: [
            {file: 'lib/rooms/server/scene.js', line: 156, note: "emit('reldens.joinRoomEnd', new JoinedSceneRoomEvent(...))"},
            {file: 'lib/rooms/server/events/joined-scene-room-event.js', line: 1, note: 'the payload class'}
        ],
        describe: 'Payload of reldens.joinRoomEnd. One of the few events with a dedicated payload class '
            +'rather than an ad-hoc object literal. Field names come from the constructor arguments; '
            +'the property names it assigns were not individually verified, hence INFERRED.'
    }
);

/** Payload schemas for the events whose shape has been verified. */
export const EVENT_PAYLOADS = {
    'reldens.beforeInitializeManagers': BeforeInitializeManagersPayloadSchema,
    'reldens.beforeJoinGame': BeforeJoinGamePayloadSchema,
    'reldens.roomLoginOnAuth': RoomLoginOnAuthPayloadSchema,
    'reldens.joinRoomEnd': JoinedSceneRoomEventSchema
} as const;

/**
 * The payload schema for an event, or `z.unknown()` when the shape has not been
 * verified. Deliberately not a guess: an unverified event gets no false confidence.
 */
export function payloadSchemaFor(name: string): z.ZodType {
    return (EVENT_PAYLOADS as Record<string, z.ZodType>)[name] ?? z.unknown();
}
