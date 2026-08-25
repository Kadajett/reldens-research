/* GENERATED - do not edit. Source: scripts/generate-event-api.cjs
 * One documented payload type per Reldens event, for TypeDoc. */

/**
 * `reldens.actionsPrepareEventsListeners`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(actionsPlugin, classPath)`
 * - Emitted at: lib/actions/server/event-listeners.js:L55
 */
export type ActionsPrepareEventsListenersPayload = [actionsPlugin: unknown, classPath: unknown];

/**
 * `reldens.activateRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(room, this.gameManager)`
 * - Emitted at: lib/game/client/room-events.js:L85
 */
export type ActivateRoomPayload = [room: unknown, gameManager: unknown];

/**
 * `reldens.activatedRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L435
 */
export type ActivatedRoomPayload = [sceneRoom: unknown, self: unknown];

/**
 * `reldens.activatedRoom_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L436
 */
export type ActivatedRoom_Payload = [sceneRoom: unknown, self: unknown];

/**
 * `reldens.adminAfterEntityDelete`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, idProperty, ids` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L305
 */
export type AdminAfterEntityDeletePayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "idProperty": unknown;
    "ids": unknown;
};

/**
 * `reldens.adminAfterEntitySave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityData, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L351
 */
export type AdminAfterEntitySavePayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityData": unknown;
    "entityPath": unknown;
    "req": unknown;
    "res": unknown;
};

/**
 * `reldens.adminBeforeEntityEdit`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L128
 */
export type AdminBeforeEntityEditPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityPath": unknown;
    "req": unknown;
    "res": unknown;
};

/**
 * `reldens.adminBeforeEntityLoad`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityId` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L490
 */
export type AdminBeforeEntityLoadPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityId": unknown;
};

/**
 * `reldens.adminBeforeEntitySave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L162, lib/admin-manager/router.js:L192
 */
export type AdminBeforeEntitySavePayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityPath": unknown;
    "req": unknown;
    "res": unknown;
};

/**
 * `reldens.adminBeforeFieldRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminContentsRender, adminFilesContents, adminManager, driverResource, loadedEntity, property, propertyKey, renderedEditProperties, req, templateData` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L266
 */
export type AdminBeforeFieldRenderPayload = {
    "adminContentsRender": unknown;
    "adminFilesContents": unknown;
    "adminManager": unknown;
    "driverResource": unknown;
    "loadedEntity": unknown;
    "property": unknown;
    "propertyKey": unknown;
    "renderedEditProperties": unknown;
    "req": unknown;
    "templateData": unknown;
};

/**
 * `reldens.adminEditPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityData, entityId, loadedEntity, renderedEditProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L229
 */
export type AdminEditPropertiesPopulationPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityData": unknown;
    "entityId": unknown;
    "loadedEntity": unknown;
    "renderedEditProperties": unknown;
    "req": unknown;
};

/**
 * `reldens.adminIsAuthenticated`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, allowContinue, next, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L207
 */
export type AdminIsAuthenticatedPayload = {
    "adminManager": unknown;
    "allowContinue": unknown;
    "next": unknown;
    "req": unknown;
    "res": unknown;
};

/**
 * `reldens.adminListPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, listProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L112
 */
export type AdminListPropertiesPopulationPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "listProperties": unknown;
    "req": unknown;
};

/**
 * `reldens.adminSideBarBeforeRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents, navigationView` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L106
 */
export type AdminSideBarBeforeRenderPayload = {
    "adminManager": unknown;
    "navigationContents": unknown;
    "navigationView": unknown;
};

/**
 * `reldens.adminSideBarBeforeSubItems`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L92
 */
export type AdminSideBarBeforeSubItemsPayload = {
    "adminManager": unknown;
    "navigationContents": unknown;
};

/**
 * `reldens.adminViewPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, idProperty, loadedEntity, renderedViewProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L202
 */
export type AdminViewPropertiesPopulationPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "idProperty": unknown;
    "loadedEntity": unknown;
    "renderedViewProperties": unknown;
    "req": unknown;
};

/**
 * `reldens.afterContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `processedContent, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L188
 */
export type AfterContentProcessPayload = {
    "processedContent": unknown;
    "renderContext": unknown;
    "variables": unknown;
};

/**
 * `reldens.afterCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L75
 */
export type AfterCreateAdminManagerPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.afterEnrichPlayerWithLocale`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, roomGame, superInitialGameData, userModel`
 * - Emitted at: lib/snippets/server/initial-game-data-enricher.js:L39
 */
export type AfterEnrichPlayerWithLocalePayload = {
    "client": unknown;
    "roomGame": unknown;
    "superInitialGameData": unknown;
    "userModel": unknown;
};

/**
 * `reldens.afterGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `itemRewards, playerSchema, targetObject, winningRewards`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L79
 */
export type AfterGiveRewardsPayload = {
    "itemRewards": unknown;
    "playerSchema": unknown;
    "targetObject": unknown;
    "winningRewards": unknown;
};

/**
 * `reldens.afterInitEngineAndStartGame`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, joinedFirstRoom)`
 * - Emitted at: lib/game/client/game-manager.js:L361
 */
export type AfterInitEngineAndStartGamePayload = [initialGameData: unknown, joinedFirstRoom: unknown];

/**
 * `reldens.afterPlayerJoinedClan`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clan, playerJoining`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L72
 */
export type AfterPlayerJoinedClanPayload = {
    "clan": unknown;
    "playerJoining": unknown;
};

/**
 * `reldens.afterPlayerJoinedTeam`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentTeam, playerJoining`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L85
 */
export type AfterPlayerJoinedTeamPayload = {
    "currentTeam": unknown;
    "playerJoining": unknown;
};

/**
 * `reldens.afterProcessPlayerDropsBeforeBroadcast`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(dropsMappedData, eventResult)`
 * - Emitted at: lib/inventory/server/subscribers/player-death-subscriber.js:L103
 */
export type AfterProcessPlayerDropsBeforeBroadcastPayload = [dropsMappedData: unknown, eventResult: unknown];

/**
 * `reldens.afterProcessRewardsDropsBeforeBroadcast`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(dropsMappedData, eventResult)`
 * - Emitted at: lib/rewards/server/rewards-drops-processor.js:L49
 */
export type AfterProcessRewardsDropsBeforeBroadcastPayload = [dropsMappedData: unknown, eventResult: unknown];

/**
 * `reldens.afterRunAdditionalRespawnSetup`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clonedObjProps, multipleObj, objClass, objInstance, objectIndex, respawnArea, roomRespawn`
 * - Emitted at: lib/respawn/server/room-respawn.js:L137
 */
export type AfterRunAdditionalRespawnSetupPayload = {
    "clonedObjProps": unknown;
    "multipleObj": unknown;
    "objClass": unknown;
    "objInstance": unknown;
    "objectIndex": unknown;
    "respawnArea": unknown;
    "roomRespawn": unknown;
};

/**
 * `reldens.afterRunAdditionalSetup`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectData, objectInstance, objectsManager`
 * - Emitted at: lib/objects/server/manager.js:L144
 */
export type AfterRunAdditionalSetupPayload = {
    "objectData": unknown;
    "objectInstance": unknown;
    "objectsManager": unknown;
};

/**
 * `reldens.afterSceneDynamicCreate`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L104
 */
export type AfterSceneDynamicCreatePayload = [self: unknown];

/**
 * `reldens.afterTeamLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentTeam, leavingPlayerName`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L95
 */
export type AfterTeamLeavePayload = {
    "currentTeam": unknown;
    "leavingPlayerName": unknown;
};

/**
 * `reldens.afterVariablesCreated`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `renderContext, variables`
 * - Emitted at: lib/template-engine.js:L168
 */
export type AfterVariablesCreatedPayload = {
    "renderContext": unknown;
    "variables": unknown;
};

/**
 * `reldens.allAudiosLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, audios, currentScene, audio)`
 * - Emitted at: lib/audio/client/manager.js:L365
 */
export type AllAudiosLoadedPayload = [self: unknown, audios: unknown, currentScene: unknown, audio: unknown];

/**
 * `reldens.audioLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, audios, currentScene, audio)`
 * - Emitted at: lib/audio/client/manager.js:L363
 */
export type AudioLoadedPayload = [self: unknown, audios: unknown, currentScene: unknown, audio: unknown];

/**
 * `reldens.audioManagerDeleteAudios`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L449
 */
export type AudioManagerDeleteAudiosPayload = [self: unknown, room: unknown, gameManager: unknown, message: unknown];

/**
 * `reldens.audioManagerUpdateAudiosLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L432
 */
export type AudioManagerUpdateAudiosLoadedPayload = [self: unknown, room: unknown, gameManager: unknown, message: unknown];

/**
 * `reldens.audioManagerUpdateCategoriesLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L426
 */
export type AudioManagerUpdateCategoriesLoadedPayload = [self: unknown, room: unknown, gameManager: unknown, message: unknown];

/**
 * `reldens.battleEnded`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: a `BattleEndedEvent` instance with properties `actionData, playerSchema, pve, room`
 * - Emitted at: lib/actions/server/pve.js:L332
 */
export type BattleEndedPayload = {
    "actionData": unknown;
    "playerSchema": unknown;
    "pve": unknown;
    "room": unknown;
};

/**
 * `reldens.beforeClanDisband`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueDisband, playerSchema, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L97
 */
export type BeforeClanDisbandPayload = {
    "continueDisband": unknown;
    "playerSchema": unknown;
    "singleRemoveId": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeClanJoin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoin, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L42
 */
export type BeforeClanJoinPayload = {
    "clanToJoin": unknown;
    "continueBeforeJoin": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeClanUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoinUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L66
 */
export type BeforeClanUpdatePlayersPayload = {
    "clanToJoin": unknown;
    "continueBeforeJoinUpdate": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `content, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L175
 */
export type BeforeContentProcessPayload = {
    "content": unknown;
    "renderContext": unknown;
    "variables": unknown;
};

/**
 * `reldens.beforeCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L40
 */
export type BeforeCreateAdminManagerPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.beforeCreateEngine`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, this)`
 * - Emitted at: lib/game/client/game-manager.js:L299
 */
export type BeforeCreateEnginePayload = [initialGameData: unknown, self: unknown];

/**
 * `reldens.beforeCreateUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L217
 */
export type BeforeCreateUiScenePayload = [self: unknown];

/**
 * `reldens.beforeEnrichPlayerWithClan`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L49
 */
export type BeforeEnrichPlayerWithClanPayload = {
    "client": unknown;
    "continueProcess": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeEnrichPlayerWithClanUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L71
 */
export type BeforeEnrichPlayerWithClanUpdatePayload = {
    "client": unknown;
    "continueProcess": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeEnrichUserWithLocale`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(startEvent)`
 * - Emitted at: lib/snippets/server/initial-game-data-enricher.js:L26
 */
export type BeforeEnrichUserWithLocalePayload = [startEvent: unknown];

/**
 * `reldens.beforeGetParsedValue`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `config, configManager`
 * - Emitted at: lib/config/server/manager.js:L102
 */
export type BeforeGetParsedValuePayload = {
    "config": unknown;
    "configManager": unknown;
};

/**
 * `reldens.beforeGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueEvent, playerSchema, targetObject`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L52
 */
export type BeforeGiveRewardsPayload = {
    "continueEvent": unknown;
    "playerSchema": unknown;
    "targetObject": unknown;
};

/**
 * `reldens.beforeInitEngineAndStartGame`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, this)`
 * - Emitted at: lib/game/client/game-manager.js:L291
 */
export type BeforeInitEngineAndStartGamePayload = [initialGameData: unknown, self: unknown];

/**
 * `reldens.beforeInitializeManagers`
 * The registration deadline for server custom classes. RoomsManager reads server/customClasses/roomsClass/* immediately after this event, so a class registered later is invisible to it.
 * [EXTRACTED] lib/game/server/manager.js:L144 - emit('reldens.beforeInitializeManagers', ...); theme/plugins/server-plugin.js:L29 - props.serverManager.configManager.configList.server.customClasses
 *
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, serverManager`
 * - Emitted at: lib/game/server/manager.js:L394
 */
export type BeforeInitializeManagersPayload = {
    "continueProcess": unknown;
    "serverManager": unknown;
};

/**
 * `reldens.beforeJoinGame`
 * The registration deadline for client custom classes. The scene preloader reads client/customClasses/objects/* right after the join.
 * [EXTRACTED] theme/plugins/client-plugin.js:L25 - props.gameManager.config.client.customClasses
 *
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formData, gameManager, isNewUser`
 * - Emitted at: lib/game/client/game-manager.js:L184
 */
export type BeforeJoinGamePayload = {
    "formData": unknown;
    "gameManager": unknown;
    "isNewUser": unknown;
};

/**
 * `reldens.beforeJoinGameRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.gameRoom)`
 * - Emitted at: lib/game/client/game-manager.js:L193
 */
export type BeforeJoinGameRoomPayload = [gameRoom: unknown];

/**
 * `reldens.beforeLoadConfigurations`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configManager`
 * - Emitted at: lib/config/server/manager.js:L57
 */
export type BeforeLoadConfigurationsPayload = {
    "configManager": unknown;
};

/**
 * `reldens.beforePreload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, eventUiScene)`
 * - Emitted at: lib/game/client/scene-preloader.js:L81
 */
export type BeforePreloadPayload = [self: unknown, eventUiScene: unknown];

/**
 * `reldens.beforePreloadUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L132
 */
export type BeforePreloadUiScenePayload = [self: unknown];

/**
 * `reldens.beforeReconnectGameClient`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L422
 */
export type BeforeReconnectGameClientPayload = [message: unknown, self: unknown];

/**
 * `reldens.beforeRemovingDroppedReward`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueEvent, playerSchema, room, roomObject`
 * - Emitted at: lib/rewards/server/reward-message-actions.js:L61
 */
export type BeforeRemovingDroppedRewardPayload = {
    "client": unknown;
    "continueEvent": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "roomObject": unknown;
};

/**
 * `reldens.beforeSceneDynamicCreate`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L93
 */
export type BeforeSceneDynamicCreatePayload = [self: unknown];

/**
 * `reldens.beforeSceneExecuteMessages`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `canContinue, client, messageData, playerSchema, room`
 * - Emitted at: lib/rooms/server/scene.js:L449
 */
export type BeforeSceneExecuteMessagesPayload = {
    "canContinue": unknown;
    "client": unknown;
    "messageData": unknown;
    "playerSchema": unknown;
    "room": unknown;
};

/**
 * `reldens.beforeSetupAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L73
 */
export type BeforeSetupAdminManagerPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.beforeSuperInitialGameData`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(superInitialGameData, this, client, userModel)`
 * - Emitted at: lib/rooms/server/game.js:L69
 */
export type BeforeSuperInitialGameDataPayload = [superInitialGameData: unknown, self: unknown, client: unknown, userModel: unknown];

/**
 * `reldens.beforeTeamCreate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeCreate, teamProps, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L63
 */
export type BeforeTeamCreatePayload = {
    "continueBeforeCreate": unknown;
    "teamProps": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeTeamDisband`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerSchema, room, singleRemoveId, teamsPlugin` (sometimes: continueDisband, continueLeave)
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L99, lib/teams/server/message-actions/team-leave.js:L107
 */
export type BeforeTeamDisbandPayload = {
    "playerSchema": unknown;
    "room": unknown;
    "singleRemoveId": unknown;
    "teamsPlugin": unknown;
    "continueDisband"?: unknown;
    "continueLeave"?: unknown;
};

/**
 * `reldens.beforeTeamJoin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeJoin, currentTeam, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L70
 */
export type BeforeTeamJoinPayload = {
    "continueBeforeJoin": unknown;
    "currentTeam": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.beforeTeamUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeJoinUpdate, currentTeam, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L79
 */
export type BeforeTeamUpdatePlayersPayload = {
    "continueBeforeJoinUpdate": unknown;
    "currentTeam": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.buildAdminContentsAfter`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L45
 */
export type BuildAdminContentsAfterPayload = {
    "adminManager": unknown;
};

/**
 * `reldens.changeSceneDestroyPrevious`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L559
 */
export type ChangeSceneDestroyPreviousPayload = [self: unknown];

/**
 * `reldens.chatMessageObjectCreated`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, message)`
 * - Emitted at: lib/chat/client/chat-ui.js:L613
 */
export type ChatMessageObjectCreatedPayload = [self: unknown, message: unknown];

/**
 * `reldens.clanDisconnectAfterSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueLeave, playerSchema, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L72
 */
export type ClanDisconnectAfterSendUpdatePayload = {
    "continueLeave": unknown;
    "playerSchema": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.clanDisconnectBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerId, playerSchema, sendUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L56
 */
export type ClanDisconnectBeforeSendUpdatePayload = {
    "playerId": unknown;
    "playerSchema": unknown;
    "sendUpdate": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.clanJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanInvite, clientSendingInvite, playerRejectingName`
 * - Emitted at: lib/teams/server/clan-message-actions.js:L75
 */
export type ClanJoinInviteRejectedPayload = {
    "clanInvite": unknown;
    "clientSendingInvite": unknown;
    "playerRejectingName": unknown;
};

/**
 * `reldens.clanLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, playerSchema, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L29
 */
export type ClanLeavePayload = {
    "message": unknown;
    "playerSchema": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.clanLeaveAfterSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueLeave, playerSchema, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L106
 */
export type ClanLeaveAfterSendUpdatePayload = {
    "continueLeave": unknown;
    "playerSchema": unknown;
    "singleRemoveId": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.clanLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentClan, disbandClan, playerId, playerSchema, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L81
 */
export type ClanLeaveBeforeSendUpdatePayload = {
    "currentClan": unknown;
    "disbandClan": unknown;
    "playerId": unknown;
    "playerSchema": unknown;
    "sendUpdate": unknown;
    "singleRemoveId": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.clientStartAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/handlers/client-start-handler.js:L52
 */
export type ClientStartAfterPayload = [self: unknown];

/**
 * `reldens.clientStartBefore`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L125
 */
export type ClientStartBeforePayload = [self: unknown];

/**
 * `reldens.closeUI`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `closeButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, openButton, uiScene)
 * - Emitted at: lib/chat/client/chat-ui.js:L170, lib/game/client/user-interface.js:L193, lib/game/client/ui-factory.js:L75, lib/game/client/settings-ui.js:L62, lib/game/client/instructions-ui.js:L53, lib/game/client/minimap-ui.js:L98, lib/users/client/player-stats-ui.js:L59
 */
export type CloseUIPayload = {
    "closeButton": unknown;
    "ui": unknown;
    "box"?: unknown;
    "dialogBox"?: unknown;
    "dialogContainer"?: unknown;
    "minimap"?: unknown;
    "openButton"?: unknown;
    "uiScene"?: unknown;
};

/**
 * `reldens.cmsManagerInitializeServices`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `manager`
 * - Emitted at: lib/manager.js:L390
 */
export type CmsManagerInitializeServicesPayload = {
    "manager": unknown;
};

/**
 * `reldens.createAnimationAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `animationEngine`
 * - Emitted at: lib/objects/client/animation-engine.js:L223
 */
export type CreateAnimationAfterPayload = {
    "animationEngine": unknown;
};

/**
 * `reldens.createAppServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, serverManager`
 * - Emitted at: lib/game/server/manager.js:L339
 */
export type CreateAppServerPayload = {
    "continueProcess": unknown;
    "serverManager": unknown;
};

/**
 * `reldens.createCurrentPlayer`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `key, player, previousScene, roomEvents`
 * - Emitted at: lib/prediction/client/room-events-override.js:L41, lib/game/client/room-events.js:L232
 */
export type CreateCurrentPlayerPayload = {
    "key": unknown;
    "player": unknown;
    "previousScene": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.createDynamicAnimation_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, animProps)`
 * - Emitted at: lib/objects/client/plugin.js:L539
 */
export type CreateDynamicAnimation_Payload = [self: unknown, animProps: unknown];

/**
 * `reldens.createDynamicAnimationsBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, sceneDynamic)`
 * - Emitted at: lib/objects/client/plugin.js:L517
 */
export type CreateDynamicAnimationsBeforePayload = [self: unknown, sceneDynamic: unknown];

/**
 * `reldens.createEngineScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, room, previousScene, this)`
 * - Emitted at: lib/game/client/room-events.js:L861
 */
export type CreateEngineScenePayload = [player: unknown, room: unknown, previousScene: unknown, self: unknown];

/**
 * `reldens.createEngineSceneDone`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentScene, previousScene, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L877
 */
export type CreateEngineSceneDonePayload = {
    "currentScene": unknown;
    "previousScene": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.createGameServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, options`
 * - Emitted at: lib/game/server/manager.js:L378
 */
export type CreateGameServerPayload = {
    "continueProcess": unknown;
    "options": unknown;
};

/**
 * `reldens.createNewPlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(loginData, playerData, this)`
 * - Emitted at: lib/game/server/login-manager.js:L553
 */
export type CreateNewPlayerBeforePayload = [loginData: unknown, playerData: unknown, self: unknown];

/**
 * `reldens.createNewPlayerCriticalError`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, error, result)`
 * - Emitted at: lib/game/server/login-manager.js:L572
 */
export type CreateNewPlayerCriticalErrorPayload = [self: unknown, loginData: unknown, error: unknown, result: unknown];

/**
 * `reldens.createNewUserAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(newUser, this, result)`
 * - Emitted at: lib/game/server/login-manager.js:L517
 */
export type CreateNewUserAfterPayload = [newUser: unknown, self: unknown, result: unknown];

/**
 * `reldens.createNewUserError`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L521
 */
export type CreateNewUserErrorPayload = [self: unknown, userData: unknown, result: unknown];

/**
 * `reldens.createPlayerAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, this)`
 * - Emitted at: lib/rooms/server/scene.js:L250
 */
export type CreatePlayerAfterPayload = [client: unknown, userModel: unknown, currentPlayer: unknown, self: unknown];

/**
 * `reldens.createPlayerAnimations`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, avatarKey)`
 * - Emitted at: lib/game/client/scene-preloader.js:L446
 */
export type CreatePlayerAnimationsPayload = [self: unknown, avatarKey: unknown];

/**
 * `reldens.createPlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, this)`
 * - Emitted at: lib/rooms/server/scene.js:L225
 */
export type CreatePlayerBeforePayload = [client: unknown, userModel: unknown, self: unknown];

/**
 * `reldens.createPlayerStatsAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, roomScene)`
 * - Emitted at: lib/users/server/plugin.js:L308
 */
export type CreatePlayerStatsAfterPayload = [client: unknown, userModel: unknown, currentPlayer: unknown, roomScene: unknown];

/**
 * `reldens.createPreload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, eventUiScene)`
 * - Emitted at: lib/game/client/scene-preloader.js:L206
 */
export type CreatePreloadPayload = [self: unknown, eventUiScene: unknown];

/**
 * `reldens.createUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L227
 */
export type CreateUiScenePayload = [self: unknown];

/**
 * `reldens.createWorld`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(roomData, objectsManager, this)`
 * - Emitted at: lib/rooms/server/scene.js:L503
 */
export type CreateWorldPayload = [roomData: unknown, objectsManager: unknown, self: unknown];

/**
 * `reldens.createdMinimap`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/minimap.js:L58
 */
export type CreatedMinimapPayload = [self: unknown];

/**
 * `reldens.createdNewPlayer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, loginData, this, result)`
 * - Emitted at: lib/game/server/login-manager.js:L567
 */
export type CreatedNewPlayerPayload = [player: unknown, loginData: unknown, self: unknown, result: unknown];

/**
 * `reldens.createdPlayerSchema`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, this)`
 * - Emitted at: lib/rooms/server/scene.js:L239
 */
export type CreatedPlayerSchemaPayload = [client: unknown, userModel: unknown, currentPlayer: unknown, self: unknown];

/**
 * `reldens.createdPreloaderInstance`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, this.scenePreloader)`
 * - Emitted at: lib/game/client/room-events.js:L820
 */
export type CreatedPreloaderInstancePayload = [self: unknown, scenePreloader: unknown];

/**
 * `reldens.createdPreloaderRecurring`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, this.scenePreloader)`
 * - Emitted at: lib/game/client/room-events.js:L796
 */
export type CreatedPreloaderRecurringPayload = [self: unknown, scenePreloader: unknown];

/**
 * `reldens.createdRoomsEventsInstance`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(joinedFirstRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L358
 */
export type CreatedRoomsEventsInstancePayload = [joinedFirstRoom: unknown, self: unknown];

/**
 * `reldens.createdUserInterface`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `ObjectsPlugin, gameManager, id, userInterface`
 * - Emitted at: lib/objects/client/plugin.js:L498
 */
export type CreatedUserInterfacePayload = {
    "ObjectsPlugin": unknown;
    "gameManager": unknown;
    "id": unknown;
    "userInterface": unknown;
};

/**
 * `reldens.createdWorldObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyMass, bodyObject, collision, hasState, objectIndex, p2world, pathFinder, posX, posY, roomObject, tileH, tileW`
 * - Emitted at: lib/world/server/p2world.js:L686
 */
export type CreatedWorldObjectPayload = {
    "bodyMass": unknown;
    "bodyObject": unknown;
    "collision": unknown;
    "hasState": unknown;
    "objectIndex": unknown;
    "p2world": unknown;
    "pathFinder": unknown;
    "posX": unknown;
    "posY": unknown;
    "roomObject": unknown;
    "tileH": unknown;
    "tileW": unknown;
};

/**
 * `reldens.defineRoomsInGameServerDone`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/rooms/server/manager.js:L117
 */
export type DefineRoomsInGameServerDonePayload = [self: unknown];

/**
 * `reldens.disconnectLoggedBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, player, room, userModel`
 * - Emitted at: lib/rooms/server/scene.js:L175
 */
export type DisconnectLoggedBeforePayload = {
    "client": unknown;
    "player": unknown;
    "room": unknown;
    "userModel": unknown;
};

/**
 * `reldens.dynamicForm.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues, result`
 * - Emitted at: lib/dynamic-form.js:L295
 */
export type DynamicFormAfterSavePayload = {
    "formConfig": unknown;
    "preparedValues": unknown;
    "result": unknown;
};

/**
 * `reldens.dynamicForm.afterValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues, validationResult`
 * - Emitted at: lib/dynamic-form.js:L64
 */
export type DynamicFormAfterValidationPayload = {
    "formConfig": unknown;
    "formKey": unknown;
    "req": unknown;
    "submittedValues": unknown;
    "validationResult": unknown;
};

/**
 * `reldens.dynamicForm.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues`
 * - Emitted at: lib/dynamic-form.js:L281
 */
export type DynamicFormBeforeSavePayload = {
    "formConfig": unknown;
    "preparedValues": unknown;
};

/**
 * `reldens.dynamicForm.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues`
 * - Emitted at: lib/dynamic-form.js:L42
 */
export type DynamicFormBeforeValidationPayload = {
    "formConfig": unknown;
    "formKey": unknown;
    "req": unknown;
    "submittedValues": unknown;
};

/**
 * `reldens.dynamicFormRenderer.afterFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, formFields, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L43
 */
export type DynamicFormRendererAfterFieldsRenderPayload = {
    "attributes": unknown;
    "domain": unknown;
    "enhancedData": unknown;
    "fieldsToRender": unknown;
    "formConfig": unknown;
    "formFields": unknown;
    "req": unknown;
    "systemVariables": unknown;
};

/**
 * `reldens.dynamicFormRenderer.beforeFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L33
 */
export type DynamicFormRendererBeforeFieldsRenderPayload = {
    "attributes": unknown;
    "domain": unknown;
    "enhancedData": unknown;
    "fieldsToRender": unknown;
    "formConfig": unknown;
    "req": unknown;
    "systemVariables": unknown;
};

/**
 * `reldens.dynamicFormRequestHandler.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, res, submissionResult`
 * - Emitted at: lib/dynamic-form-request-handler.js:L65
 */
export type DynamicFormRequestHandlerAfterSavePayload = {
    "formConfig": unknown;
    "formKey": unknown;
    "req": unknown;
    "res": unknown;
    "submissionResult": unknown;
};

/**
 * `reldens.dynamicFormRequestHandler.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, preparedValues, req, res`
 * - Emitted at: lib/dynamic-form-request-handler.js:L51
 */
export type DynamicFormRequestHandlerBeforeSavePayload = {
    "formConfig": unknown;
    "formKey": unknown;
    "preparedValues": unknown;
    "req": unknown;
    "res": unknown;
};

/**
 * `reldens.dynamicFormRequestHandler.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formKey, req, res, submittedValues`
 * - Emitted at: lib/dynamic-form-request-handler.js:L37
 */
export type DynamicFormRequestHandlerBeforeValidationPayload = {
    "formKey": unknown;
    "req": unknown;
    "res": unknown;
    "submittedValues": unknown;
};

/**
 * `reldens.endChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L460
 */
export type EndChangedScenePayload = {
    "message": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.endObjectHitObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB, priorityObject`
 * - Emitted at: lib/world/server/collisions-manager.js:L399
 */
export type EndObjectHitObjectPayload = {
    "bodyA": unknown;
    "bodyB": unknown;
    "priorityObject": unknown;
};

/**
 * `reldens.endObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L446
 */
export type EndObjectHitWallPayload = {
    "objectBody": unknown;
};

/**
 * `reldens.endPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changeData, changePoint, collisionsManager, playerBody, playerSchema`
 * - Emitted at: lib/world/server/collisions-manager.js:L364
 */
export type EndPlayerHitChangePointPayload = {
    "changeData": unknown;
    "changePoint": unknown;
    "collisionsManager": unknown;
    "playerBody": unknown;
    "playerSchema": unknown;
};

/**
 * `reldens.endPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L269
 */
export type EndPlayerHitObjectBeginPayload = {
    "otherBody": unknown;
    "playerBody": unknown;
};

/**
 * `reldens.endPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L319
 */
export type EndPlayerHitWallEndPayload = {
    "playerBody": unknown;
    "wallBody": unknown;
};

/**
 * `reldens.eventBuildSideBarBefore`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L69
 */
export type EventBuildSideBarBeforePayload = {
    "adminManager": unknown;
    "navigationContents": unknown;
};

/**
 * `reldens.featuresManagerLoadFeaturesAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `featuresCollection, featuresManager`
 * - Emitted at: lib/features/server/manager.js:L89
 */
export type FeaturesManagerLoadFeaturesAfterPayload = {
    "featuresCollection": unknown;
    "featuresManager": unknown;
};

/**
 * `reldens.formsTransformer.afterRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, formConfig, formContent, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L74
 */
export type FormsTransformerAfterRenderPayload = {
    "domain": unknown;
    "enhancedData": unknown;
    "formConfig": unknown;
    "formContent": unknown;
    "formKey": unknown;
    "req": unknown;
    "systemVariables": unknown;
};

/**
 * `reldens.formsTransformer.beforeRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, fieldsToRender, formAttributes, formConfig, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L52
 */
export type FormsTransformerBeforeRenderPayload = {
    "domain": unknown;
    "enhancedData": unknown;
    "fieldsToRender": unknown;
    "formAttributes": unknown;
    "formConfig": unknown;
    "formKey": unknown;
    "req": unknown;
    "systemVariables": unknown;
};

/**
 * `reldens.gameEngineClearTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, clearedTargetData)`
 * - Emitted at: lib/game/client/game-engine.js:L253
 */
export type GameEngineClearTargetPayload = [self: unknown, clearedTargetData: unknown];

/**
 * `reldens.gameEngineShowTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, target, previousTarget, targetName)`
 * - Emitted at: lib/game/client/game-engine.js:L180
 */
export type GameEngineShowTargetPayload = [self: unknown, target: unknown, previousTarget: unknown, targetName: unknown];

/**
 * `reldens.gameEngineTabTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, closerTarget, previousTarget)`
 * - Emitted at: lib/game/client/game-engine.js:L300
 */
export type GameEngineTabTargetPayload = [self: unknown, closerTarget: unknown, previousTarget: unknown];

/**
 * `reldens.gameOver`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L514
 */
export type GameOverPayload = [message: unknown, self: unknown];

/**
 * `reldens.gameOverReload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, defaultReload)`
 * - Emitted at: lib/game/client/room-events.js:L306
 */
export type GameOverReloadPayload = [self: unknown, defaultReload: unknown];

/**
 * `reldens.gameRoomError`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L168
 */
export type GameRoomErrorPayload = [self: unknown];

/**
 * `reldens.guestInvalidChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changePoint, collisionsManager, contactClient, isGuest, playerBody, playerSchema`
 * - Emitted at: lib/world/server/collisions-manager.js:L344
 */
export type GuestInvalidChangePointPayload = {
    "changePoint": unknown;
    "collisionsManager": unknown;
    "contactClient": unknown;
    "isGuest": unknown;
    "playerBody": unknown;
    "playerSchema": unknown;
};

/**
 * `reldens.guestLoginInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L295
 */
export type GuestLoginInvalidParamsPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.initUiAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L350
 */
export type InitUiAfterPayload = [message: unknown, self: unknown];

/**
 * `reldens.initUiBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L348
 */
export type InitUiBeforePayload = [message: unknown, self: unknown];

/**
 * `reldens.invalidData`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L289
 */
export type InvalidDataPayload = [self: unknown, userData: unknown, result: unknown];

/**
 * `reldens.joinRoomEnd`
 * Payload of reldens.joinRoomEnd - one of the platform's three dedicated payload classes. Properties verified by the emit-site extractor (note roomScene, not room).
 * [EXTRACTED] lib/rooms/server/scene.js:L156 - emit('reldens.joinRoomEnd', new JoinedSceneRoomEvent(...)); lib/rooms/server/events/joined-scene-room-event.js:L1 - constructor assigns roomScene/client/options/userModel/loggedPlayer/isGuest
 *
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: a `JoinedSceneRoomEvent` instance with properties `client, isGuest, loggedPlayer, options, roomScene, userModel`
 * - Emitted at: lib/rooms/server/scene.js:L156
 */
export type JoinRoomEndPayload = {
    "client": unknown;
    "isGuest": unknown;
    "loggedPlayer": unknown;
    "options": unknown;
    "roomScene": unknown;
    "userModel": unknown;
};

/**
 * `reldens.joinRoomInvalid`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, client, options, userModel, isGuest)`
 * - Emitted at: lib/rooms/server/scene.js:L149
 */
export type JoinRoomInvalidPayload = [self: unknown, client: unknown, options: unknown, userModel: unknown, isGuest: unknown];

/**
 * `reldens.joinRoomStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, client, options, userModel)`
 * - Emitted at: lib/rooms/server/scene.js:L136
 */
export type JoinRoomStartPayload = [self: unknown, client: unknown, options: unknown, userModel: unknown];

/**
 * `reldens.joinedRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L446
 */
export type JoinedRoomPayload = [sceneRoom: unknown, self: unknown];

/**
 * `reldens.joinedRoom_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L447
 */
export type JoinedRoom_Payload = [sceneRoom: unknown, self: unknown];

/**
 * `reldens.loadFeature_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.featuresList[featureCode], this)`
 * - Emitted at: lib/features/client/manager.js:L60
 */
export type LoadFeature_Payload = [featuresList_featureCode: unknown, self: unknown];

/**
 * `reldens.loadFeatures`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, featuresCodeList)`
 * - Emitted at: lib/features/client/manager.js:L46
 */
export type LoadFeaturesPayload = [self: unknown, featuresCodeList: unknown];

/**
 * `reldens.loginError`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L395
 */
export type LoginErrorPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.loginInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L307
 */
export type LoginInvalidParamsPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.loginInvalidPassword`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L380
 */
export type LoginInvalidPasswordPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.loginInvalidRole`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L374
 */
export type LoginInvalidRolePayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.loginSuccess`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L391
 */
export type LoginSuccessPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.manager.initializeAdminManager`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminFilesContents, authenticationCallback, manager, translations`
 * - Emitted at: lib/manager.js:L563
 */
export type ManagerInitializeAdminManagerPayload = {
    "adminFilesContents": unknown;
    "authenticationCallback": unknown;
    "manager": unknown;
    "translations": unknown;
};

/**
 * `reldens.objectBodyChange`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, changes, key`
 * - Emitted at: lib/objects/client/plugin.js:L205
 */
export type ObjectBodyChangePayload = {
    "body": unknown;
    "changes": unknown;
    "key": unknown;
};

/**
 * `reldens.objectBodyChanged`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, key`
 * - Emitted at: lib/objects/client/plugin.js:L284, lib/objects/client/plugin.js:L300
 */
export type ObjectBodyChangedPayload = {
    "body": unknown;
    "key": unknown;
};

/**
 * `reldens.objectHitObjectEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L412
 */
export type ObjectHitObjectEndPayload = {
    "bodyA": unknown;
    "bodyB": unknown;
};

/**
 * `reldens.objectHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continue, objectBody, wall`
 * - Emitted at: lib/world/server/collisions-manager.js:L424
 */
export type ObjectHitWallBeginPayload = {
    "continue": unknown;
    "objectBody": unknown;
    "wall": unknown;
};

/**
 * `reldens.onJoinRoomGame`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, options, userModel, this)`
 * - Emitted at: lib/rooms/server/game.js:L41
 */
export type OnJoinRoomGamePayload = [client: unknown, options: unknown, userModel: unknown, self: unknown];

/**
 * `reldens.onPreparePlayerCreationFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L322
 */
export type OnPreparePlayerCreationFormSubmitPayload = {
    "form": unknown;
    "gameManager": unknown;
    "usersPlugin": unknown;
};

/**
 * `reldens.onPreparePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, select, selectedPlayer, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L265
 */
export type OnPreparePlayerSelectorFormSubmitPayload = {
    "form": unknown;
    "gameManager": unknown;
    "select": unknown;
    "selectedPlayer": unknown;
    "usersPlugin": unknown;
};

/**
 * `reldens.onPrepareSinglePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, player, selectElement, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L196
 */
export type OnPrepareSinglePlayerSelectorFormSubmitPayload = {
    "form": unknown;
    "gameManager": unknown;
    "player": unknown;
    "selectElement": unknown;
    "usersPlugin": unknown;
};

/**
 * `reldens.onRoomDispose`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `result, roomId, roomName`
 * - Emitted at: lib/rooms/server/login.js:L298
 */
export type OnRoomDisposePayload = {
    "result": unknown;
    "roomId": unknown;
    "roomName": unknown;
};

/**
 * `reldens.onSavePlayerStateBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `playerId, playerSchema, room, updatePatch, updateReady`
 * - Emitted at: lib/rooms/server/scene.js:L719
 */
export type OnSavePlayerStateBeforePayload = {
    "playerId": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "updatePatch": unknown;
    "updateReady": unknown;
};

/**
 * `reldens.onSavePlayerStatsBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `client, objectState, playerSchema, room`
 * - Emitted at: lib/rooms/server/scene.js:L748
 */
export type OnSavePlayerStatsBeforePayload = {
    "client": unknown;
    "objectState": unknown;
    "playerSchema": unknown;
    "room": unknown;
};

/**
 * `reldens.openUI`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `openButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, uiScene)
 * - Emitted at: lib/chat/client/chat-ui.js:L156, lib/game/client/user-interface.js:L155, lib/game/client/ui-factory.js:L56, lib/game/client/settings-ui.js:L51, lib/game/client/instructions-ui.js:L44, lib/game/client/minimap-ui.js:L77, lib/users/client/player-stats-ui.js:L49
 */
export type OpenUIPayload = {
    "openButton": unknown;
    "ui": unknown;
    "box"?: unknown;
    "dialogBox"?: unknown;
    "dialogContainer"?: unknown;
    "minimap"?: unknown;
    "uiScene"?: unknown;
};

/**
 * `reldens.parsingMapLayerAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L245
 */
export type ParsingMapLayerAfterPayload = {
    "layer": unknown;
    "world": unknown;
};

/**
 * `reldens.parsingMapLayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L243
 */
export type ParsingMapLayerBeforePayload = {
    "layer": unknown;
    "world": unknown;
};

/**
 * `reldens.parsingMapLayersAfterBodiesQueue`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L254
 */
export type ParsingMapLayersAfterBodiesQueuePayload = {
    "layer": unknown;
    "world": unknown;
};

/**
 * `reldens.playerAttack`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(message, this.room)`
 * - Emitted at: lib/actions/client/receiver-wrapper.js:L104
 */
export type PlayerAttackPayload = [message: unknown, room: unknown];

/**
 * `reldens.playerDeath`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: a `PlayerDeathEvent` instance with properties `affectedProperty, attackerPlayer, room, targetClient, targetSchema`
 * - Emitted at: lib/actions/server/battle.js:L197
 */
export type PlayerDeathPayload = {
    "affectedProperty": unknown;
    "attackerPlayer": unknown;
    "room": unknown;
    "targetClient": unknown;
    "targetSchema": unknown;
};

/**
 * `reldens.playerEngineAddPlayer`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, id, addPlayerData)`
 * - Emitted at: lib/users/client/player-engine.js:L171
 */
export type PlayerEngineAddPlayerPayload = [self: unknown, id: unknown, addPlayerData: unknown];

/**
 * `reldens.playerHitObjectEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, result`
 * - Emitted at: lib/world/server/collisions-manager.js:L281
 */
export type PlayerHitObjectEndPayload = {
    "playerBody": unknown;
    "result": unknown;
};

/**
 * `reldens.playerHitPlayer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L237
 */
export type PlayerHitPlayerPayload = {
    "bodyA": unknown;
    "bodyB": unknown;
};

/**
 * `reldens.playerHitPlayerEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L251
 */
export type PlayerHitPlayerEndPayload = {
    "bodyA": unknown;
    "bodyB": unknown;
};

/**
 * `reldens.playerHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L296
 */
export type PlayerHitWallBeginPayload = {
    "playerBody": unknown;
    "wallBody": unknown;
};

/**
 * `reldens.playerLeftScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `code, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L589
 */
export type PlayerLeftScenePayload = {
    "code": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.playerNewName`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L536
 */
export type PlayerNewNamePayload = [self: unknown, loginData: unknown, result: unknown];

/**
 * `reldens.playerNewNameUnavailable`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, isNameAvailable, result)`
 * - Emitted at: lib/game/server/login-manager.js:L557
 */
export type PlayerNewNameUnavailablePayload = [self: unknown, loginData: unknown, isNameAvailable: unknown, result: unknown];

/**
 * `reldens.playerPersistDataAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, params, this)`
 * - Emitted at: lib/rooms/server/scene.js:L237
 */
export type PlayerPersistDataAfterPayload = [client: unknown, userModel: unknown, currentPlayer: unknown, params: unknown, self: unknown];

/**
 * `reldens.playerPersistDataBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, params, this)`
 * - Emitted at: lib/rooms/server/scene.js:L233
 */
export type PlayerPersistDataBeforePayload = [client: unknown, userModel: unknown, currentPlayer: unknown, params: unknown, self: unknown];

/**
 * `reldens.playerSceneUnavailable`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L545
 */
export type PlayerSceneUnavailablePayload = [self: unknown, loginData: unknown, result: unknown];

/**
 * `reldens.playerStatsUpdateAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L620
 */
export type PlayerStatsUpdateAfterPayload = [message: unknown, self: unknown];

/**
 * `reldens.playerStatsUpdateBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L409
 */
export type PlayerStatsUpdateBeforePayload = [message: unknown, self: unknown];

/**
 * `reldens.playersOnAdd`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, key, previousScene, this)`
 * - Emitted at: lib/game/client/room-events.js:L168
 */
export type PlayersOnAddPayload = [player: unknown, key: unknown, previousScene: unknown, self: unknown];

/**
 * `reldens.playersOnAddReady`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `player, previousScene, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L875
 */
export type PlayersOnAddReadyPayload = {
    "player": unknown;
    "previousScene": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.playersOnRemove`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(player, key, this)`
 * - Emitted at: lib/game/client/room-events.js:L281
 */
export type PlayersOnRemovePayload = [player: unknown, key: unknown, self: unknown];

/**
 * `reldens.playersQueueBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, key, previousScene, roomEvents)`
 * - Emitted at: lib/prediction/client/room-events-override.js:L33, lib/game/client/room-events.js:L227
 */
export type PlayersQueueBeforePayload = [player: unknown, key: unknown, previousScene: unknown, roomEvents: unknown];

/**
 * `reldens.preloadUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L166
 */
export type PreloadUiScenePayload = [self: unknown];

/**
 * `reldens.processForgotPassword`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData, sendResult)`
 * - Emitted at: lib/game/server/login-manager.js:L679
 */
export type ProcessForgotPasswordPayload = [self: unknown, userData: unknown, sendResult: unknown];

/**
 * `reldens.processUserRequestIsValidDataBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData)`
 * - Emitted at: lib/game/server/login-manager.js:L285
 */
export type ProcessUserRequestIsValidDataBeforePayload = [self: unknown, userData: unknown];

/**
 * `reldens.register`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L501
 */
export type RegisterPayload = [self: unknown, userData: unknown, result: unknown];

/**
 * `reldens.registrationInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L313
 */
export type RegistrationInvalidParamsPayload = [self: unknown, user: unknown, userData: unknown, result: unknown];

/**
 * `reldens.removePlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerSchema, room, stateObject`
 * - Emitted at: lib/rooms/server/scene.js:L662
 */
export type RemovePlayerBeforePayload = {
    "playerSchema": unknown;
    "room": unknown;
    "stateObject": unknown;
};

/**
 * `reldens.restoreObjectAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `enemyObject, room`
 * - Emitted at: lib/objects/server/object/type/enemy-object.js:L396
 */
export type RestoreObjectAfterPayload = {
    "enemyObject": unknown;
    "room": unknown;
};

/**
 * `reldens.roomLoginOnAuth`
 * Custom authentication hook. Setting props.result.confirm = false denies the login. Shape read from the platform's own project template, which is the only place it is shown.
 * [EXTRACTED] theme/index.js.dist:L49 - props.loginResult.user.role_id / props.result.confirm = false
 *
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `client, loginResult, options, request, result, roomLogin`
 * - Emitted at: lib/rooms/server/login.js:L94
 */
export type RoomLoginOnAuthPayload = {
    "client": unknown;
    "loginResult": unknown;
    "options": unknown;
    "request": unknown;
    "result": unknown;
    "roomLogin": unknown;
};

/**
 * `reldens.roomLoginOnCreate`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `options, roomLogin`
 * - Emitted at: lib/rooms/server/login.js:L58
 */
export type RoomLoginOnCreatePayload = {
    "options": unknown;
    "roomLogin": unknown;
};

/**
 * `reldens.roomsDefinition`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.defineExtraRooms)`
 * - Emitted at: lib/rooms/server/manager.js:L93
 */
export type RoomsDefinitionPayload = [defineExtraRooms: unknown];

/**
 * `reldens.roomsMessageActionsByRoom`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(roomMessageActions, roomName)`
 * - Emitted at: lib/rooms/server/manager.js:L184
 */
export type RoomsMessageActionsByRoomPayload = [roomMessageActions: unknown, roomName: unknown];

/**
 * `reldens.roomsMessageActionsGlobal`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `(none required)`
 * - Emitted at: lib/rooms/server/manager.js:L99
 */
export type RoomsMessageActionsGlobalPayload = Record<string, unknown>;

/**
 * `reldens.runBattlePveAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attackResult, playerSchema, roomScene, target`
 * - Emitted at: lib/actions/server/pve.js:L82
 */
export type RunBattlePveAfterPayload = {
    "attackResult": unknown;
    "playerSchema": unknown;
    "roomScene": unknown;
    "target": unknown;
};

/**
 * `reldens.runGameOver`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `defaultBehavior, message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L510
 */
export type RunGameOverPayload = {
    "defaultBehavior": unknown;
    "message": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.runPlayerAnimation`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, playerId, playerState, playerSprite)`
 * - Emitted at: lib/users/client/player-engine.js:L333
 */
export type RunPlayerAnimationPayload = [self: unknown, playerId: unknown, playerState: unknown, playerSprite: unknown];

/**
 * `reldens.savePlayerStatsUpdateClient`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, playerSchema, this)`
 * - Emitted at: lib/rooms/server/scene.js:L762
 */
export type SavePlayerStatsUpdateClientPayload = [client: unknown, playerSchema: unknown, self: unknown];

/**
 * `reldens.sceneRoomOnCreate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/rooms/server/scene.js:L116
 */
export type SceneRoomOnCreatePayload = [self: unknown];

/**
 * `reldens.serverBeforeDefineRooms`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L413
 */
export type ServerBeforeDefineRoomsPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.serverBeforeListen`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L275
 */
export type ServerBeforeListenPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.serverBeforeLoginManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L447
 */
export type ServerBeforeLoginManagerPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.serverConfigFeaturesReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L471
 */
export type ServerConfigFeaturesReadyPayload = {
    "configProcessor": unknown;
    "serverManager": unknown;
};

/**
 * `reldens.serverConfigReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L506
 */
export type ServerConfigReadyPayload = {
    "configProcessor": unknown;
    "serverManager": unknown;
};

/**
 * `reldens.serverReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L280
 */
export type ServerReadyPayload = {
    "serverManager": unknown;
};

/**
 * `reldens.setAudio`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `audioManager, categoryKey, enabled`
 * - Emitted at: lib/audio/client/manager.js:L80
 */
export type SetAudioPayload = {
    "audioManager": unknown;
    "categoryKey": unknown;
    "enabled": unknown;
};

/**
 * `reldens.setSceneOnPlayers`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData)`
 * - Emitted at: lib/game/server/login-manager.js:L387
 */
export type SetSceneOnPlayersPayload = [self: unknown, user: unknown, userData: unknown];

/**
 * `reldens.setupActions`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `enemyObject`
 * - Emitted at: lib/objects/server/object/type/enemy-object.js:L226
 */
export type SetupActionsPayload = {
    "enemyObject": unknown;
};

/**
 * `reldens.setupAdminManagers`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L161
 */
export type SetupAdminManagersPayload = {
    "adminManager": unknown;
};

/**
 * `reldens.setupAdminRouter`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L157
 */
export type SetupAdminRouterPayload = {
    "adminManager": unknown;
};

/**
 * `reldens.setupAdminRoutes`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L159
 */
export type SetupAdminRoutesPayload = {
    "adminManager": unknown;
};

/**
 * `reldens.setupEntitiesRoutes`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, entityRoute` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L145
 */
export type SetupEntitiesRoutesPayload = {
    "adminManager": unknown;
    "driverResource": unknown;
    "entityPath": unknown;
    "entityRoute": unknown;
};

/**
 * `reldens.startChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L452
 */
export type StartChangedScenePayload = {
    "message": unknown;
    "roomEvents": unknown;
};

/**
 * `reldens.startEngineScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, player, room, previousScene)`
 * - Emitted at: lib/game/client/room-events.js:L773
 */
export type StartEngineScenePayload = [self: unknown, player: unknown, room: unknown, previousScene: unknown];

/**
 * `reldens.startGameAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L154
 */
export type StartGameAfterPayload = [self: unknown];

/**
 * `reldens.startGameBefore`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L138
 */
export type StartGameBeforePayload = [self: unknown];

/**
 * `reldens.startObjectHitObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L381
 */
export type StartObjectHitObjectPayload = {
    "bodyA": unknown;
    "bodyB": unknown;
};

/**
 * `reldens.startObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L441
 */
export type StartObjectHitWallPayload = {
    "objectBody": unknown;
};

/**
 * `reldens.startPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changePoint, collisionsManager, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L330
 */
export type StartPlayerHitChangePointPayload = {
    "changePoint": unknown;
    "collisionsManager": unknown;
    "playerBody": unknown;
};

/**
 * `reldens.startPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L262
 */
export type StartPlayerHitObjectBeginPayload = {
    "otherBody": unknown;
    "playerBody": unknown;
};

/**
 * `reldens.startPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L307
 */
export type StartPlayerHitWallEndPayload = {
    "playerBody": unknown;
    "wallBody": unknown;
};

/**
 * `reldens.teamJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerRejectingName, playerSendingInvite`
 * - Emitted at: lib/teams/server/team-message-actions.js:L61
 */
export type TeamJoinInviteRejectedPayload = {
    "playerRejectingName": unknown;
    "playerSendingInvite": unknown;
};

/**
 * `reldens.teamLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L31
 */
export type TeamLeavePayload = {
    "data": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.teamLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `areLessPlayerThanRequired, currentTeam, isOwnerDisbanding, playerId, playerSchema, room, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L80
 */
export type TeamLeaveBeforeSendUpdatePayload = {
    "areLessPlayerThanRequired": unknown;
    "currentTeam": unknown;
    "isOwnerDisbanding": unknown;
    "playerId": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "sendUpdate": unknown;
    "singleRemoveId": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.templateReloader.templatesChanged`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changedFiles, reloader`
 * - Emitted at: lib/template-reloader.js:L213
 */
export type TemplateReloaderTemplatesChangedPayload = {
    "changedFiles": unknown;
    "reloader": unknown;
};

/**
 * `reldens.tryClanStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-clan-invite.js:L69
 */
export type TryClanStartPayload = {
    "client": unknown;
    "continueStart": unknown;
    "data": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.tryTeamStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-team-start.js:L47
 */
export type TryTeamStartPayload = {
    "client": unknown;
    "continueStart": unknown;
    "data": unknown;
    "playerSchema": unknown;
    "room": unknown;
    "teamsPlugin": unknown;
};

/**
 * `reldens.updateGameSizeAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, newWidth, newHeight)`
 * - Emitted at: lib/game/client/game-engine.js:L100
 */
export type UpdateGameSizeAfterPayload = [self: unknown, newWidth: unknown, newHeight: unknown];

/**
 * `reldens.updateGameSizeBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, newWidth, newHeight)`
 * - Emitted at: lib/game/client/game-engine.js:L88
 */
export type UpdateGameSizeBeforePayload = [self: unknown, newWidth: unknown, newHeight: unknown];
