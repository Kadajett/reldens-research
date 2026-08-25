/**
 * The room protocol.
 *
 * Every message key here is read out of `RELDENS_CONSTANTS`, which is the real value
 * of the constants module at require() time - not a string typed into this file. If a
 * key changes upstream, regeneration changes these schemas and the test suite fails
 * loudly rather than the literals quietly drifting.
 *
 * Messages travel on Colyseus' wildcard channel: `room.send('*', message)`.
 *
 * The one shape that breaks the pattern is movement, which has no `act` key at all -
 * `{dir: 'up'}` on its own. That is why the client-to-server union is a plain union
 * rather than a discriminated one.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { zAny, loose } from './zod-floors';
import { RELDENS_CONSTANTS } from './generated/constants';

const Game = RELDENS_CONSTANTS.GameConst;
const Actions = RELDENS_CONSTANTS.ActionsConst;
const Objects = RELDENS_CONSTANTS.ObjectsConst;

/** GameConst.ACTION_KEY - the field every non-movement message is tagged with. */
export const ACTION_KEY = Game['ACTION_KEY'];

export const DirectionSchema = withSource(
    z.enum([Game['UP'], Game['DOWN'], Game['LEFT'], Game['RIGHT']]),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/game/constants.js', line: 0, note: "GameConst UP/DOWN/LEFT/RIGHT = 'up'/'down'/'left'/'right'"}],
        describe: 'Walk directions. Values are the runtime values of GameConst.'
    }
);

// ---------------------------------------------------------------- client -> server

export const MovementMessageSchema = withSource(
    z.strictObject({dir: DirectionSchema}),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/rooms/server/scene.js', line: 0, note: 'movement branch reads message.dir with no act key'}],
        describe: 'Start walking. Note there is NO act key - this message is just {dir}. '
            +'A direction only takes effect on a tick where the body\'s sideways velocity is zero, '
            +'so a stop first and a retry or two is normal when leaving through a doorway.'
    }
);

export const StopMessageSchema = z.strictObject({
    [ACTION_KEY]: z.literal(Game['STOP'])
});

export const PointerMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Game['POINTER']),
        x: z.number(),
        y: z.number(),
        column: z.number().int().optional(),
        row: z.number().int().optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/game/constants.js', line: 0, note: "GameConst.POINTER = 'mp'"}],
        describe: 'Click to move. The server runs the pathfinder; the client does not.'
    }
);

export const CreatePlayerMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Game['CREATE_PLAYER']),
        formData: loose({
            'new-player-name': z.string().min(1),
            selectedScene: z.string().optional()
        })
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/game/constants.js', line: 0, note: "GameConst.CREATE_PLAYER = 'cp'"}],
        describe: 'Create a character for the logged-in account. Answered with CREATE_PLAYER_RESULT.'
    }
);

export const PlayerStatsMessageSchema = z.strictObject({
    [ACTION_KEY]: z.literal(Game['PLAYER_STATS'])
});

export const ClientJoinedMessageSchema = z.strictObject({
    [ACTION_KEY]: z.literal(Game['CLIENT_JOINED'])
});

export const ObjectInteractionMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Objects['OBJECT_INTERACTION']),
        id: z.union([z.string(), z.number()])
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/objects/constants.js', line: 0, note: "ObjectsConst.OBJECT_INTERACTION = 'oi'"}],
        describe: 'Open or advance an NPC dialog box.'
    }
);

export const TargetTypeSchema = withSource(
    z.enum([Game['TYPE_PLAYER'], Objects['TYPE_OBJECT']]),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/constants.js', line: 0, note: "GameConst.TYPE_PLAYER = 'pj'"},
            {file: 'lib/objects/constants.js', line: 0, note: "ObjectsConst.TYPE_OBJECT = 'obj'"}
        ],
        describe: 'What an action targets. An object target is keyed by objectIndex '
            +'(layer_name + tile_index), NOT by the object\'s database row id.'
    }
);

export const ActionMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Actions['ACTION']),
        type: z.string().min(1),
        target: loose({
            id: z.union([z.string(), z.number()]),
            type: TargetTypeSchema
        }).optional()
    }),
    {
        confidence: 'INFERRED',
        sources: [{
            file: 'lib/actions/server/message-actions.js',
            line: 0,
            note: 'validateTarget() routes by target.type, then looks the id up in players or roomObjects'
        }],
        describe: 'Use a skill or attack. INFERRED: assembled from how validateTarget() reads the message '
            +'rather than from a single declaration of the shape.'
    }
);

export const ClientToServerMessageSchema = z.union([
    MovementMessageSchema,
    StopMessageSchema,
    PointerMessageSchema,
    CreatePlayerMessageSchema,
    PlayerStatsMessageSchema,
    ClientJoinedMessageSchema,
    ObjectInteractionMessageSchema,
    ActionMessageSchema
]);

// ---------------------------------------------------------------- server -> client

export const StartGameMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Game['START_GAME']),
        gameConfig: zAny.optional(),
        player: zAny.optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{file: 'lib/game/constants.js', line: 0, note: "GameConst.START_GAME = 's'"}],
        describe: 'Login succeeded. Carries the game config, and the player when the account already has one. '
            +'No player means the client must send CREATE_PLAYER next.'
    }
);

export const CreatePlayerResultMessageSchema = loose({
    [ACTION_KEY]: z.literal(Game['CREATE_PLAYER_RESULT']),
    player: zAny.optional(),
    error: zAny.optional(),
    message: z.string().optional()
});

export const UiMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.literal(Game['UI']),
        id: z.union([z.string(), z.number()]),
        content: z.string()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'theme/plugins/objects/server/healer.js',
            line: 46,
            note: "client.send('*', {act: GameConst.UI, id: this.id, content})"
        }],
        describe: 'Update the open dialog box in place. `id` must be the object\'s id.'
    }
);

export const CloseUiMessageSchema = loose({
    [ACTION_KEY]: z.literal(Game['CLOSE_UI_ACTION']),
    id: z.union([z.string(), z.number()])
});

export const CombatSideSchema = withSource(
    z.enum([
        Actions['DATA_TYPE_VALUE_PLAYER'],
        Actions['DATA_TYPE_VALUE_OBJECT'],
        Actions['DATA_TYPE_VALUE_ENEMY']
    ]),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/actions/constants.js',
            line: 0,
            note: "DATA_TYPE_VALUE_PLAYER='p', DATA_TYPE_VALUE_OBJECT='o', DATA_TYPE_VALUE_ENEMY='e'"
        }],
        describe: 'Who an owner or target is. An enemy is spelled "o" by the lifebar path and "e" by the '
            +'skills path - both mean "not a player", so both must be accepted.'
    }
);

export const BattleEndedMessageSchema = loose({
    [ACTION_KEY]: z.literal(Actions['BATTLE_ENDED']),
    [Actions['DATA_OBJECT_KEY_TARGET']]: zAny.optional()
});

export const LifebarUpdateMessageSchema = withSource(
    loose({
        [ACTION_KEY]: z.string(),
        [Actions['DATA_OWNER_TYPE']]: CombatSideSchema.optional(),
        [Actions['DATA_OWNER_KEY']]: z.union([z.string(), z.number()]).optional()
    }),
    {
        confidence: 'INFERRED',
        sources: [{
            file: 'lib/users/server/plugin.js',
            line: 0,
            note: 'updateEnemiesLifebar() / updateClientsWithPlayerStats() broadcast the lifebar action'
        }],
        describe: 'Health changed for a player or an enemy. INFERRED: the act value is a UsersConst key '
            +'assembled at broadcast time, so it is typed as a string rather than pinned to a literal.'
    }
);

export const ServerToClientMessageSchema = z.union([
    StartGameMessageSchema,
    CreatePlayerResultMessageSchema,
    UiMessageSchema,
    CloseUiMessageSchema,
    BattleEndedMessageSchema,
    LifebarUpdateMessageSchema
]);

/** Room names that are not scene rooms. Scene room names come from the database. */
export const WellKnownRoomSchema = withSource(
    z.enum([Game['ROOM_GAME'], RELDENS_CONSTANTS.ChatConst['ROOM_TYPE_CHAT']]),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/constants.js', line: 0, note: "GameConst.ROOM_GAME = 'room_game'"},
            {file: 'lib/chat/constants.js', line: 0, note: "ChatConst.ROOM_TYPE_CHAT = 'chat'"}
        ],
        describe: 'The lobby room and the chat feature room. Every other room name is a scene name '
            +'from the rooms table.'
    }
);

/** Options passed when joining the lobby room. */
export const LoginOptionsSchema = withSource(
    loose({
        username: z.string().min(1),
        password: z.string(),
        isNewUser: z.boolean().optional(),
        email: z.string().optional()
    }),
    {
        confidence: 'INFERRED',
        sources: [{
            file: 'lib/rooms/server/login.js',
            line: 0,
            note: 'onAuth reads options.username / options.password / options.isNewUser'
        }],
        describe: 'Credentials for joinOrCreate(room_game, options). INFERRED from the onAuth read sites.'
    }
);

/** Options passed when joining a scene room, after the player is known. */
export const SceneJoinOptionsSchema = LoginOptionsSchema.extend({
    selectedPlayer: z.union([z.string(), z.number()]),
    selectedScene: z.string().min(1)
});

export type ClientToServerMessage = z.infer<typeof ClientToServerMessageSchema>;
export type ServerToClientMessage = z.infer<typeof ServerToClientMessageSchema>;
export type LoginOptions = z.infer<typeof LoginOptionsSchema>;
export type SceneJoinOptions = z.infer<typeof SceneJoinOptionsSchema>;
