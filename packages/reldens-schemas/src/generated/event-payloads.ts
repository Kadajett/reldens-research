/**
 * GENERATED - do not edit by hand.
 *
 * What every reldens.* listener receives, read from the emit sites by
 * research/scripts/lib/scan.mjs. 'object' payloads list the keys a schema may
 * demand; 'positional' events pass separate arguments; 'class' payloads carry the
 * listed constructor properties.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export type EventPayloadInfo =
    | {style: 'object'; requiredKeys: string[]; sometimesKeys: string[]; hasSpreadOrComputed: boolean; sites: string[]}
    | {style: 'class'; className: string; classFile: string | null; properties: string[]; sites: string[]}
    | {style: 'positional'; args: string[]; sites: string[]}
    | {style: 'none'; sites: string[]}
    | {style: 'mixed'; sites: string[]};

export const RELDENS_EVENT_PAYLOAD_INFO: Record<string, EventPayloadInfo> = {
    "reldens.actionsPrepareEventsListeners": {
        "style": "positional",
        "args": [
            "actionsPlugin",
            "classPath"
        ],
        "sites": [
            "reldens:lib/actions/server/event-listeners.js:L55"
        ]
    },
    "reldens.activateRoom": {
        "style": "positional",
        "args": [
            "room",
            "this.gameManager"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L85"
        ]
    },
    "reldens.activatedRoom": {
        "style": "positional",
        "args": [
            "sceneRoom",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L435"
        ]
    },
    "reldens.activatedRoom_": {
        "style": "positional",
        "args": [
            "sceneRoom",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L436"
        ]
    },
    "reldens.adminAfterEntityDelete": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "idProperty",
            "ids"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L305"
        ]
    },
    "reldens.adminAfterEntitySave": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityData",
            "entityPath",
            "req",
            "res"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L351"
        ]
    },
    "reldens.adminBeforeEntityEdit": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityPath",
            "req",
            "res"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router.js:L128"
        ]
    },
    "reldens.adminBeforeEntityLoad": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityId"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L490"
        ]
    },
    "reldens.adminBeforeEntitySave": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityPath",
            "req",
            "res"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router.js:L162",
            "@reldens/cms:lib/admin-manager/router.js:L192"
        ]
    },
    "reldens.adminBeforeFieldRender": {
        "style": "object",
        "requiredKeys": [
            "adminContentsRender",
            "adminFilesContents",
            "adminManager",
            "driverResource",
            "loadedEntity",
            "property",
            "propertyKey",
            "renderedEditProperties",
            "req",
            "templateData"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L266"
        ]
    },
    "reldens.adminEditPropertiesPopulation": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityData",
            "entityId",
            "loadedEntity",
            "renderedEditProperties",
            "req"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L229"
        ]
    },
    "reldens.adminIsAuthenticated": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "allowContinue",
            "next",
            "req",
            "res"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router.js:L207"
        ]
    },
    "reldens.adminListPropertiesPopulation": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "listProperties",
            "req"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L112"
        ]
    },
    "reldens.adminSideBarBeforeRender": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "navigationContents",
            "navigationView"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/contents-builder.js:L106"
        ]
    },
    "reldens.adminSideBarBeforeSubItems": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "navigationContents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/contents-builder.js:L92"
        ]
    },
    "reldens.adminViewPropertiesPopulation": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "idProperty",
            "loadedEntity",
            "renderedViewProperties",
            "req"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router-contents.js:L202"
        ]
    },
    "reldens.afterContentProcess": {
        "style": "object",
        "requiredKeys": [
            "processedContent",
            "renderContext",
            "variables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-engine.js:L188"
        ]
    },
    "reldens.afterCreateAdminManager": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/admin/server/subscribers/create-admin-subscriber.js:L75"
        ]
    },
    "reldens.afterEnrichPlayerWithLocale": {
        "style": "object",
        "requiredKeys": [
            "client",
            "roomGame",
            "superInitialGameData",
            "userModel"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/snippets/server/initial-game-data-enricher.js:L39"
        ]
    },
    "reldens.afterGiveRewards": {
        "style": "object",
        "requiredKeys": [
            "itemRewards",
            "playerSchema",
            "targetObject",
            "winningRewards"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rewards/server/subscribers/rewards-subscriber.js:L79"
        ]
    },
    "reldens.afterInitEngineAndStartGame": {
        "style": "positional",
        "args": [
            "this.initialGameData",
            "joinedFirstRoom"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L361"
        ]
    },
    "reldens.afterPlayerJoinedClan": {
        "style": "object",
        "requiredKeys": [
            "clan",
            "playerJoining"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-join.js:L72"
        ]
    },
    "reldens.afterPlayerJoinedTeam": {
        "style": "object",
        "requiredKeys": [
            "currentTeam",
            "playerJoining"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-join.js:L85"
        ]
    },
    "reldens.afterProcessPlayerDropsBeforeBroadcast": {
        "style": "positional",
        "args": [
            "dropsMappedData",
            "eventResult"
        ],
        "sites": [
            "reldens:lib/inventory/server/subscribers/player-death-subscriber.js:L103"
        ]
    },
    "reldens.afterProcessRewardsDropsBeforeBroadcast": {
        "style": "positional",
        "args": [
            "dropsMappedData",
            "eventResult"
        ],
        "sites": [
            "reldens:lib/rewards/server/rewards-drops-processor.js:L49"
        ]
    },
    "reldens.afterRunAdditionalRespawnSetup": {
        "style": "object",
        "requiredKeys": [
            "clonedObjProps",
            "multipleObj",
            "objClass",
            "objInstance",
            "objectIndex",
            "respawnArea",
            "roomRespawn"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/respawn/server/room-respawn.js:L137"
        ]
    },
    "reldens.afterRunAdditionalSetup": {
        "style": "object",
        "requiredKeys": [
            "objectData",
            "objectInstance",
            "objectsManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/server/manager.js:L144"
        ]
    },
    "reldens.afterSceneDynamicCreate": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-dynamic.js:L104"
        ]
    },
    "reldens.afterTeamLeave": {
        "style": "object",
        "requiredKeys": [
            "currentTeam",
            "leavingPlayerName"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-leave.js:L95"
        ]
    },
    "reldens.afterVariablesCreated": {
        "style": "object",
        "requiredKeys": [
            "renderContext",
            "variables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-engine.js:L168"
        ]
    },
    "reldens.allAudiosLoaded": {
        "style": "positional",
        "args": [
            "this",
            "audios",
            "currentScene",
            "audio"
        ],
        "sites": [
            "reldens:lib/audio/client/manager.js:L365"
        ]
    },
    "reldens.audioLoaded": {
        "style": "positional",
        "args": [
            "this",
            "audios",
            "currentScene",
            "audio"
        ],
        "sites": [
            "reldens:lib/audio/client/manager.js:L363"
        ]
    },
    "reldens.audioManagerDeleteAudios": {
        "style": "positional",
        "args": [
            "this",
            "room",
            "gameManager",
            "message"
        ],
        "sites": [
            "reldens:lib/audio/client/manager.js:L449"
        ]
    },
    "reldens.audioManagerUpdateAudiosLoaded": {
        "style": "positional",
        "args": [
            "this",
            "room",
            "gameManager",
            "message"
        ],
        "sites": [
            "reldens:lib/audio/client/manager.js:L432"
        ]
    },
    "reldens.audioManagerUpdateCategoriesLoaded": {
        "style": "positional",
        "args": [
            "this",
            "room",
            "gameManager",
            "message"
        ],
        "sites": [
            "reldens:lib/audio/client/manager.js:L426"
        ]
    },
    "reldens.battleEnded": {
        "style": "class",
        "className": "BattleEndedEvent",
        "classFile": "lib/actions/server/events/battle-ended-event.js",
        "properties": [
            "actionData",
            "playerSchema",
            "pve",
            "room"
        ],
        "sites": [
            "reldens:lib/actions/server/pve.js:L332"
        ]
    },
    "reldens.beforeClanDisband": {
        "style": "object",
        "requiredKeys": [
            "continueDisband",
            "playerSchema",
            "singleRemoveId",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-leave.js:L97"
        ]
    },
    "reldens.beforeClanJoin": {
        "style": "object",
        "requiredKeys": [
            "clanToJoin",
            "continueBeforeJoin",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-join.js:L42"
        ]
    },
    "reldens.beforeClanUpdatePlayers": {
        "style": "object",
        "requiredKeys": [
            "clanToJoin",
            "continueBeforeJoinUpdate",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-join.js:L66"
        ]
    },
    "reldens.beforeContentProcess": {
        "style": "object",
        "requiredKeys": [
            "content",
            "renderContext",
            "variables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-engine.js:L175"
        ]
    },
    "reldens.beforeCreateAdminManager": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/admin/server/subscribers/create-admin-subscriber.js:L40"
        ]
    },
    "reldens.beforeCreateEngine": {
        "style": "positional",
        "args": [
            "this.initialGameData",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L299"
        ]
    },
    "reldens.beforeCreateUiScene": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L217"
        ]
    },
    "reldens.beforeEnrichPlayerWithClan": {
        "style": "object",
        "requiredKeys": [
            "client",
            "continueProcess",
            "playerSchema",
            "room",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/event-handlers/create-player-clan-handler.js:L49"
        ]
    },
    "reldens.beforeEnrichPlayerWithClanUpdate": {
        "style": "object",
        "requiredKeys": [
            "client",
            "continueProcess",
            "playerSchema",
            "room",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/event-handlers/create-player-clan-handler.js:L71"
        ]
    },
    "reldens.beforeEnrichUserWithLocale": {
        "style": "positional",
        "args": [
            "startEvent"
        ],
        "sites": [
            "reldens:lib/snippets/server/initial-game-data-enricher.js:L26"
        ]
    },
    "reldens.beforeGetParsedValue": {
        "style": "object",
        "requiredKeys": [
            "config",
            "configManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/config/server/manager.js:L102"
        ]
    },
    "reldens.beforeGiveRewards": {
        "style": "object",
        "requiredKeys": [
            "continueEvent",
            "playerSchema",
            "targetObject"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rewards/server/subscribers/rewards-subscriber.js:L52"
        ]
    },
    "reldens.beforeInitEngineAndStartGame": {
        "style": "positional",
        "args": [
            "this.initialGameData",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L291"
        ]
    },
    "reldens.beforeInitializeManagers": {
        "style": "object",
        "requiredKeys": [
            "continueProcess",
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L394"
        ]
    },
    "reldens.beforeJoinGame": {
        "style": "object",
        "requiredKeys": [
            "formData",
            "gameManager",
            "isNewUser"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/game-manager.js:L184"
        ]
    },
    "reldens.beforeJoinGameRoom": {
        "style": "positional",
        "args": [
            "this.gameRoom"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L193"
        ]
    },
    "reldens.beforeLoadConfigurations": {
        "style": "object",
        "requiredKeys": [
            "configManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/config/server/manager.js:L57"
        ]
    },
    "reldens.beforePreload": {
        "style": "positional",
        "args": [
            "this",
            "eventUiScene"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L81"
        ]
    },
    "reldens.beforePreloadUiScene": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L132"
        ]
    },
    "reldens.beforeReconnectGameClient": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L422"
        ]
    },
    "reldens.beforeRemovingDroppedReward": {
        "style": "object",
        "requiredKeys": [
            "client",
            "continueEvent",
            "playerSchema",
            "room",
            "roomObject"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rewards/server/reward-message-actions.js:L61"
        ]
    },
    "reldens.beforeSceneDynamicCreate": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-dynamic.js:L93"
        ]
    },
    "reldens.beforeSceneExecuteMessages": {
        "style": "object",
        "requiredKeys": [
            "canContinue",
            "client",
            "messageData",
            "playerSchema",
            "room"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/scene.js:L449"
        ]
    },
    "reldens.beforeSetupAdminManager": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/admin/server/subscribers/create-admin-subscriber.js:L73"
        ]
    },
    "reldens.beforeSuperInitialGameData": {
        "style": "positional",
        "args": [
            "superInitialGameData",
            "this",
            "client",
            "userModel"
        ],
        "sites": [
            "reldens:lib/rooms/server/game.js:L69"
        ]
    },
    "reldens.beforeTeamCreate": {
        "style": "object",
        "requiredKeys": [
            "continueBeforeCreate",
            "teamProps",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-join.js:L63"
        ]
    },
    "reldens.beforeTeamDisband": {
        "style": "object",
        "requiredKeys": [
            "playerSchema",
            "room",
            "singleRemoveId",
            "teamsPlugin"
        ],
        "sometimesKeys": [
            "continueDisband",
            "continueLeave"
        ],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-leave.js:L99",
            "reldens:lib/teams/server/message-actions/team-leave.js:L107"
        ]
    },
    "reldens.beforeTeamJoin": {
        "style": "object",
        "requiredKeys": [
            "continueBeforeJoin",
            "currentTeam",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-join.js:L70"
        ]
    },
    "reldens.beforeTeamUpdatePlayers": {
        "style": "object",
        "requiredKeys": [
            "continueBeforeJoinUpdate",
            "currentTeam",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-join.js:L79"
        ]
    },
    "reldens.buildAdminContentsAfter": {
        "style": "object",
        "requiredKeys": [
            "adminManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/contents-builder.js:L45"
        ]
    },
    "reldens.changeSceneDestroyPrevious": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-dynamic.js:L559"
        ]
    },
    "reldens.chatMessageObjectCreated": {
        "style": "positional",
        "args": [
            "this",
            "message"
        ],
        "sites": [
            "reldens:lib/chat/client/chat-ui.js:L613"
        ]
    },
    "reldens.clanDisconnectAfterSendUpdate": {
        "style": "object",
        "requiredKeys": [
            "continueLeave",
            "playerSchema",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-disconnect.js:L72"
        ]
    },
    "reldens.clanDisconnectBeforeSendUpdate": {
        "style": "object",
        "requiredKeys": [
            "playerId",
            "playerSchema",
            "sendUpdate",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-disconnect.js:L56"
        ]
    },
    "reldens.clanJoinInviteRejected": {
        "style": "object",
        "requiredKeys": [
            "clanInvite",
            "clientSendingInvite",
            "playerRejectingName"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/clan-message-actions.js:L75"
        ]
    },
    "reldens.clanLeave": {
        "style": "object",
        "requiredKeys": [
            "message",
            "playerSchema",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-leave.js:L29"
        ]
    },
    "reldens.clanLeaveAfterSendUpdate": {
        "style": "object",
        "requiredKeys": [
            "continueLeave",
            "playerSchema",
            "singleRemoveId",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-leave.js:L106"
        ]
    },
    "reldens.clanLeaveBeforeSendUpdate": {
        "style": "object",
        "requiredKeys": [
            "currentClan",
            "disbandClan",
            "playerId",
            "playerSchema",
            "sendUpdate",
            "singleRemoveId",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/clan-leave.js:L81"
        ]
    },
    "reldens.clientStartAfter": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/handlers/client-start-handler.js:L52"
        ]
    },
    "reldens.clientStartBefore": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L125"
        ]
    },
    "reldens.closeUI": {
        "style": "object",
        "requiredKeys": [
            "closeButton",
            "ui"
        ],
        "sometimesKeys": [
            "box",
            "dialogBox",
            "dialogContainer",
            "minimap",
            "openButton",
            "uiScene"
        ],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/chat/client/chat-ui.js:L170",
            "reldens:lib/game/client/user-interface.js:L193",
            "reldens:lib/game/client/ui-factory.js:L75",
            "reldens:lib/game/client/settings-ui.js:L62",
            "reldens:lib/game/client/instructions-ui.js:L53",
            "reldens:lib/game/client/minimap-ui.js:L98",
            "reldens:lib/users/client/player-stats-ui.js:L59"
        ]
    },
    "reldens.cmsManagerInitializeServices": {
        "style": "object",
        "requiredKeys": [
            "manager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/manager.js:L390"
        ]
    },
    "reldens.createAnimationAfter": {
        "style": "object",
        "requiredKeys": [
            "animationEngine"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/client/animation-engine.js:L223"
        ]
    },
    "reldens.createAppServer": {
        "style": "object",
        "requiredKeys": [
            "continueProcess",
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L339"
        ]
    },
    "reldens.createCurrentPlayer": {
        "style": "object",
        "requiredKeys": [
            "key",
            "player",
            "previousScene",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/prediction/client/room-events-override.js:L41",
            "reldens:lib/game/client/room-events.js:L232"
        ]
    },
    "reldens.createDynamicAnimation_": {
        "style": "positional",
        "args": [
            "this",
            "animProps"
        ],
        "sites": [
            "reldens:lib/objects/client/plugin.js:L539"
        ]
    },
    "reldens.createDynamicAnimationsBefore": {
        "style": "positional",
        "args": [
            "this",
            "sceneDynamic"
        ],
        "sites": [
            "reldens:lib/objects/client/plugin.js:L517"
        ]
    },
    "reldens.createEngineScene": {
        "style": "positional",
        "args": [
            "player",
            "room",
            "previousScene",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L861"
        ]
    },
    "reldens.createEngineSceneDone": {
        "style": "object",
        "requiredKeys": [
            "currentScene",
            "previousScene",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L877"
        ]
    },
    "reldens.createGameServer": {
        "style": "object",
        "requiredKeys": [
            "continueProcess",
            "options"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L378"
        ]
    },
    "reldens.createNewPlayerBefore": {
        "style": "positional",
        "args": [
            "loginData",
            "playerData",
            "this"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L553"
        ]
    },
    "reldens.createNewPlayerCriticalError": {
        "style": "positional",
        "args": [
            "this",
            "loginData",
            "error",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L572"
        ]
    },
    "reldens.createNewUserAfter": {
        "style": "positional",
        "args": [
            "newUser",
            "this",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L517"
        ]
    },
    "reldens.createNewUserError": {
        "style": "positional",
        "args": [
            "this",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L521"
        ]
    },
    "reldens.createPlayerAfter": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "currentPlayer",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L250"
        ]
    },
    "reldens.createPlayerAnimations": {
        "style": "positional",
        "args": [
            "this",
            "avatarKey"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L446"
        ]
    },
    "reldens.createPlayerBefore": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L225"
        ]
    },
    "reldens.createPlayerStatsAfter": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "currentPlayer",
            "roomScene"
        ],
        "sites": [
            "reldens:lib/users/server/plugin.js:L308"
        ]
    },
    "reldens.createPreload": {
        "style": "positional",
        "args": [
            "this",
            "eventUiScene"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L206"
        ]
    },
    "reldens.createUiScene": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L227"
        ]
    },
    "reldens.createWorld": {
        "style": "positional",
        "args": [
            "roomData",
            "objectsManager",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L503"
        ]
    },
    "reldens.createdMinimap": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/minimap.js:L58"
        ]
    },
    "reldens.createdNewPlayer": {
        "style": "positional",
        "args": [
            "player",
            "loginData",
            "this",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L567"
        ]
    },
    "reldens.createdPlayerSchema": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "currentPlayer",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L239"
        ]
    },
    "reldens.createdPreloaderInstance": {
        "style": "positional",
        "args": [
            "this",
            "this.scenePreloader"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L820"
        ]
    },
    "reldens.createdPreloaderRecurring": {
        "style": "positional",
        "args": [
            "this",
            "this.scenePreloader"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L796"
        ]
    },
    "reldens.createdRoomsEventsInstance": {
        "style": "positional",
        "args": [
            "joinedFirstRoom",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L358"
        ]
    },
    "reldens.createdUserInterface": {
        "style": "object",
        "requiredKeys": [
            "ObjectsPlugin",
            "gameManager",
            "id",
            "userInterface"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/client/plugin.js:L498"
        ]
    },
    "reldens.createdWorldObject": {
        "style": "object",
        "requiredKeys": [
            "bodyMass",
            "bodyObject",
            "collision",
            "hasState",
            "objectIndex",
            "p2world",
            "pathFinder",
            "posX",
            "posY",
            "roomObject",
            "tileH",
            "tileW"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/p2world.js:L686"
        ]
    },
    "reldens.defineRoomsInGameServerDone": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/manager.js:L117"
        ]
    },
    "reldens.disconnectLoggedBefore": {
        "style": "object",
        "requiredKeys": [
            "client",
            "player",
            "room",
            "userModel"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/scene.js:L175"
        ]
    },
    "reldens.dynamicForm.afterSave": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "preparedValues",
            "result"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form.js:L295"
        ]
    },
    "reldens.dynamicForm.afterValidation": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "formKey",
            "req",
            "submittedValues",
            "validationResult"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form.js:L64"
        ]
    },
    "reldens.dynamicForm.beforeSave": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "preparedValues"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form.js:L281"
        ]
    },
    "reldens.dynamicForm.beforeValidation": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "formKey",
            "req",
            "submittedValues"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form.js:L42"
        ]
    },
    "reldens.dynamicFormRenderer.afterFieldsRender": {
        "style": "object",
        "requiredKeys": [
            "attributes",
            "domain",
            "enhancedData",
            "fieldsToRender",
            "formConfig",
            "formFields",
            "req",
            "systemVariables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form-renderer.js:L43"
        ]
    },
    "reldens.dynamicFormRenderer.beforeFieldsRender": {
        "style": "object",
        "requiredKeys": [
            "attributes",
            "domain",
            "enhancedData",
            "fieldsToRender",
            "formConfig",
            "req",
            "systemVariables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form-renderer.js:L33"
        ]
    },
    "reldens.dynamicFormRequestHandler.afterSave": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "formKey",
            "req",
            "res",
            "submissionResult"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form-request-handler.js:L65"
        ]
    },
    "reldens.dynamicFormRequestHandler.beforeSave": {
        "style": "object",
        "requiredKeys": [
            "formConfig",
            "formKey",
            "preparedValues",
            "req",
            "res"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form-request-handler.js:L51"
        ]
    },
    "reldens.dynamicFormRequestHandler.beforeValidation": {
        "style": "object",
        "requiredKeys": [
            "formKey",
            "req",
            "res",
            "submittedValues"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/dynamic-form-request-handler.js:L37"
        ]
    },
    "reldens.endChangedScene": {
        "style": "object",
        "requiredKeys": [
            "message",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L460"
        ]
    },
    "reldens.endObjectHitObject": {
        "style": "object",
        "requiredKeys": [
            "bodyA",
            "bodyB",
            "priorityObject"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L399"
        ]
    },
    "reldens.endObjectHitWall": {
        "style": "object",
        "requiredKeys": [
            "objectBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L446"
        ]
    },
    "reldens.endPlayerHitChangePoint": {
        "style": "object",
        "requiredKeys": [
            "changeData",
            "changePoint",
            "collisionsManager",
            "playerBody",
            "playerSchema"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L364"
        ]
    },
    "reldens.endPlayerHitObjectBegin": {
        "style": "object",
        "requiredKeys": [
            "otherBody",
            "playerBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L269"
        ]
    },
    "reldens.endPlayerHitWallEnd": {
        "style": "object",
        "requiredKeys": [
            "playerBody",
            "wallBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L319"
        ]
    },
    "reldens.eventBuildSideBarBefore": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "navigationContents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/contents-builder.js:L69"
        ]
    },
    "reldens.featuresManagerLoadFeaturesAfter": {
        "style": "object",
        "requiredKeys": [
            "featuresCollection",
            "featuresManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/features/server/manager.js:L89"
        ]
    },
    "reldens.formsTransformer.afterRender": {
        "style": "object",
        "requiredKeys": [
            "domain",
            "enhancedData",
            "formConfig",
            "formContent",
            "formKey",
            "req",
            "systemVariables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-engine/forms-transformer.js:L74"
        ]
    },
    "reldens.formsTransformer.beforeRender": {
        "style": "object",
        "requiredKeys": [
            "domain",
            "enhancedData",
            "fieldsToRender",
            "formAttributes",
            "formConfig",
            "formKey",
            "req",
            "systemVariables"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-engine/forms-transformer.js:L52"
        ]
    },
    "reldens.gameEngineClearTarget": {
        "style": "positional",
        "args": [
            "this",
            "clearedTargetData"
        ],
        "sites": [
            "reldens:lib/game/client/game-engine.js:L253"
        ]
    },
    "reldens.gameEngineShowTarget": {
        "style": "positional",
        "args": [
            "this",
            "target",
            "previousTarget",
            "targetName"
        ],
        "sites": [
            "reldens:lib/game/client/game-engine.js:L180"
        ]
    },
    "reldens.gameEngineTabTarget": {
        "style": "positional",
        "args": [
            "this",
            "closerTarget",
            "previousTarget"
        ],
        "sites": [
            "reldens:lib/game/client/game-engine.js:L300"
        ]
    },
    "reldens.gameOver": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L514"
        ]
    },
    "reldens.gameOverReload": {
        "style": "positional",
        "args": [
            "this",
            "defaultReload"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L306"
        ]
    },
    "reldens.gameRoomError": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L168"
        ]
    },
    "reldens.guestInvalidChangePoint": {
        "style": "object",
        "requiredKeys": [
            "changePoint",
            "collisionsManager",
            "contactClient",
            "isGuest",
            "playerBody",
            "playerSchema"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L344"
        ]
    },
    "reldens.guestLoginInvalidParams": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L295"
        ]
    },
    "reldens.initUiAfter": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L350"
        ]
    },
    "reldens.initUiBefore": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L348"
        ]
    },
    "reldens.invalidData": {
        "style": "positional",
        "args": [
            "this",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L289"
        ]
    },
    "reldens.joinRoomEnd": {
        "style": "class",
        "className": "JoinedSceneRoomEvent",
        "classFile": "lib/rooms/server/events/joined-scene-room-event.js",
        "properties": [
            "client",
            "isGuest",
            "loggedPlayer",
            "options",
            "roomScene",
            "userModel"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L156"
        ]
    },
    "reldens.joinRoomInvalid": {
        "style": "positional",
        "args": [
            "this",
            "client",
            "options",
            "userModel",
            "isGuest"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L149"
        ]
    },
    "reldens.joinRoomStart": {
        "style": "positional",
        "args": [
            "this",
            "client",
            "options",
            "userModel"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L136"
        ]
    },
    "reldens.joinedRoom": {
        "style": "positional",
        "args": [
            "sceneRoom",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L446"
        ]
    },
    "reldens.joinedRoom_": {
        "style": "positional",
        "args": [
            "sceneRoom",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L447"
        ]
    },
    "reldens.loadFeature_": {
        "style": "positional",
        "args": [
            "this.featuresList[featureCode]",
            "this"
        ],
        "sites": [
            "reldens:lib/features/client/manager.js:L60"
        ]
    },
    "reldens.loadFeatures": {
        "style": "positional",
        "args": [
            "this",
            "featuresCodeList"
        ],
        "sites": [
            "reldens:lib/features/client/manager.js:L46"
        ]
    },
    "reldens.loginError": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L395"
        ]
    },
    "reldens.loginInvalidParams": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L307"
        ]
    },
    "reldens.loginInvalidPassword": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L380"
        ]
    },
    "reldens.loginInvalidRole": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L374"
        ]
    },
    "reldens.loginSuccess": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L391"
        ]
    },
    "reldens.manager.initializeAdminManager": {
        "style": "object",
        "requiredKeys": [
            "adminFilesContents",
            "authenticationCallback",
            "manager",
            "translations"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/manager.js:L563"
        ]
    },
    "reldens.objectBodyChange": {
        "style": "object",
        "requiredKeys": [
            "body",
            "changes",
            "key"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/client/plugin.js:L205"
        ]
    },
    "reldens.objectBodyChanged": {
        "style": "object",
        "requiredKeys": [
            "body",
            "key"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/client/plugin.js:L284",
            "reldens:lib/objects/client/plugin.js:L300"
        ]
    },
    "reldens.objectHitObjectEnd": {
        "style": "object",
        "requiredKeys": [
            "bodyA",
            "bodyB"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L412"
        ]
    },
    "reldens.objectHitWallBegin": {
        "style": "object",
        "requiredKeys": [
            "continue",
            "objectBody",
            "wall"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L424"
        ]
    },
    "reldens.onJoinRoomGame": {
        "style": "positional",
        "args": [
            "client",
            "options",
            "userModel",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/game.js:L41"
        ]
    },
    "reldens.onPreparePlayerCreationFormSubmit": {
        "style": "object",
        "requiredKeys": [
            "form",
            "gameManager",
            "usersPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/users/client/plugin.js:L322"
        ]
    },
    "reldens.onPreparePlayerSelectorFormSubmit": {
        "style": "object",
        "requiredKeys": [
            "form",
            "gameManager",
            "select",
            "selectedPlayer",
            "usersPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/users/client/plugin.js:L265"
        ]
    },
    "reldens.onPrepareSinglePlayerSelectorFormSubmit": {
        "style": "object",
        "requiredKeys": [
            "form",
            "gameManager",
            "player",
            "selectElement",
            "usersPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/users/client/plugin.js:L196"
        ]
    },
    "reldens.onRoomDispose": {
        "style": "object",
        "requiredKeys": [
            "result",
            "roomId",
            "roomName"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/login.js:L298"
        ]
    },
    "reldens.onSavePlayerStateBefore": {
        "style": "object",
        "requiredKeys": [
            "playerId",
            "playerSchema",
            "room",
            "updatePatch",
            "updateReady"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/scene.js:L719"
        ]
    },
    "reldens.onSavePlayerStatsBefore": {
        "style": "object",
        "requiredKeys": [
            "client",
            "objectState",
            "playerSchema",
            "room"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/scene.js:L748"
        ]
    },
    "reldens.openUI": {
        "style": "object",
        "requiredKeys": [
            "openButton",
            "ui"
        ],
        "sometimesKeys": [
            "box",
            "dialogBox",
            "dialogContainer",
            "minimap",
            "uiScene"
        ],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/chat/client/chat-ui.js:L156",
            "reldens:lib/game/client/user-interface.js:L155",
            "reldens:lib/game/client/ui-factory.js:L56",
            "reldens:lib/game/client/settings-ui.js:L51",
            "reldens:lib/game/client/instructions-ui.js:L44",
            "reldens:lib/game/client/minimap-ui.js:L77",
            "reldens:lib/users/client/player-stats-ui.js:L49"
        ]
    },
    "reldens.parsingMapLayerAfter": {
        "style": "object",
        "requiredKeys": [
            "layer",
            "world"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/p2world.js:L245"
        ]
    },
    "reldens.parsingMapLayerBefore": {
        "style": "object",
        "requiredKeys": [
            "layer",
            "world"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/p2world.js:L243"
        ]
    },
    "reldens.parsingMapLayersAfterBodiesQueue": {
        "style": "object",
        "requiredKeys": [
            "layer",
            "world"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/p2world.js:L254"
        ]
    },
    "reldens.playerAttack": {
        "style": "positional",
        "args": [
            "message",
            "this.room"
        ],
        "sites": [
            "reldens:lib/actions/client/receiver-wrapper.js:L104"
        ]
    },
    "reldens.playerDeath": {
        "style": "class",
        "className": "PlayerDeathEvent",
        "classFile": "lib/actions/server/events/player-death-event.js",
        "properties": [
            "affectedProperty",
            "attackerPlayer",
            "room",
            "targetClient",
            "targetSchema"
        ],
        "sites": [
            "reldens:lib/actions/server/battle.js:L197"
        ]
    },
    "reldens.playerEngineAddPlayer": {
        "style": "positional",
        "args": [
            "this",
            "id",
            "addPlayerData"
        ],
        "sites": [
            "reldens:lib/users/client/player-engine.js:L171"
        ]
    },
    "reldens.playerHitObjectEnd": {
        "style": "object",
        "requiredKeys": [
            "playerBody",
            "result"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L281"
        ]
    },
    "reldens.playerHitPlayer": {
        "style": "object",
        "requiredKeys": [
            "bodyA",
            "bodyB"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L237"
        ]
    },
    "reldens.playerHitPlayerEnd": {
        "style": "object",
        "requiredKeys": [
            "bodyA",
            "bodyB"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L251"
        ]
    },
    "reldens.playerHitWallBegin": {
        "style": "object",
        "requiredKeys": [
            "playerBody",
            "wallBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L296"
        ]
    },
    "reldens.playerLeftScene": {
        "style": "object",
        "requiredKeys": [
            "code",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L589"
        ]
    },
    "reldens.playerNewName": {
        "style": "positional",
        "args": [
            "this",
            "loginData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L536"
        ]
    },
    "reldens.playerNewNameUnavailable": {
        "style": "positional",
        "args": [
            "this",
            "loginData",
            "isNameAvailable",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L557"
        ]
    },
    "reldens.playerPersistDataAfter": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "currentPlayer",
            "params",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L237"
        ]
    },
    "reldens.playerPersistDataBefore": {
        "style": "positional",
        "args": [
            "client",
            "userModel",
            "currentPlayer",
            "params",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L233"
        ]
    },
    "reldens.playerSceneUnavailable": {
        "style": "positional",
        "args": [
            "this",
            "loginData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L545"
        ]
    },
    "reldens.playerStatsUpdateAfter": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L620"
        ]
    },
    "reldens.playerStatsUpdateBefore": {
        "style": "positional",
        "args": [
            "message",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L409"
        ]
    },
    "reldens.playersOnAdd": {
        "style": "positional",
        "args": [
            "player",
            "key",
            "previousScene",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L168"
        ]
    },
    "reldens.playersOnAddReady": {
        "style": "object",
        "requiredKeys": [
            "player",
            "previousScene",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L875"
        ]
    },
    "reldens.playersOnRemove": {
        "style": "positional",
        "args": [
            "player",
            "key",
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L281"
        ]
    },
    "reldens.playersQueueBefore": {
        "style": "positional",
        "args": [
            "player",
            "key",
            "previousScene",
            "roomEvents"
        ],
        "sites": [
            "reldens:lib/prediction/client/room-events-override.js:L33",
            "reldens:lib/game/client/room-events.js:L227"
        ]
    },
    "reldens.preloadUiScene": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/scene-preloader.js:L166"
        ]
    },
    "reldens.processForgotPassword": {
        "style": "positional",
        "args": [
            "this",
            "userData",
            "sendResult"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L679"
        ]
    },
    "reldens.processUserRequestIsValidDataBefore": {
        "style": "positional",
        "args": [
            "this",
            "userData"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L285"
        ]
    },
    "reldens.register": {
        "style": "positional",
        "args": [
            "this",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L501"
        ]
    },
    "reldens.registrationInvalidParams": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData",
            "result"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L313"
        ]
    },
    "reldens.removePlayerBefore": {
        "style": "object",
        "requiredKeys": [
            "playerSchema",
            "room",
            "stateObject"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/scene.js:L662"
        ]
    },
    "reldens.restoreObjectAfter": {
        "style": "object",
        "requiredKeys": [
            "enemyObject",
            "room"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/server/object/type/enemy-object.js:L396"
        ]
    },
    "reldens.roomLoginOnAuth": {
        "style": "object",
        "requiredKeys": [
            "client",
            "loginResult",
            "options",
            "request",
            "result",
            "roomLogin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/login.js:L94"
        ]
    },
    "reldens.roomLoginOnCreate": {
        "style": "object",
        "requiredKeys": [
            "options",
            "roomLogin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/login.js:L58"
        ]
    },
    "reldens.roomsDefinition": {
        "style": "positional",
        "args": [
            "this.defineExtraRooms"
        ],
        "sites": [
            "reldens:lib/rooms/server/manager.js:L93"
        ]
    },
    "reldens.roomsMessageActionsByRoom": {
        "style": "positional",
        "args": [
            "roomMessageActions",
            "roomName"
        ],
        "sites": [
            "reldens:lib/rooms/server/manager.js:L184"
        ]
    },
    "reldens.roomsMessageActionsGlobal": {
        "style": "object",
        "requiredKeys": [],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/rooms/server/manager.js:L99"
        ]
    },
    "reldens.runBattlePveAfter": {
        "style": "object",
        "requiredKeys": [
            "attackResult",
            "playerSchema",
            "roomScene",
            "target"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/actions/server/pve.js:L82"
        ]
    },
    "reldens.runGameOver": {
        "style": "object",
        "requiredKeys": [
            "defaultBehavior",
            "message",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L510"
        ]
    },
    "reldens.runPlayerAnimation": {
        "style": "positional",
        "args": [
            "this",
            "playerId",
            "playerState",
            "playerSprite"
        ],
        "sites": [
            "reldens:lib/users/client/player-engine.js:L333"
        ]
    },
    "reldens.savePlayerStatsUpdateClient": {
        "style": "positional",
        "args": [
            "client",
            "playerSchema",
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L762"
        ]
    },
    "reldens.sceneRoomOnCreate": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/rooms/server/scene.js:L116"
        ]
    },
    "reldens.serverBeforeDefineRooms": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L413"
        ]
    },
    "reldens.serverBeforeListen": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L275"
        ]
    },
    "reldens.serverBeforeLoginManager": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L447"
        ]
    },
    "reldens.serverConfigFeaturesReady": {
        "style": "object",
        "requiredKeys": [
            "configProcessor",
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L471"
        ]
    },
    "reldens.serverConfigReady": {
        "style": "object",
        "requiredKeys": [
            "configProcessor",
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L506"
        ]
    },
    "reldens.serverReady": {
        "style": "object",
        "requiredKeys": [
            "serverManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/server/manager.js:L280"
        ]
    },
    "reldens.setAudio": {
        "style": "object",
        "requiredKeys": [
            "audioManager",
            "categoryKey",
            "enabled"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/audio/client/manager.js:L80"
        ]
    },
    "reldens.setSceneOnPlayers": {
        "style": "positional",
        "args": [
            "this",
            "user",
            "userData"
        ],
        "sites": [
            "reldens:lib/game/server/login-manager.js:L387"
        ]
    },
    "reldens.setupActions": {
        "style": "object",
        "requiredKeys": [
            "enemyObject"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/objects/server/object/type/enemy-object.js:L226"
        ]
    },
    "reldens.setupAdminManagers": {
        "style": "object",
        "requiredKeys": [
            "adminManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/admin-manager.js:L161"
        ]
    },
    "reldens.setupAdminRouter": {
        "style": "object",
        "requiredKeys": [
            "adminManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/admin-manager.js:L157"
        ]
    },
    "reldens.setupAdminRoutes": {
        "style": "object",
        "requiredKeys": [
            "adminManager"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/admin-manager.js:L159"
        ]
    },
    "reldens.setupEntitiesRoutes": {
        "style": "object",
        "requiredKeys": [
            "adminManager",
            "driverResource",
            "entityPath",
            "entityRoute"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": true,
        "sites": [
            "@reldens/cms:lib/admin-manager/router.js:L145"
        ]
    },
    "reldens.startChangedScene": {
        "style": "object",
        "requiredKeys": [
            "message",
            "roomEvents"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/game/client/room-events.js:L452"
        ]
    },
    "reldens.startEngineScene": {
        "style": "positional",
        "args": [
            "this",
            "player",
            "room",
            "previousScene"
        ],
        "sites": [
            "reldens:lib/game/client/room-events.js:L773"
        ]
    },
    "reldens.startGameAfter": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L154"
        ]
    },
    "reldens.startGameBefore": {
        "style": "positional",
        "args": [
            "this"
        ],
        "sites": [
            "reldens:lib/game/client/game-manager.js:L138"
        ]
    },
    "reldens.startObjectHitObject": {
        "style": "object",
        "requiredKeys": [
            "bodyA",
            "bodyB"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L381"
        ]
    },
    "reldens.startObjectHitWall": {
        "style": "object",
        "requiredKeys": [
            "objectBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L441"
        ]
    },
    "reldens.startPlayerHitChangePoint": {
        "style": "object",
        "requiredKeys": [
            "changePoint",
            "collisionsManager",
            "playerBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L330"
        ]
    },
    "reldens.startPlayerHitObjectBegin": {
        "style": "object",
        "requiredKeys": [
            "otherBody",
            "playerBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L262"
        ]
    },
    "reldens.startPlayerHitWallEnd": {
        "style": "object",
        "requiredKeys": [
            "playerBody",
            "wallBody"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/world/server/collisions-manager.js:L307"
        ]
    },
    "reldens.teamJoinInviteRejected": {
        "style": "object",
        "requiredKeys": [
            "playerRejectingName",
            "playerSendingInvite"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/team-message-actions.js:L61"
        ]
    },
    "reldens.teamLeave": {
        "style": "object",
        "requiredKeys": [
            "data",
            "playerSchema",
            "room",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-leave.js:L31"
        ]
    },
    "reldens.teamLeaveBeforeSendUpdate": {
        "style": "object",
        "requiredKeys": [
            "areLessPlayerThanRequired",
            "currentTeam",
            "isOwnerDisbanding",
            "playerId",
            "playerSchema",
            "room",
            "sendUpdate",
            "singleRemoveId",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/team-leave.js:L80"
        ]
    },
    "reldens.templateReloader.templatesChanged": {
        "style": "object",
        "requiredKeys": [
            "changedFiles",
            "reloader"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "@reldens/cms:lib/template-reloader.js:L213"
        ]
    },
    "reldens.tryClanStart": {
        "style": "object",
        "requiredKeys": [
            "client",
            "continueStart",
            "data",
            "playerSchema",
            "room",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/try-clan-invite.js:L69"
        ]
    },
    "reldens.tryTeamStart": {
        "style": "object",
        "requiredKeys": [
            "client",
            "continueStart",
            "data",
            "playerSchema",
            "room",
            "teamsPlugin"
        ],
        "sometimesKeys": [],
        "hasSpreadOrComputed": false,
        "sites": [
            "reldens:lib/teams/server/message-actions/try-team-start.js:L47"
        ]
    },
    "reldens.updateGameSizeAfter": {
        "style": "positional",
        "args": [
            "this",
            "newWidth",
            "newHeight"
        ],
        "sites": [
            "reldens:lib/game/client/game-engine.js:L100"
        ]
    },
    "reldens.updateGameSizeBefore": {
        "style": "positional",
        "args": [
            "this",
            "newWidth",
            "newHeight"
        ],
        "sites": [
            "reldens:lib/game/client/game-engine.js:L88"
        ]
    }
};
