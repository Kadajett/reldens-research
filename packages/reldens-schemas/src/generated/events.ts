/**
 * GENERATED - do not edit by hand.
 *
 * Every 'reldens.*' event name found in reldens and its @reldens/* siblings, with the
 * first emit site for each. "emitted: false" means the name appears only in listeners,
 * which usually means a sibling package emits it under a name built at runtime.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export const RELDENS_EVENT_NAMES = [
    "reldens.actionsPrepareEventsListeners",
    "reldens.activatedRoom",
    "reldens.activatedRoom_",
    "reldens.activateRoom",
    "reldens.adminAfterEntityDelete",
    "reldens.adminAfterEntitySave",
    "reldens.adminBeforeEntityEdit",
    "reldens.adminBeforeEntityLoad",
    "reldens.adminBeforeEntitySave",
    "reldens.adminBeforeFieldRender",
    "reldens.adminEditPropertiesPopulation",
    "reldens.adminIsAuthenticated",
    "reldens.adminListPropertiesPopulation",
    "reldens.adminSideBarBeforeRender",
    "reldens.adminSideBarBeforeSubItems",
    "reldens.adminViewPropertiesPopulation",
    "reldens.afterContentProcess",
    "reldens.afterCreateAdminManager",
    "reldens.afterEnrichPlayerWithLocale",
    "reldens.afterGiveRewards",
    "reldens.afterInitEngineAndStartGame",
    "reldens.afterPlayerJoinedClan",
    "reldens.afterPlayerJoinedTeam",
    "reldens.afterProcessPlayerDropsBeforeBroadcast",
    "reldens.afterProcessRewardsDropsBeforeBroadcast",
    "reldens.afterRunAdditionalRespawnSetup",
    "reldens.afterRunAdditionalSetup",
    "reldens.afterSceneDynamicCreate",
    "reldens.afterTeamLeave",
    "reldens.afterVariablesCreated",
    "reldens.allAudiosLoaded",
    "reldens.audioLoaded",
    "reldens.audioManagerDeleteAudios",
    "reldens.audioManagerUpdateAudiosLoaded",
    "reldens.audioManagerUpdateCategoriesLoaded",
    "reldens.battleEnded",
    "reldens.beforeClanDisband",
    "reldens.beforeClanJoin",
    "reldens.beforeClanUpdatePlayers",
    "reldens.beforeContentProcess",
    "reldens.beforeCreateAdminManager",
    "reldens.beforeCreateEngine",
    "reldens.beforeCreateUiScene",
    "reldens.beforeEnrichPlayerWithClan",
    "reldens.beforeEnrichPlayerWithClanUpdate",
    "reldens.beforeEnrichUserWithLocale",
    "reldens.beforeGetParsedValue",
    "reldens.beforeGiveRewards",
    "reldens.beforeInitEngineAndStartGame",
    "reldens.beforeInitializeManagers",
    "reldens.beforeJoinGame",
    "reldens.beforeJoinGameRoom",
    "reldens.beforeLoadConfigurations",
    "reldens.beforePreload",
    "reldens.beforePreloadUiScene",
    "reldens.beforeReconnectGameClient",
    "reldens.beforeRemovingDroppedReward",
    "reldens.beforeSceneDynamicCreate",
    "reldens.beforeSceneExecuteMessages",
    "reldens.beforeSetupAdminManager",
    "reldens.beforeSuperInitialGameData",
    "reldens.beforeTeamCreate",
    "reldens.beforeTeamDisband",
    "reldens.beforeTeamJoin",
    "reldens.beforeTeamUpdatePlayers",
    "reldens.buildAdminContentsAfter",
    "reldens.changeSceneDestroyPrevious",
    "reldens.chatMessageObjectCreated",
    "reldens.clanDisconnectAfterSendUpdate",
    "reldens.clanDisconnectBeforeSendUpdate",
    "reldens.clanJoinInviteRejected",
    "reldens.clanLeave",
    "reldens.clanLeaveAfterSendUpdate",
    "reldens.clanLeaveBeforeSendUpdate",
    "reldens.clientStartAfter",
    "reldens.clientStartBefore",
    "reldens.closeUI",
    "reldens.cmsManagerInitializeServices",
    "reldens.createAnimationAfter",
    "reldens.createAppServer",
    "reldens.createCurrentPlayer",
    "reldens.createdMinimap",
    "reldens.createdNewPlayer",
    "reldens.createdPlayerSchema",
    "reldens.createdPreloaderInstance",
    "reldens.createdPreloaderRecurring",
    "reldens.createdRoomsEventsInstance",
    "reldens.createdUserInterface",
    "reldens.createdWorldObject",
    "reldens.createDynamicAnimation_",
    "reldens.createDynamicAnimationsBefore",
    "reldens.createEngineScene",
    "reldens.createEngineSceneDone",
    "reldens.createGameServer",
    "reldens.createNewPlayerBefore",
    "reldens.createNewPlayerCriticalError",
    "reldens.createNewUserAfter",
    "reldens.createNewUserError",
    "reldens.createPlayerAfter",
    "reldens.createPlayerAnimations",
    "reldens.createPlayerBefore",
    "reldens.createPlayerStatsAfter",
    "reldens.createPreload",
    "reldens.createUiScene",
    "reldens.createWorld",
    "reldens.defineRoomsInGameServerDone",
    "reldens.disconnectLoggedBefore",
    "reldens.dynamicForm.afterSave",
    "reldens.dynamicForm.afterValidation",
    "reldens.dynamicForm.beforeSave",
    "reldens.dynamicForm.beforeValidation",
    "reldens.dynamicFormRenderer.afterFieldsRender",
    "reldens.dynamicFormRenderer.beforeFieldsRender",
    "reldens.dynamicFormRequestHandler.afterSave",
    "reldens.dynamicFormRequestHandler.beforeSave",
    "reldens.dynamicFormRequestHandler.beforeValidation",
    "reldens.endChangedScene",
    "reldens.endObjectHitObject",
    "reldens.endObjectHitWall",
    "reldens.endPlayerHitChangePoint",
    "reldens.endPlayerHitObjectBegin",
    "reldens.endPlayerHitWallEnd",
    "reldens.eventBuildSideBarBefore",
    "reldens.featuresManagerLoadFeaturesAfter",
    "reldens.formsTransformer.afterRender",
    "reldens.formsTransformer.beforeRender",
    "reldens.gameEngineClearTarget",
    "reldens.gameEngineShowTarget",
    "reldens.gameEngineTabTarget",
    "reldens.gameOver",
    "reldens.gameOverReload",
    "reldens.gameRoomError",
    "reldens.guestInvalidChangePoint",
    "reldens.guestLoginInvalidParams",
    "reldens.initUiAfter",
    "reldens.initUiBefore",
    "reldens.invalidData",
    "reldens.items.addItem",
    "reldens.items.addItemBefore",
    "reldens.items.beforeFinalize",
    "reldens.items.canceled",
    "reldens.items.confirm",
    "reldens.items.disconfirm",
    "reldens.items.equip",
    "reldens.items.equipBefore",
    "reldens.items.equipItem",
    "reldens.items.executedItem",
    "reldens.items.executingItem",
    "reldens.items.finalized",
    "reldens.items.initialized",
    "reldens.items.invalidPush",
    "reldens.items.itemPushed",
    "reldens.items.itemRemove",
    "reldens.items.loadedOwnerItems",
    "reldens.items.modifyItemQty",
    "reldens.items.removeItem",
    "reldens.items.setGroups",
    "reldens.items.setItems",
    "reldens.items.setup",
    "reldens.items.unequipItem",
    "reldens.items.validate",
    "reldens.joinedRoom",
    "reldens.joinedRoom_",
    "reldens.joinRoomEnd",
    "reldens.joinRoomInvalid",
    "reldens.joinRoomStart",
    "reldens.loadFeature_",
    "reldens.loadFeatures",
    "reldens.loginError",
    "reldens.loginInvalidParams",
    "reldens.loginInvalidPassword",
    "reldens.loginInvalidRole",
    "reldens.loginSuccess",
    "reldens.manager.initializeAdminManager",
    "reldens.objectBodyChange",
    "reldens.objectBodyChanged",
    "reldens.objectHitObjectEnd",
    "reldens.objectHitWallBegin",
    "reldens.onJoinRoomGame",
    "reldens.onPreparePlayerCreationFormSubmit",
    "reldens.onPreparePlayerSelectorFormSubmit",
    "reldens.onPrepareSinglePlayerSelectorFormSubmit",
    "reldens.onRoomDispose",
    "reldens.onSavePlayerStateBefore",
    "reldens.onSavePlayerStatsBefore",
    "reldens.openUI",
    "reldens.parsingMapLayerAfter",
    "reldens.parsingMapLayerBefore",
    "reldens.parsingMapLayersAfterBodiesQueue",
    "reldens.playerAttack",
    "reldens.playerDeath",
    "reldens.playerEngineAddPlayer",
    "reldens.playerHitObjectEnd",
    "reldens.playerHitPlayer",
    "reldens.playerHitPlayerEnd",
    "reldens.playerHitWallBegin",
    "reldens.playerLeftScene",
    "reldens.playerNewName",
    "reldens.playerNewNameUnavailable",
    "reldens.playerPersistDataAfter",
    "reldens.playerPersistDataBefore",
    "reldens.playerSceneUnavailable",
    "reldens.playersOnAdd",
    "reldens.playersOnAddReady",
    "reldens.playersOnRemove",
    "reldens.playersQueueBefore",
    "reldens.playerStatsUpdateAfter",
    "reldens.playerStatsUpdateBefore",
    "reldens.preloadUiScene",
    "reldens.processForgotPassword",
    "reldens.processUserRequestIsValidDataBefore",
    "reldens.register",
    "reldens.registrationInvalidParams",
    "reldens.removePlayerBefore",
    "reldens.restoreObjectAfter",
    "reldens.roomLoginOnAuth",
    "reldens.roomLoginOnCreate",
    "reldens.roomsDefinition",
    "reldens.roomsMessageActionsByRoom",
    "reldens.roomsMessageActionsGlobal",
    "reldens.runBattlePveAfter",
    "reldens.runGameOver",
    "reldens.runPlayerAnimation",
    "reldens.savePlayerStatsUpdateClient",
    "reldens.sceneRoomOnCreate",
    "reldens.serverBeforeDefineRooms",
    "reldens.serverBeforeListen",
    "reldens.serverBeforeLoginManager",
    "reldens.serverConfigFeaturesReady",
    "reldens.serverConfigReady",
    "reldens.serverReady",
    "reldens.setAudio",
    "reldens.setSceneOnPlayers",
    "reldens.setupActions",
    "reldens.setupAdminManagers",
    "reldens.setupAdminRouter",
    "reldens.setupAdminRoutes",
    "reldens.setupEntitiesRoutes",
    "reldens.skills.addSkillAfter",
    "reldens.skills.addSkillBefore",
    "reldens.skills.afterCast",
    "reldens.skills.afterExecute",
    "reldens.skills.afterIsInRange",
    "reldens.skills.afterRanLogic",
    "reldens.skills.applyOwnerEffects",
    "reldens.skills.attackApplyDamage",
    "reldens.skills.beforeCast",
    "reldens.skills.beforeExecute",
    "reldens.skills.beforeIsInRange",
    "reldens.skills.beforeRunLogic",
    "reldens.skills.beforeValidate",
    "reldens.skills.effectTargetModifiers",
    "reldens.skills.executingSkill",
    "reldens.skills.experienceAdded",
    "reldens.skills.generatedLevels",
    "reldens.skills.initClassPathEnd",
    "reldens.skills.initLevelSetEnd",
    "reldens.skills.initLevelSetStart",
    "reldens.skills.levelApplyModifiers",
    "reldens.skills.levelDown",
    "reldens.skills.levelUp",
    "reldens.skills.loadedOwnerSkills",
    "reldens.skills.physicalAttackOnHit",
    "reldens.skills.physicalEffectOnHit",
    "reldens.skills.removeSkillAfter",
    "reldens.skills.removeSkillBefore",
    "reldens.skills.setLevels",
    "reldens.skills.setSkills",
    "reldens.skills.validateFail",
    "reldens.skills.validateSuccess",
    "reldens.startChangedScene",
    "reldens.startEngineScene",
    "reldens.startGameAfter",
    "reldens.startGameBefore",
    "reldens.startObjectHitObject",
    "reldens.startObjectHitWall",
    "reldens.startPlayerHitChangePoint",
    "reldens.startPlayerHitObjectBegin",
    "reldens.startPlayerHitWallEnd",
    "reldens.teamJoinInviteRejected",
    "reldens.teamLeave",
    "reldens.teamLeaveBeforeSendUpdate",
    "reldens.templateReloader.templatesChanged",
    "reldens.tryClanStart",
    "reldens.tryTeamStart",
    "reldens.updateGameSizeAfter",
    "reldens.updateGameSizeBefore"
] as const;

export type ReldensEventName = typeof RELDENS_EVENT_NAMES[number];

export interface EventProvenance {
    /** Whether an emit site was found. False means listeners exist but no literal emit. */
    emitted: boolean;
    /** Emitted with emitSync - the listener runs inside the caller's tick and is not awaited. */
    sync: boolean;
    /** Emitted with emit - the listener is awaited. */
    async: boolean;
    /** Which package emits it. */
    origin: string | null;
    /** file:Lnnn of the first emit site. */
    site: string | null;
    emitSiteCount: number;
}

export const RELDENS_EVENT_PROVENANCE: Record<ReldensEventName, EventProvenance> = {
    "reldens.actionsPrepareEventsListeners": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/actions/server/event-listeners.js:L55",
        "emitSiteCount": 1
    },
    "reldens.activatedRoom": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L435",
        "emitSiteCount": 1
    },
    "reldens.activatedRoom_": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L436",
        "emitSiteCount": 1
    },
    "reldens.activateRoom": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L85",
        "emitSiteCount": 1
    },
    "reldens.adminAfterEntityDelete": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L305",
        "emitSiteCount": 1
    },
    "reldens.adminAfterEntitySave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L351",
        "emitSiteCount": 1
    },
    "reldens.adminBeforeEntityEdit": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router.js:L128",
        "emitSiteCount": 1
    },
    "reldens.adminBeforeEntityLoad": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L490",
        "emitSiteCount": 1
    },
    "reldens.adminBeforeEntitySave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router.js:L162",
        "emitSiteCount": 2
    },
    "reldens.adminBeforeFieldRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L266",
        "emitSiteCount": 1
    },
    "reldens.adminEditPropertiesPopulation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L229",
        "emitSiteCount": 1
    },
    "reldens.adminIsAuthenticated": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router.js:L207",
        "emitSiteCount": 1
    },
    "reldens.adminListPropertiesPopulation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L112",
        "emitSiteCount": 1
    },
    "reldens.adminSideBarBeforeRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/contents-builder.js:L106",
        "emitSiteCount": 1
    },
    "reldens.adminSideBarBeforeSubItems": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/contents-builder.js:L92",
        "emitSiteCount": 1
    },
    "reldens.adminViewPropertiesPopulation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router-contents.js:L202",
        "emitSiteCount": 1
    },
    "reldens.afterContentProcess": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-engine.js:L188",
        "emitSiteCount": 1
    },
    "reldens.afterCreateAdminManager": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/admin/server/subscribers/create-admin-subscriber.js:L75",
        "emitSiteCount": 1
    },
    "reldens.afterEnrichPlayerWithLocale": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/snippets/server/initial-game-data-enricher.js:L39",
        "emitSiteCount": 1
    },
    "reldens.afterGiveRewards": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rewards/server/subscribers/rewards-subscriber.js:L79",
        "emitSiteCount": 1
    },
    "reldens.afterInitEngineAndStartGame": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L361",
        "emitSiteCount": 1
    },
    "reldens.afterPlayerJoinedClan": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-join.js:L72",
        "emitSiteCount": 1
    },
    "reldens.afterPlayerJoinedTeam": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-join.js:L85",
        "emitSiteCount": 1
    },
    "reldens.afterProcessPlayerDropsBeforeBroadcast": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/inventory/server/subscribers/player-death-subscriber.js:L103",
        "emitSiteCount": 1
    },
    "reldens.afterProcessRewardsDropsBeforeBroadcast": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rewards/server/rewards-drops-processor.js:L49",
        "emitSiteCount": 1
    },
    "reldens.afterRunAdditionalRespawnSetup": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/respawn/server/room-respawn.js:L137",
        "emitSiteCount": 1
    },
    "reldens.afterRunAdditionalSetup": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/server/manager.js:L144",
        "emitSiteCount": 1
    },
    "reldens.afterSceneDynamicCreate": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-dynamic.js:L104",
        "emitSiteCount": 1
    },
    "reldens.afterTeamLeave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-leave.js:L95",
        "emitSiteCount": 1
    },
    "reldens.afterVariablesCreated": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-engine.js:L168",
        "emitSiteCount": 1
    },
    "reldens.allAudiosLoaded": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L365",
        "emitSiteCount": 1
    },
    "reldens.audioLoaded": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L363",
        "emitSiteCount": 1
    },
    "reldens.audioManagerDeleteAudios": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L449",
        "emitSiteCount": 1
    },
    "reldens.audioManagerUpdateAudiosLoaded": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L432",
        "emitSiteCount": 1
    },
    "reldens.audioManagerUpdateCategoriesLoaded": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L426",
        "emitSiteCount": 1
    },
    "reldens.battleEnded": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/actions/server/pve.js:L332",
        "emitSiteCount": 1
    },
    "reldens.beforeClanDisband": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-leave.js:L97",
        "emitSiteCount": 1
    },
    "reldens.beforeClanJoin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-join.js:L42",
        "emitSiteCount": 1
    },
    "reldens.beforeClanUpdatePlayers": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-join.js:L66",
        "emitSiteCount": 1
    },
    "reldens.beforeContentProcess": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-engine.js:L175",
        "emitSiteCount": 1
    },
    "reldens.beforeCreateAdminManager": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/admin/server/subscribers/create-admin-subscriber.js:L40",
        "emitSiteCount": 1
    },
    "reldens.beforeCreateEngine": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L299",
        "emitSiteCount": 1
    },
    "reldens.beforeCreateUiScene": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L217",
        "emitSiteCount": 1
    },
    "reldens.beforeEnrichPlayerWithClan": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/event-handlers/create-player-clan-handler.js:L49",
        "emitSiteCount": 1
    },
    "reldens.beforeEnrichPlayerWithClanUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/event-handlers/create-player-clan-handler.js:L71",
        "emitSiteCount": 1
    },
    "reldens.beforeEnrichUserWithLocale": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/snippets/server/initial-game-data-enricher.js:L26",
        "emitSiteCount": 1
    },
    "reldens.beforeGetParsedValue": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/config/server/manager.js:L102",
        "emitSiteCount": 1
    },
    "reldens.beforeGiveRewards": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rewards/server/subscribers/rewards-subscriber.js:L52",
        "emitSiteCount": 1
    },
    "reldens.beforeInitEngineAndStartGame": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L291",
        "emitSiteCount": 1
    },
    "reldens.beforeInitializeManagers": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L394",
        "emitSiteCount": 1
    },
    "reldens.beforeJoinGame": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L184",
        "emitSiteCount": 1
    },
    "reldens.beforeJoinGameRoom": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L193",
        "emitSiteCount": 1
    },
    "reldens.beforeLoadConfigurations": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/config/server/manager.js:L57",
        "emitSiteCount": 1
    },
    "reldens.beforePreload": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L81",
        "emitSiteCount": 1
    },
    "reldens.beforePreloadUiScene": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L132",
        "emitSiteCount": 1
    },
    "reldens.beforeReconnectGameClient": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L422",
        "emitSiteCount": 1
    },
    "reldens.beforeRemovingDroppedReward": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rewards/server/reward-message-actions.js:L61",
        "emitSiteCount": 1
    },
    "reldens.beforeSceneDynamicCreate": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-dynamic.js:L93",
        "emitSiteCount": 1
    },
    "reldens.beforeSceneExecuteMessages": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L449",
        "emitSiteCount": 1
    },
    "reldens.beforeSetupAdminManager": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/admin/server/subscribers/create-admin-subscriber.js:L73",
        "emitSiteCount": 1
    },
    "reldens.beforeSuperInitialGameData": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/game.js:L69",
        "emitSiteCount": 1
    },
    "reldens.beforeTeamCreate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-join.js:L63",
        "emitSiteCount": 1
    },
    "reldens.beforeTeamDisband": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-leave.js:L99",
        "emitSiteCount": 2
    },
    "reldens.beforeTeamJoin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-join.js:L70",
        "emitSiteCount": 1
    },
    "reldens.beforeTeamUpdatePlayers": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-join.js:L79",
        "emitSiteCount": 1
    },
    "reldens.buildAdminContentsAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/contents-builder.js:L45",
        "emitSiteCount": 1
    },
    "reldens.changeSceneDestroyPrevious": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-dynamic.js:L559",
        "emitSiteCount": 1
    },
    "reldens.chatMessageObjectCreated": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/chat/client/chat-ui.js:L613",
        "emitSiteCount": 1
    },
    "reldens.clanDisconnectAfterSendUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-disconnect.js:L72",
        "emitSiteCount": 1
    },
    "reldens.clanDisconnectBeforeSendUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-disconnect.js:L56",
        "emitSiteCount": 1
    },
    "reldens.clanJoinInviteRejected": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/clan-message-actions.js:L75",
        "emitSiteCount": 1
    },
    "reldens.clanLeave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-leave.js:L29",
        "emitSiteCount": 1
    },
    "reldens.clanLeaveAfterSendUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-leave.js:L106",
        "emitSiteCount": 1
    },
    "reldens.clanLeaveBeforeSendUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/clan-leave.js:L81",
        "emitSiteCount": 1
    },
    "reldens.clientStartAfter": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/handlers/client-start-handler.js:L52",
        "emitSiteCount": 1
    },
    "reldens.clientStartBefore": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L125",
        "emitSiteCount": 1
    },
    "reldens.closeUI": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/chat/client/chat-ui.js:L170",
        "emitSiteCount": 7
    },
    "reldens.cmsManagerInitializeServices": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/manager.js:L390",
        "emitSiteCount": 1
    },
    "reldens.createAnimationAfter": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/objects/client/animation-engine.js:L223",
        "emitSiteCount": 1
    },
    "reldens.createAppServer": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L339",
        "emitSiteCount": 1
    },
    "reldens.createCurrentPlayer": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/prediction/client/room-events-override.js:L41",
        "emitSiteCount": 2
    },
    "reldens.createdMinimap": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/minimap.js:L58",
        "emitSiteCount": 1
    },
    "reldens.createdNewPlayer": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L567",
        "emitSiteCount": 1
    },
    "reldens.createdPlayerSchema": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L239",
        "emitSiteCount": 1
    },
    "reldens.createdPreloaderInstance": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L820",
        "emitSiteCount": 1
    },
    "reldens.createdPreloaderRecurring": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L796",
        "emitSiteCount": 1
    },
    "reldens.createdRoomsEventsInstance": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L358",
        "emitSiteCount": 1
    },
    "reldens.createdUserInterface": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/client/plugin.js:L498",
        "emitSiteCount": 1
    },
    "reldens.createdWorldObject": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/p2world.js:L686",
        "emitSiteCount": 1
    },
    "reldens.createDynamicAnimation_": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/client/plugin.js:L539",
        "emitSiteCount": 1
    },
    "reldens.createDynamicAnimationsBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/client/plugin.js:L517",
        "emitSiteCount": 1
    },
    "reldens.createEngineScene": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L861",
        "emitSiteCount": 1
    },
    "reldens.createEngineSceneDone": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L877",
        "emitSiteCount": 1
    },
    "reldens.createGameServer": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L378",
        "emitSiteCount": 1
    },
    "reldens.createNewPlayerBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L553",
        "emitSiteCount": 1
    },
    "reldens.createNewPlayerCriticalError": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L572",
        "emitSiteCount": 1
    },
    "reldens.createNewUserAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L517",
        "emitSiteCount": 1
    },
    "reldens.createNewUserError": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L521",
        "emitSiteCount": 1
    },
    "reldens.createPlayerAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L250",
        "emitSiteCount": 1
    },
    "reldens.createPlayerAnimations": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L446",
        "emitSiteCount": 1
    },
    "reldens.createPlayerBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L225",
        "emitSiteCount": 1
    },
    "reldens.createPlayerStatsAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/users/server/plugin.js:L308",
        "emitSiteCount": 1
    },
    "reldens.createPreload": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L206",
        "emitSiteCount": 1
    },
    "reldens.createUiScene": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L227",
        "emitSiteCount": 1
    },
    "reldens.createWorld": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L503",
        "emitSiteCount": 1
    },
    "reldens.defineRoomsInGameServerDone": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/manager.js:L117",
        "emitSiteCount": 1
    },
    "reldens.disconnectLoggedBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L175",
        "emitSiteCount": 1
    },
    "reldens.dynamicForm.afterSave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form.js:L295",
        "emitSiteCount": 1
    },
    "reldens.dynamicForm.afterValidation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form.js:L64",
        "emitSiteCount": 1
    },
    "reldens.dynamicForm.beforeSave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form.js:L281",
        "emitSiteCount": 1
    },
    "reldens.dynamicForm.beforeValidation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form.js:L42",
        "emitSiteCount": 1
    },
    "reldens.dynamicFormRenderer.afterFieldsRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form-renderer.js:L43",
        "emitSiteCount": 1
    },
    "reldens.dynamicFormRenderer.beforeFieldsRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form-renderer.js:L33",
        "emitSiteCount": 1
    },
    "reldens.dynamicFormRequestHandler.afterSave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form-request-handler.js:L65",
        "emitSiteCount": 1
    },
    "reldens.dynamicFormRequestHandler.beforeSave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form-request-handler.js:L51",
        "emitSiteCount": 1
    },
    "reldens.dynamicFormRequestHandler.beforeValidation": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/dynamic-form-request-handler.js:L37",
        "emitSiteCount": 1
    },
    "reldens.endChangedScene": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L460",
        "emitSiteCount": 1
    },
    "reldens.endObjectHitObject": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L399",
        "emitSiteCount": 1
    },
    "reldens.endObjectHitWall": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L446",
        "emitSiteCount": 1
    },
    "reldens.endPlayerHitChangePoint": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L364",
        "emitSiteCount": 1
    },
    "reldens.endPlayerHitObjectBegin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L269",
        "emitSiteCount": 1
    },
    "reldens.endPlayerHitWallEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L319",
        "emitSiteCount": 1
    },
    "reldens.eventBuildSideBarBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/contents-builder.js:L69",
        "emitSiteCount": 1
    },
    "reldens.featuresManagerLoadFeaturesAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/features/server/manager.js:L89",
        "emitSiteCount": 1
    },
    "reldens.formsTransformer.afterRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-engine/forms-transformer.js:L74",
        "emitSiteCount": 1
    },
    "reldens.formsTransformer.beforeRender": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-engine/forms-transformer.js:L52",
        "emitSiteCount": 1
    },
    "reldens.gameEngineClearTarget": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-engine.js:L253",
        "emitSiteCount": 1
    },
    "reldens.gameEngineShowTarget": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-engine.js:L180",
        "emitSiteCount": 1
    },
    "reldens.gameEngineTabTarget": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-engine.js:L300",
        "emitSiteCount": 1
    },
    "reldens.gameOver": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L514",
        "emitSiteCount": 1
    },
    "reldens.gameOverReload": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L306",
        "emitSiteCount": 1
    },
    "reldens.gameRoomError": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L168",
        "emitSiteCount": 1
    },
    "reldens.guestInvalidChangePoint": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L344",
        "emitSiteCount": 1
    },
    "reldens.guestLoginInvalidParams": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L295",
        "emitSiteCount": 1
    },
    "reldens.initUiAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L350",
        "emitSiteCount": 1
    },
    "reldens.initUiBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L348",
        "emitSiteCount": 1
    },
    "reldens.invalidData": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L289",
        "emitSiteCount": 1
    },
    "reldens.items.addItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.addItemBefore": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.beforeFinalize": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.BEFORE_FINALIZE)",
        "emitSiteCount": 1
    },
    "reldens.items.canceled": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.CANCELED)",
        "emitSiteCount": 1
    },
    "reldens.items.confirm": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.CONFIRM)",
        "emitSiteCount": 1
    },
    "reldens.items.disconfirm": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.DISCONFIRM)",
        "emitSiteCount": 1
    },
    "reldens.items.equip": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.equipBefore": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.equipItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.executedItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.executingItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.finalized": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.FINALIZED)",
        "emitSiteCount": 1
    },
    "reldens.items.initialized": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.INITIALIZED)",
        "emitSiteCount": 1
    },
    "reldens.items.invalidPush": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.INVALID_PUSH)",
        "emitSiteCount": 1
    },
    "reldens.items.itemPushed": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.ITEM_PUSHED)",
        "emitSiteCount": 1
    },
    "reldens.items.itemRemove": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/items-system",
        "site": "lib/exchange/exchange-platform.js (ItemsEvents.EXCHANGE.ITEM_REMOVE)",
        "emitSiteCount": 1
    },
    "reldens.items.loadedOwnerItems": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.modifyItemQty": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.removeItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.setGroups": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.setItems": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.setup": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.unequipItem": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.items.validate": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.joinedRoom": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L446",
        "emitSiteCount": 1
    },
    "reldens.joinedRoom_": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L447",
        "emitSiteCount": 1
    },
    "reldens.joinRoomEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L156",
        "emitSiteCount": 1
    },
    "reldens.joinRoomInvalid": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L149",
        "emitSiteCount": 1
    },
    "reldens.joinRoomStart": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L136",
        "emitSiteCount": 1
    },
    "reldens.loadFeature_": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/features/client/manager.js:L60",
        "emitSiteCount": 1
    },
    "reldens.loadFeatures": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/features/client/manager.js:L46",
        "emitSiteCount": 1
    },
    "reldens.loginError": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L395",
        "emitSiteCount": 1
    },
    "reldens.loginInvalidParams": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L307",
        "emitSiteCount": 1
    },
    "reldens.loginInvalidPassword": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L380",
        "emitSiteCount": 1
    },
    "reldens.loginInvalidRole": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L374",
        "emitSiteCount": 1
    },
    "reldens.loginSuccess": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L391",
        "emitSiteCount": 1
    },
    "reldens.manager.initializeAdminManager": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/manager.js:L563",
        "emitSiteCount": 1
    },
    "reldens.objectBodyChange": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/client/plugin.js:L205",
        "emitSiteCount": 1
    },
    "reldens.objectBodyChanged": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/client/plugin.js:L284",
        "emitSiteCount": 2
    },
    "reldens.objectHitObjectEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L412",
        "emitSiteCount": 1
    },
    "reldens.objectHitWallBegin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L424",
        "emitSiteCount": 1
    },
    "reldens.onJoinRoomGame": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/game.js:L41",
        "emitSiteCount": 1
    },
    "reldens.onPreparePlayerCreationFormSubmit": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/users/client/plugin.js:L322",
        "emitSiteCount": 1
    },
    "reldens.onPreparePlayerSelectorFormSubmit": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/users/client/plugin.js:L265",
        "emitSiteCount": 1
    },
    "reldens.onPrepareSinglePlayerSelectorFormSubmit": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/users/client/plugin.js:L196",
        "emitSiteCount": 1
    },
    "reldens.onRoomDispose": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/rooms/server/login.js:L298",
        "emitSiteCount": 1
    },
    "reldens.onSavePlayerStateBefore": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L719",
        "emitSiteCount": 1
    },
    "reldens.onSavePlayerStatsBefore": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L748",
        "emitSiteCount": 1
    },
    "reldens.openUI": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/chat/client/chat-ui.js:L156",
        "emitSiteCount": 7
    },
    "reldens.parsingMapLayerAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/p2world.js:L245",
        "emitSiteCount": 1
    },
    "reldens.parsingMapLayerBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/p2world.js:L243",
        "emitSiteCount": 1
    },
    "reldens.parsingMapLayersAfterBodiesQueue": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/p2world.js:L254",
        "emitSiteCount": 1
    },
    "reldens.playerAttack": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/actions/client/receiver-wrapper.js:L104",
        "emitSiteCount": 1
    },
    "reldens.playerDeath": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/actions/server/battle.js:L197",
        "emitSiteCount": 1
    },
    "reldens.playerEngineAddPlayer": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/users/client/player-engine.js:L171",
        "emitSiteCount": 1
    },
    "reldens.playerHitObjectEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L281",
        "emitSiteCount": 1
    },
    "reldens.playerHitPlayer": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L237",
        "emitSiteCount": 1
    },
    "reldens.playerHitPlayerEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L251",
        "emitSiteCount": 1
    },
    "reldens.playerHitWallBegin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L296",
        "emitSiteCount": 1
    },
    "reldens.playerLeftScene": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L589",
        "emitSiteCount": 1
    },
    "reldens.playerNewName": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L536",
        "emitSiteCount": 1
    },
    "reldens.playerNewNameUnavailable": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L557",
        "emitSiteCount": 1
    },
    "reldens.playerPersistDataAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L237",
        "emitSiteCount": 1
    },
    "reldens.playerPersistDataBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L233",
        "emitSiteCount": 1
    },
    "reldens.playerSceneUnavailable": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L545",
        "emitSiteCount": 1
    },
    "reldens.playersOnAdd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L168",
        "emitSiteCount": 1
    },
    "reldens.playersOnAddReady": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L875",
        "emitSiteCount": 1
    },
    "reldens.playersOnRemove": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L281",
        "emitSiteCount": 1
    },
    "reldens.playersQueueBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/prediction/client/room-events-override.js:L33",
        "emitSiteCount": 2
    },
    "reldens.playerStatsUpdateAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L620",
        "emitSiteCount": 1
    },
    "reldens.playerStatsUpdateBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L409",
        "emitSiteCount": 1
    },
    "reldens.preloadUiScene": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/scene-preloader.js:L166",
        "emitSiteCount": 1
    },
    "reldens.processForgotPassword": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L679",
        "emitSiteCount": 1
    },
    "reldens.processUserRequestIsValidDataBefore": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L285",
        "emitSiteCount": 1
    },
    "reldens.register": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L501",
        "emitSiteCount": 1
    },
    "reldens.registrationInvalidParams": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L313",
        "emitSiteCount": 1
    },
    "reldens.removePlayerBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L662",
        "emitSiteCount": 1
    },
    "reldens.restoreObjectAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/server/object/type/enemy-object.js:L396",
        "emitSiteCount": 1
    },
    "reldens.roomLoginOnAuth": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/rooms/server/login.js:L94",
        "emitSiteCount": 1
    },
    "reldens.roomLoginOnCreate": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/rooms/server/login.js:L58",
        "emitSiteCount": 1
    },
    "reldens.roomsDefinition": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/manager.js:L93",
        "emitSiteCount": 1
    },
    "reldens.roomsMessageActionsByRoom": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/manager.js:L184",
        "emitSiteCount": 1
    },
    "reldens.roomsMessageActionsGlobal": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/manager.js:L99",
        "emitSiteCount": 1
    },
    "reldens.runBattlePveAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/actions/server/pve.js:L82",
        "emitSiteCount": 1
    },
    "reldens.runGameOver": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L510",
        "emitSiteCount": 1
    },
    "reldens.runPlayerAnimation": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/users/client/player-engine.js:L333",
        "emitSiteCount": 1
    },
    "reldens.savePlayerStatsUpdateClient": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L762",
        "emitSiteCount": 1
    },
    "reldens.sceneRoomOnCreate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/rooms/server/scene.js:L116",
        "emitSiteCount": 1
    },
    "reldens.serverBeforeDefineRooms": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L413",
        "emitSiteCount": 1
    },
    "reldens.serverBeforeListen": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L275",
        "emitSiteCount": 1
    },
    "reldens.serverBeforeLoginManager": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L447",
        "emitSiteCount": 1
    },
    "reldens.serverConfigFeaturesReady": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L471",
        "emitSiteCount": 1
    },
    "reldens.serverConfigReady": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L506",
        "emitSiteCount": 1
    },
    "reldens.serverReady": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/server/manager.js:L280",
        "emitSiteCount": 1
    },
    "reldens.setAudio": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/audio/client/manager.js:L80",
        "emitSiteCount": 1
    },
    "reldens.setSceneOnPlayers": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/server/login-manager.js:L387",
        "emitSiteCount": 1
    },
    "reldens.setupActions": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/objects/server/object/type/enemy-object.js:L226",
        "emitSiteCount": 1
    },
    "reldens.setupAdminManagers": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager.js:L161",
        "emitSiteCount": 1
    },
    "reldens.setupAdminRouter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager.js:L157",
        "emitSiteCount": 1
    },
    "reldens.setupAdminRoutes": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager.js:L159",
        "emitSiteCount": 1
    },
    "reldens.setupEntitiesRoutes": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/admin-manager/router.js:L145",
        "emitSiteCount": 1
    },
    "reldens.skills.addSkillAfter": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.addSkillBefore": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.afterCast": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.afterExecute": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.afterIsInRange": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.afterRanLogic": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.applyOwnerEffects": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.attackApplyDamage": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.beforeCast": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.beforeExecute": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.beforeIsInRange": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.beforeRunLogic": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.beforeValidate": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.effectTargetModifiers": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.executingSkill": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.experienceAdded": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.generatedLevels": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.initClassPathEnd": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.initLevelSetEnd": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.initLevelSetStart": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.levelApplyModifiers": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.levelDown": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.levelUp": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.loadedOwnerSkills": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.physicalAttackOnHit": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.physicalEffectOnHit": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.removeSkillAfter": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.removeSkillBefore": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.setLevels": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.setSkills": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.validateFail": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.skills.validateSuccess": {
        "emitted": false,
        "sync": false,
        "async": false,
        "origin": null,
        "site": null,
        "emitSiteCount": 0
    },
    "reldens.startChangedScene": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L452",
        "emitSiteCount": 1
    },
    "reldens.startEngineScene": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/room-events.js:L773",
        "emitSiteCount": 1
    },
    "reldens.startGameAfter": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L154",
        "emitSiteCount": 1
    },
    "reldens.startGameBefore": {
        "emitted": true,
        "sync": true,
        "async": false,
        "origin": "reldens",
        "site": "lib/game/client/game-manager.js:L138",
        "emitSiteCount": 1
    },
    "reldens.startObjectHitObject": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L381",
        "emitSiteCount": 1
    },
    "reldens.startObjectHitWall": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L441",
        "emitSiteCount": 1
    },
    "reldens.startPlayerHitChangePoint": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L330",
        "emitSiteCount": 1
    },
    "reldens.startPlayerHitObjectBegin": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L262",
        "emitSiteCount": 1
    },
    "reldens.startPlayerHitWallEnd": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/world/server/collisions-manager.js:L307",
        "emitSiteCount": 1
    },
    "reldens.teamJoinInviteRejected": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/team-message-actions.js:L61",
        "emitSiteCount": 1
    },
    "reldens.teamLeave": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-leave.js:L31",
        "emitSiteCount": 1
    },
    "reldens.teamLeaveBeforeSendUpdate": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/team-leave.js:L80",
        "emitSiteCount": 1
    },
    "reldens.templateReloader.templatesChanged": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "@reldens/cms",
        "site": "lib/template-reloader.js:L213",
        "emitSiteCount": 1
    },
    "reldens.tryClanStart": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/try-clan-invite.js:L69",
        "emitSiteCount": 1
    },
    "reldens.tryTeamStart": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/teams/server/message-actions/try-team-start.js:L47",
        "emitSiteCount": 1
    },
    "reldens.updateGameSizeAfter": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-engine.js:L100",
        "emitSiteCount": 1
    },
    "reldens.updateGameSizeBefore": {
        "emitted": true,
        "sync": false,
        "async": true,
        "origin": "reldens",
        "site": "lib/game/client/game-engine.js:L88",
        "emitSiteCount": 1
    }
};
