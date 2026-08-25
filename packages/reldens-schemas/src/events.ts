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
import { zAny, zInstance, loose } from './zod-floors';
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
    loose({
        serverManager: loose({
            configManager: loose({
                configList: loose({
                    server: loose({
                        customClasses: z.record(z.string(), zAny)
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
    loose({
        gameManager: loose({
            config: loose({
                client: loose({
                    customClasses: z.record(z.string(), zAny)
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
    loose({
        loginResult: loose({user: loose({role_id: z.number().optional()})}),
        result: loose({confirm: z.boolean().optional()})
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
    loose({
        roomScene: zInstance,
        client: zInstance,
        options: zInstance,
        userModel: zInstance,
        loggedPlayer: zInstance,
        isGuest: z.boolean()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/rooms/server/scene.js', line: 156, note: "emit('reldens.joinRoomEnd', new JoinedSceneRoomEvent(...))"},
            {file: 'lib/rooms/server/events/joined-scene-room-event.js', line: 1, note: 'constructor assigns roomScene/client/options/userModel/loggedPlayer/isGuest'}
        ],
        describe: 'Payload of reldens.joinRoomEnd - one of the platform\'s three dedicated payload '
            +'classes. Properties verified by the emit-site extractor (note roomScene, not room).'
    }
);

/** Payload schemas for the events whose shape has been verified. */
export const EVENT_PAYLOADS = {
    'reldens.beforeInitializeManagers': BeforeInitializeManagersPayloadSchema,
    'reldens.beforeJoinGame': BeforeJoinGamePayloadSchema,
    'reldens.roomLoginOnAuth': RoomLoginOnAuthPayloadSchema,
    'reldens.joinRoomEnd': JoinedSceneRoomEventSchema
} as const;
