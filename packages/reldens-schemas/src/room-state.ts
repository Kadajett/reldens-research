/**
 * Room state, as a client observes it.
 *
 * The server synchronises state through Colyseus schema classes
 * (lib/rooms/server/state.js). On the wire and in a client, that state is plain data,
 * and these schemas describe that data - they are validators for what a client reads,
 * not replacements for the Colyseus classes.
 *
 * Verified against the State/Player/ObjectBodyState schema classes and the
 * positionPlayer() writes in state.js.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { DirectionSchema } from './protocol';

export const PlayerStateSchema = withSource(
    z.looseObject({
        x: z.number(),
        y: z.number(),
        dir: z.union([DirectionSchema, z.string()]),
        scene: z.string(),
        mov: z.boolean()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/rooms/server/state.js', line: 87, note: 'positionPlayer() writes state.mov/x/y'},
            {file: 'lib/users/server/player.js', line: 0, note: 'the Player schema class'}
        ],
        describe: 'A player body\'s synchronised state. Positions are pixels within the tilemap; '
            +'divide by tilewidth/tileheight for tile coordinates.'
    }
);

export const PlayerSchemaShape = z.looseObject({
    sessionId: z.string().optional(),
    player_id: z.number().optional(),
    playerName: z.string().optional(),
    state: PlayerStateSchema
});

export const BodyStateSchema = z.looseObject({
    x: z.number(),
    y: z.number(),
    dir: z.string().optional(),
    mov: z.boolean().optional()
});

export const RoomStateSchema = withSource(
    z.looseObject({
        /** The room's static data as a JSON string: tilemap, layers, change points, objects. */
        sceneData: z.string()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/rooms/server/state.js', line: 54, note: 'this.sceneData = JSON.stringify(roomData)'},
            {file: 'lib/rooms/server/state.js', line: 33, note: 'players = new MapSchema(); bodies = new MapSchema()'}
        ],
        describe: 'Top-level room state. `players` and `bodies` are Colyseus MapSchemas and arrive '
            +'ASYNCHRONOUSLY - they can be absent when a message callback first runs. Wait for '
            +'room.onStateChange.once() rather than returning early; that early return is the '
            +'most common Reldens client bug. Validate individual entries with PlayerSchemaShape '
            +'and BodyStateSchema as they appear.'
    }
);

/** Parses the sceneData JSON string into Tiled-map-shaped data. */
export const SceneDataSchema = withSource(
    z.looseObject({
        tilewidth: z.number().optional(),
        tileheight: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        layers: z.array(z.looseObject({
            name: z.string().optional(),
            data: z.array(z.number()).optional()
        })).optional()
    }),
    {
        confidence: 'INFERRED',
        sources: [{
            file: 'lib/rooms/server/state.js',
            line: 47,
            note: 'roomData is the room row plus the Tiled map JSON; exact set of keys varies per map'
        }],
        describe: 'The parsed sceneData string. INFERRED: this is Tiled JSON plus Reldens room fields, '
            +'and only the fields a renderer needs are pinned here.'
    }
);

export type PlayerState = z.infer<typeof PlayerStateSchema>;
export type RoomState = z.infer<typeof RoomStateSchema>;
export type SceneData = z.infer<typeof SceneDataSchema>;
