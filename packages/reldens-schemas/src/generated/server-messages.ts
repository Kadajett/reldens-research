/**
 * GENERATED - do not edit by hand.
 *
 * Every server-to-client message literal, keyed by the resolved wire value of its
 * act field. Extracted from client.send('*', {...}) / broadcast('*', {...}) sites;
 * act references and computed keys resolved through the runtime constants dump.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export interface ServerMessageInfo {
    channels: string[];
    requiredKeys: string[];
    sometimesKeys: string[];
    sites: string[];
}

export const RELDENS_SERVER_MESSAGE_INFO: Record<string, ServerMessageInfo> = {
    "rwdUp": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "listener",
            "rewards"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rewards/server/rewards-events-data-sender.js:L40"
        ]
    },
    "rwdAcpted": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "acceptedReward",
            "act",
            "listener"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rewards/server/rewards-events-data-sender.js:L66"
        ]
    },
    "drmv": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "id"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rewards/server/reward-message-actions.js:L54",
            "lib/rooms/server/scene.js:L845"
        ]
    },
    "ap": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "audios",
            "roomId"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/audio/server/manager.js:L206"
        ]
    },
    "ps": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "stats",
            "statsBase"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rooms/server/scene.js:L342",
            "lib/rooms/server/scene.js:L763"
        ]
    },
    "cgs": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "id",
            "prev",
            "scene"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rooms/server/scene.js:L578"
        ]
    },
    "cs": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "avatarKey",
            "dir",
            "id",
            "playedTime",
            "playerName",
            "prev",
            "scene",
            "x",
            "y"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rooms/server/scene.js:L638"
        ]
    },
    "r": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "player",
            "prev"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rooms/server/scene.js:L655"
        ]
    },
    "luer": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/rooms/server/game.js:L50"
        ]
    },
    "closeUi": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "id"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/inventory/server/message-actions.js:L109",
            "lib/objects/server/object/type/npc-object.js:L93",
            "theme/plugins/objects/server/quest-npc.js:L30"
        ]
    },
    "adsP": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "playedAdsModels"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/ads/server/event-handlers/create-player-ads-handler.js:L51"
        ]
    },
    "cln.ini": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "listener"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/teams/server/event-handlers/create-player-clan-handler.js:L60"
        ]
    },
    "scoUp": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "listener",
            "newTotalScore"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/scores/server/scores-sender.js:L51"
        ]
    },
    "scoTops": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "listener",
            "scores"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/scores/server/scores-sender.js:L70"
        ]
    },
    "go": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/actions/server/battle.js:L186"
        ]
    },
    "rv": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "t"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/actions/server/battle.js:L234"
        ]
    },
    "ui": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "content",
            "id"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/objects/server/object/type/npc-object.js:L134",
            "theme/plugins/objects/server/weapons-master.js:L28",
            "theme/plugins/objects/server/weapons-master.js:L35",
            "theme/plugins/objects/server/weapons-master.js:L39",
            "theme/plugins/objects/server/healer.js:L77",
            "theme/plugins/objects/server/quest-npc.js:L37",
            "theme/plugins/objects/server/quest-npc.js:L44",
            "theme/plugins/objects/server/quest-npc.js:L51",
            "theme/plugins/objects/server/quest-npc.js:L59"
        ]
    },
    "cp": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "formData"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/users/client/plugin.js:L328",
            "theme/plugins/bot.js:L44"
        ]
    },
    "pj": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "id"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/users/client/player-engine.js:L187"
        ]
    },
    "alu": {
        "channels": [
            "broadcast"
        ],
        "requiredKeys": [
            "act",
            "newValue",
            "oK",
            "oT",
            "totalValue"
        ],
        "sometimesKeys": [],
        "sites": [
            "lib/users/server/plugin.js:L163"
        ]
    },
    "c": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act",
            "m"
        ],
        "sometimesKeys": [],
        "sites": [
            "theme/plugins/bot.js:L87"
        ]
    },
    "stop": {
        "channels": [
            "send"
        ],
        "requiredKeys": [
            "act"
        ],
        "sometimesKeys": [],
        "sites": [
            "theme/plugins/bot.js:L109"
        ]
    }
};
