/* GENERATED - do not edit. Source: scripts/generate-event-api.cjs
 * One documented payload type per Reldens event, for TypeDoc. A key's type is
 * the class or primitive read from the reldens emit site (the source expression
 * follows each field as a comment); unknown means the source did not establish it. */

/**
 * Reldens runtime classes referenced by the payloads below. They are modelled as
 * opaque (unknown): the emit site proves the value IS one of these, but this
 * package does not model their internal shape.
 */
export type AnimationEngine = unknown;
export type AudioManager = unknown;
export type ChatUi = unknown;
export type Client = unknown;
export type CollisionsManager = unknown;
export type ConfigManager = unknown;
export type EnemyObject = unknown;
export type ExpressRequest = unknown;
export type ExpressResponse = unknown;
export type FeaturesManager = unknown;
export type GameManager = unknown;
export type HTMLFormElement = unknown;
export type HTMLInputElement = unknown;
export type HTMLSelectElement = unknown;
export type ObjectsManager = unknown;
export type ObjectsPlugin = unknown;
export type P2world = unknown;
export type PhysicalBody = unknown;
export type Player = unknown;
export type PlayerState = unknown;
export type RoomEvents = unknown;
export type RoomLogin = unknown;
export type RoomRespawn = unknown;
export type RoomScene = unknown;
export type SceneDynamic = unknown;
export type ServerManager = unknown;
export type TeamsPlugin = unknown;
export type UsersModel = unknown;
export type UsersPlugin = unknown;

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
    "driverResource": unknown;  // driverResource
    "idProperty": unknown;  // idProperty
    "ids": unknown;  // ids
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
    "driverResource": unknown;  // driverResource
    "entityData": unknown;  // saveResult
    "entityPath": unknown;  // entityPath
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
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
    "driverResource": unknown;  // driverResource
    "entityPath": unknown;  // entityPath
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
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
    "driverResource": unknown;  // driverResource
    "entityId": unknown;  // id
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
    "driverResource": unknown;  // driverResource
    "entityPath": unknown;  // entityPath
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
};

/**
 * `reldens.adminBeforeFieldRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminContentsRender, adminFilesContents, adminManager, driverResource, loadedEntity, property, propertyKey, renderedEditProperties, req, templateData` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L266
 */
export type AdminBeforeFieldRenderPayload = {
    "adminContentsRender": unknown;  // this.adminContentsRender.bind(this)
    "adminFilesContents": unknown;  // this.adminFilesContents
    "adminManager": unknown;
    "driverResource": unknown;  // driverResource
    "loadedEntity": unknown;  // loadedEntity
    "property": string;  // property
    "propertyKey": string;  // propertyKey
    "renderedEditProperties": unknown;  // renderedEditProperties
    "req": ExpressRequest;  // req
    "templateData": unknown;  // templateData
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
    "driverResource": unknown;  // driverResource
    "entityData": unknown;  // loadedEntity
    "entityId": unknown;  // driverResource.id()
    "loadedEntity": unknown;  // loadedEntity
    "renderedEditProperties": unknown;  // renderedEditProperties
    "req": ExpressRequest;  // req
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
    "allowContinue": unknown;  // allowContinue
    "next": unknown;  // next
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
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
    "driverResource": unknown;  // driverResource
    "listProperties": unknown;  // listProperties
    "req": ExpressRequest;  // req
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
    "navigationContents": unknown;  // navigationContents
    "navigationView": unknown;  // navigationView
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
    "navigationContents": unknown;  // navigationContents
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
    "driverResource": unknown;  // driverResource
    "idProperty": unknown;  // idProperty
    "loadedEntity": unknown;  // loadedEntity
    "renderedViewProperties": unknown;  // renderedViewProperties
    "req": ExpressRequest;  // req
};

/**
 * `reldens.afterContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `processedContent, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L188
 */
export type AfterContentProcessPayload = {
    "processedContent": unknown;  // processedTemplate
    "renderContext": unknown;  // renderContext
    "variables": unknown;  // enhancedData
};

/**
 * `reldens.afterCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L75
 */
export type AfterCreateAdminManagerPayload = {
    "serverManager": ServerManager|false;  // serverManager
};

/**
 * `reldens.afterEnrichPlayerWithLocale`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, roomGame, superInitialGameData, userModel`
 * - Emitted at: lib/snippets/server/initial-game-data-enricher.js:L39
 */
export type AfterEnrichPlayerWithLocalePayload = {
    "client": Client;  // client
    "roomGame": unknown;  // roomGame
    "superInitialGameData": unknown;  // superInitialGameData
    "userModel": unknown;  // userModel
};

/**
 * `reldens.afterGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `itemRewards, playerSchema, targetObject, winningRewards`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L79
 */
export type AfterGiveRewardsPayload = {
    "itemRewards": unknown[];  // itemRewards
    "playerSchema": unknown;  // playerSchema
    "targetObject": unknown;  // targetObject
    "winningRewards": unknown;  // winningRewards
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
    "clan": unknown;  // clanToJoin
    "playerJoining": PlayerState;  // playerSchema
};

/**
 * `reldens.afterPlayerJoinedTeam`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentTeam, playerJoining`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L85
 */
export type AfterPlayerJoinedTeamPayload = {
    "currentTeam": unknown;  // currentTeam
    "playerJoining": PlayerState;  // playerSchema
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
    "clonedObjProps": unknown;  // clonedObjProps
    "multipleObj": unknown;  // multipleObj
    "objClass": Function;  // objClass
    "objInstance": unknown;  // objInstance
    "objectIndex": string;  // objectIndex
    "respawnArea": unknown;  // respawnArea
    "roomRespawn": RoomRespawn;  // this
};

/**
 * `reldens.afterRunAdditionalSetup`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectData, objectInstance, objectsManager`
 * - Emitted at: lib/objects/server/manager.js:L144
 */
export type AfterRunAdditionalSetupPayload = {
    "objectData": unknown;  // objectData
    "objectInstance": unknown;  // objectInstance
    "objectsManager": ObjectsManager;  // this
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
    "currentTeam": unknown;  // currentTeam
    "leavingPlayerName": unknown;  // leavingPlayerName
};

/**
 * `reldens.afterVariablesCreated`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `renderContext, variables`
 * - Emitted at: lib/template-engine.js:L168
 */
export type AfterVariablesCreatedPayload = {
    "renderContext": unknown;  // renderContext
    "variables": unknown;  // systemVariables
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
    "continueDisband": boolean;  // true
    "playerSchema": PlayerState;  // playerSchema
    "singleRemoveId": number|string;  // singleRemoveId
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeClanJoin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoin, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L42
 */
export type BeforeClanJoinPayload = {
    "clanToJoin": unknown;  // clanToJoin
    "continueBeforeJoin": boolean;  // true
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeClanUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoinUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L66
 */
export type BeforeClanUpdatePlayersPayload = {
    "clanToJoin": unknown;  // clanToJoin
    "continueBeforeJoinUpdate": boolean;  // true
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `content, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L175
 */
export type BeforeContentProcessPayload = {
    "content": string;  // template
    "renderContext": unknown;  // renderContext
    "variables": unknown;  // enhancedData
};

/**
 * `reldens.beforeCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L40
 */
export type BeforeCreateAdminManagerPayload = {
    "serverManager": ServerManager|false;  // serverManager
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
    "client": unknown;  // client
    "continueProcess": boolean;  // true
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeEnrichPlayerWithClanUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L71
 */
export type BeforeEnrichPlayerWithClanUpdatePayload = {
    "client": unknown;  // client
    "continueProcess": boolean;  // true
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
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
    "config": ConfigManager;  // config
    "configManager": ConfigManager;  // this
};

/**
 * `reldens.beforeGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueEvent, playerSchema, targetObject`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L52
 */
export type BeforeGiveRewardsPayload = {
    "continueEvent": boolean;  // true
    "playerSchema": unknown;  // playerSchema
    "targetObject": unknown;  // targetObject
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
    "continueProcess": boolean;  // true
    "serverManager": ServerManager;  // this
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
    "formData": unknown;  // formData
    "gameManager": GameManager;  // this
    "isNewUser": boolean;  // isNewUser
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
    "configManager": ConfigManager;  // this
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
    "client": unknown;  // client
    "continueEvent": boolean;  // true
    "playerSchema": unknown;  // playerSchema
    "room": unknown;  // room
    "roomObject": unknown;  // roomObject
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
    "canContinue": boolean;  // true
    "client": Client;  // client
    "messageData": unknown;  // messageData
    "playerSchema": unknown;  // playerSchema
    "room": RoomScene;  // this
};

/**
 * `reldens.beforeSetupAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L73
 */
export type BeforeSetupAdminManagerPayload = {
    "serverManager": ServerManager|false;  // serverManager
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
    "continueBeforeCreate": boolean;  // true
    "teamProps": unknown;  // teamProps
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeTeamDisband`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerSchema, room, singleRemoveId, teamsPlugin` (sometimes: continueDisband, continueLeave)
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L99, lib/teams/server/message-actions/team-leave.js:L107
 */
export type BeforeTeamDisbandPayload = {
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "singleRemoveId": number|string|boolean;  // singleRemoveId
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
    "continueDisband"?: boolean;  // true
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
    "continueBeforeJoin": boolean;  // true
    "currentTeam": unknown;  // currentTeam
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.beforeTeamUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeJoinUpdate, currentTeam, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L79
 */
export type BeforeTeamUpdatePlayersPayload = {
    "continueBeforeJoinUpdate": boolean;  // true
    "currentTeam": unknown;  // currentTeam
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
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
    "continueLeave": boolean;  // true
    "playerSchema": PlayerState;  // playerSchema
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.clanDisconnectBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerId, playerSchema, sendUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L56
 */
export type ClanDisconnectBeforeSendUpdatePayload = {
    "playerId": unknown;  // playerId
    "playerSchema": PlayerState;  // playerSchema
    "sendUpdate": unknown;  // sendUpdate
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.clanJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanInvite, clientSendingInvite, playerRejectingName`
 * - Emitted at: lib/teams/server/clan-message-actions.js:L75
 */
export type ClanJoinInviteRejectedPayload = {
    "clanInvite": unknown;  // clanInvite
    "clientSendingInvite": unknown;  // clientSendingInvite
    "playerRejectingName": unknown;  // playerRejectingName
};

/**
 * `reldens.clanLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, playerSchema, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L29
 */
export type ClanLeavePayload = {
    "message": unknown;  // message
    "playerSchema": PlayerState;  // playerSchema
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.clanLeaveAfterSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueLeave, playerSchema, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L106
 */
export type ClanLeaveAfterSendUpdatePayload = {
    "continueLeave": boolean;  // true
    "playerSchema": PlayerState;  // playerSchema
    "singleRemoveId": number|string;  // singleRemoveId
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.clanLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentClan, disbandClan, playerId, playerSchema, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L81
 */
export type ClanLeaveBeforeSendUpdatePayload = {
    "currentClan": unknown;  // currentClan
    "disbandClan": unknown;  // disbandClan
    "playerId": unknown;  // playerId
    "playerSchema": PlayerState;  // playerSchema
    "sendUpdate": unknown;  // sendUpdate
    "singleRemoveId": number|string;  // singleRemoveId
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
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
    "closeButton": unknown;  // this.chatCloseButton
    "ui": ChatUi;  // this
    "box"?: unknown;
    "dialogBox"?: unknown;  // this.uiChat
    "dialogContainer"?: unknown;  // this.uiChat.getChildByProperty('id', ChatConst.CHAT_UI)
    "minimap"?: unknown;
    "openButton"?: unknown;  // this.chatOpenButton
    "uiScene"?: unknown;  // this.uiScene
};

/**
 * `reldens.cmsManagerInitializeServices`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `manager`
 * - Emitted at: lib/manager.js:L390
 */
export type CmsManagerInitializeServicesPayload = {
    "manager": unknown;  // this
};

/**
 * `reldens.createAnimationAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `animationEngine`
 * - Emitted at: lib/objects/client/animation-engine.js:L223
 */
export type CreateAnimationAfterPayload = {
    "animationEngine": AnimationEngine;  // this
};

/**
 * `reldens.createAppServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, serverManager`
 * - Emitted at: lib/game/server/manager.js:L339
 */
export type CreateAppServerPayload = {
    "continueProcess": boolean;  // true
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.createCurrentPlayer`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `key, player, previousScene, roomEvents`
 * - Emitted at: lib/prediction/client/room-events-override.js:L41, lib/game/client/room-events.js:L232
 */
export type CreateCurrentPlayerPayload = {
    "key": string;  // key
    "player": unknown;  // player
    "previousScene": string|boolean;  // previousScene
    "roomEvents": RoomEvents;  // roomEvents
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
    "currentScene": SceneDynamic;  // currentScene
    "previousScene": string|boolean;  // previousScene
    "roomEvents": RoomEvents;  // this
};

/**
 * `reldens.createGameServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, options`
 * - Emitted at: lib/game/server/manager.js:L378
 */
export type CreateGameServerPayload = {
    "continueProcess": boolean;  // true
    "options": unknown;  // options
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
    "ObjectsPlugin": ObjectsPlugin;  // this
    "gameManager": GameManager;  // gameManager
    "id": unknown;  // animProps.id
    "userInterface": unknown;  // roomEvents.objectsUi[animProps.id]
};

/**
 * `reldens.createdWorldObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyMass, bodyObject, collision, hasState, objectIndex, p2world, pathFinder, posX, posY, roomObject, tileH, tileW`
 * - Emitted at: lib/world/server/p2world.js:L686
 */
export type CreatedWorldObjectPayload = {
    "bodyMass": unknown;  // bodyMass
    "bodyObject": unknown;  // bodyObject
    "collision": unknown;  // collision
    "hasState": unknown;  // hasState
    "objectIndex": string;  // objectIndex
    "p2world": P2world;  // this
    "pathFinder": unknown;  // pathFinder
    "posX": number;  // posX
    "posY": number;  // posY
    "roomObject": unknown;  // roomObject
    "tileH": number;  // tileH
    "tileW": number;  // tileW
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
    "client": Client;  // client
    "player": unknown;  // player
    "room": RoomScene;  // this
    "userModel": UsersModel;  // userModel
};

/**
 * `reldens.dynamicForm.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues, result`
 * - Emitted at: lib/dynamic-form.js:L295
 */
export type DynamicFormAfterSavePayload = {
    "formConfig": unknown;  // formConfig
    "preparedValues": unknown;  // preparedValues
    "result": string;  // result
};

/**
 * `reldens.dynamicForm.afterValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues, validationResult`
 * - Emitted at: lib/dynamic-form.js:L64
 */
export type DynamicFormAfterValidationPayload = {
    "formConfig": unknown;  // formConfig
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "submittedValues": unknown;  // submittedValues
    "validationResult": unknown;  // {isValid: true, formConfig}
};

/**
 * `reldens.dynamicForm.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues`
 * - Emitted at: lib/dynamic-form.js:L281
 */
export type DynamicFormBeforeSavePayload = {
    "formConfig": unknown;  // formConfig
    "preparedValues": unknown;  // preparedValues
};

/**
 * `reldens.dynamicForm.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues`
 * - Emitted at: lib/dynamic-form.js:L42
 */
export type DynamicFormBeforeValidationPayload = {
    "formConfig": unknown;  // formConfig
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "submittedValues": unknown;  // submittedValues
};

/**
 * `reldens.dynamicFormRenderer.afterFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, formFields, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L43
 */
export type DynamicFormRendererAfterFieldsRenderPayload = {
    "attributes": unknown;  // attributes
    "domain": unknown;  // domain
    "enhancedData": unknown;  // enhancedData
    "fieldsToRender": unknown;  // fieldsToRender
    "formConfig": unknown;  // formConfig
    "formFields": unknown;  // formFields
    "req": ExpressRequest;  // req
    "systemVariables": unknown;  // systemVariables
};

/**
 * `reldens.dynamicFormRenderer.beforeFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L33
 */
export type DynamicFormRendererBeforeFieldsRenderPayload = {
    "attributes": unknown;  // attributes
    "domain": unknown;  // domain
    "enhancedData": unknown;  // enhancedData
    "fieldsToRender": unknown;  // fieldsToRender
    "formConfig": unknown;  // formConfig
    "req": ExpressRequest;  // req
    "systemVariables": unknown;  // systemVariables
};

/**
 * `reldens.dynamicFormRequestHandler.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, res, submissionResult`
 * - Emitted at: lib/dynamic-form-request-handler.js:L65
 */
export type DynamicFormRequestHandlerAfterSavePayload = {
    "formConfig": unknown;  // validation.formConfig
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
    "submissionResult": unknown;  // submissionResult
};

/**
 * `reldens.dynamicFormRequestHandler.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, preparedValues, req, res`
 * - Emitted at: lib/dynamic-form-request-handler.js:L51
 */
export type DynamicFormRequestHandlerBeforeSavePayload = {
    "formConfig": unknown;  // validation.formConfig
    "formKey": unknown;  // formKey
    "preparedValues": unknown;  // preparedValues
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
};

/**
 * `reldens.dynamicFormRequestHandler.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formKey, req, res, submittedValues`
 * - Emitted at: lib/dynamic-form-request-handler.js:L37
 */
export type DynamicFormRequestHandlerBeforeValidationPayload = {
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "res": ExpressResponse;  // res
    "submittedValues": unknown;  // submittedValues
};

/**
 * `reldens.endChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L460
 */
export type EndChangedScenePayload = {
    "message": unknown;  // message
    "roomEvents": RoomEvents;  // this
};

/**
 * `reldens.endObjectHitObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB, priorityObject`
 * - Emitted at: lib/world/server/collisions-manager.js:L399
 */
export type EndObjectHitObjectPayload = {
    "bodyA": unknown;  // bodyA
    "bodyB": unknown;  // bodyB
    "priorityObject": unknown;  // priorityObject
};

/**
 * `reldens.endObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L446
 */
export type EndObjectHitWallPayload = {
    "objectBody": unknown;  // objectBody
};

/**
 * `reldens.endPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changeData, changePoint, collisionsManager, playerBody, playerSchema`
 * - Emitted at: lib/world/server/collisions-manager.js:L364
 */
export type EndPlayerHitChangePointPayload = {
    "changeData": unknown;  // changeData
    "changePoint": unknown;  // changePoint
    "collisionsManager": CollisionsManager;  // this
    "playerBody": unknown;  // playerBody
    "playerSchema": unknown;  // playerSchema
};

/**
 * `reldens.endPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L269
 */
export type EndPlayerHitObjectBeginPayload = {
    "otherBody": unknown;  // otherBody
    "playerBody": unknown;  // playerBody
};

/**
 * `reldens.endPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L319
 */
export type EndPlayerHitWallEndPayload = {
    "playerBody": unknown;  // playerBody
    "wallBody": unknown;  // wallBody
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
    "navigationContents": unknown;  // navigationContents
};

/**
 * `reldens.featuresManagerLoadFeaturesAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `featuresCollection, featuresManager`
 * - Emitted at: lib/features/server/manager.js:L89
 */
export type FeaturesManagerLoadFeaturesAfterPayload = {
    "featuresCollection": unknown;  // featuresCollection
    "featuresManager": FeaturesManager;  // this
};

/**
 * `reldens.formsTransformer.afterRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, formConfig, formContent, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L74
 */
export type FormsTransformerAfterRenderPayload = {
    "domain": unknown;  // domain
    "enhancedData": unknown;  // enhancedData
    "formConfig": unknown;  // formConfig
    "formContent": unknown;  // formContent
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "systemVariables": unknown;  // systemVariables
};

/**
 * `reldens.formsTransformer.beforeRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, fieldsToRender, formAttributes, formConfig, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L52
 */
export type FormsTransformerBeforeRenderPayload = {
    "domain": unknown;  // domain
    "enhancedData": unknown;  // enhancedData
    "fieldsToRender": unknown;  // fieldsToRender
    "formAttributes": unknown;  // tag.attributes
    "formConfig": unknown;  // formConfig
    "formKey": unknown;  // formKey
    "req": ExpressRequest;  // req
    "systemVariables": unknown;  // systemVariables
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
    "changePoint": unknown;  // changePoint
    "collisionsManager": CollisionsManager;  // this
    "contactClient": unknown;  // contactClient
    "isGuest": boolean;  // isGuest
    "playerBody": unknown;  // playerBody
    "playerSchema": unknown;  // playerSchema
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
    "adminFilesContents": unknown;  // adminFilesContents
    "authenticationCallback": unknown;  // authenticationCallback
    "manager": unknown;  // this
    "translations": unknown;  // translations
};

/**
 * `reldens.objectBodyChange`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, changes, key`
 * - Emitted at: lib/objects/client/plugin.js:L205
 */
export type ObjectBodyChangePayload = {
    "body": PhysicalBody;  // body
    "changes": unknown;  // {[propertyKey]: newValue}
    "key": string;  // key
};

/**
 * `reldens.objectBodyChanged`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, key`
 * - Emitted at: lib/objects/client/plugin.js:L284, lib/objects/client/plugin.js:L300
 */
export type ObjectBodyChangedPayload = {
    "body": PhysicalBody;  // body
    "key": string;  // key
};

/**
 * `reldens.objectHitObjectEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L412
 */
export type ObjectHitObjectEndPayload = {
    "bodyA": unknown;  // bodyA
    "bodyB": unknown;  // bodyB
};

/**
 * `reldens.objectHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continue, objectBody, wall`
 * - Emitted at: lib/world/server/collisions-manager.js:L424
 */
export type ObjectHitWallBeginPayload = {
    "continue": boolean;  // true
    "objectBody": unknown;  // objectBody
    "wall": unknown;  // wall
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
    "form": HTMLFormElement;  // form
    "gameManager": GameManager;  // gameManager
    "usersPlugin": UsersPlugin;  // this
};

/**
 * `reldens.onPreparePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, select, selectedPlayer, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L265
 */
export type OnPreparePlayerSelectorFormSubmitPayload = {
    "form": HTMLFormElement;  // form
    "gameManager": GameManager;  // gameManager
    "select": HTMLSelectElement;  // select
    "selectedPlayer": unknown;  // selectedPlayer
    "usersPlugin": UsersPlugin;  // this
};

/**
 * `reldens.onPrepareSinglePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, player, selectElement, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L196
 */
export type OnPrepareSinglePlayerSelectorFormSubmitPayload = {
    "form": HTMLFormElement;  // form
    "gameManager": GameManager;  // gameManager
    "player": unknown;  // player
    "selectElement": HTMLInputElement;  // selectElement
    "usersPlugin": UsersPlugin;  // this
};

/**
 * `reldens.onRoomDispose`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `result, roomId, roomName`
 * - Emitted at: lib/rooms/server/login.js:L298
 */
export type OnRoomDisposePayload = {
    "result": string;  // result
    "roomId": unknown;  // this.roomId
    "roomName": unknown;  // this.roomName
};

/**
 * `reldens.onSavePlayerStateBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `playerId, playerSchema, room, updatePatch, updateReady`
 * - Emitted at: lib/rooms/server/scene.js:L719
 */
export type OnSavePlayerStateBeforePayload = {
    "playerId": unknown;  // playerId
    "playerSchema": unknown;  // playerSchema
    "room": RoomScene;  // this
    "updatePatch": unknown;  // updatePatch
    "updateReady": unknown;  // updateReady
};

/**
 * `reldens.onSavePlayerStatsBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `client, objectState, playerSchema, room`
 * - Emitted at: lib/rooms/server/scene.js:L748
 */
export type OnSavePlayerStatsBeforePayload = {
    "client": Client;  // client
    "objectState": unknown;  // objectState
    "playerSchema": unknown;  // playerSchema
    "room": RoomScene;  // this
};

/**
 * `reldens.openUI`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `openButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, uiScene)
 * - Emitted at: lib/chat/client/chat-ui.js:L156, lib/game/client/user-interface.js:L155, lib/game/client/ui-factory.js:L56, lib/game/client/settings-ui.js:L51, lib/game/client/instructions-ui.js:L44, lib/game/client/minimap-ui.js:L77, lib/users/client/player-stats-ui.js:L49
 */
export type OpenUIPayload = {
    "openButton": unknown;  // this.chatOpenButton
    "ui": ChatUi;  // this
    "box"?: unknown;
    "dialogBox"?: unknown;  // this.uiChat
    "dialogContainer"?: unknown;  // this.uiChat.getChildByProperty('id', ChatConst.CHAT_UI)
    "minimap"?: unknown;
    "uiScene"?: unknown;  // this.uiScene
};

/**
 * `reldens.parsingMapLayerAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L245
 */
export type ParsingMapLayerAfterPayload = {
    "layer": unknown;  // layer
    "world": P2world;  // this
};

/**
 * `reldens.parsingMapLayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L243
 */
export type ParsingMapLayerBeforePayload = {
    "layer": unknown;  // layer
    "world": P2world;  // this
};

/**
 * `reldens.parsingMapLayersAfterBodiesQueue`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L254
 */
export type ParsingMapLayersAfterBodiesQueuePayload = {
    "layer": unknown;  // layer
    "world": P2world;  // this
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
    "playerBody": unknown;  // playerBody
    "result": string;  // result
};

/**
 * `reldens.playerHitPlayer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L237
 */
export type PlayerHitPlayerPayload = {
    "bodyA": unknown;  // bodyA
    "bodyB": unknown;  // bodyB
};

/**
 * `reldens.playerHitPlayerEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L251
 */
export type PlayerHitPlayerEndPayload = {
    "bodyA": unknown;  // bodyA
    "bodyB": unknown;  // bodyB
};

/**
 * `reldens.playerHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L296
 */
export type PlayerHitWallBeginPayload = {
    "playerBody": unknown;  // playerBody
    "wallBody": unknown;  // wallBody
};

/**
 * `reldens.playerLeftScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `code, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L589
 */
export type PlayerLeftScenePayload = {
    "code": number;  // code
    "roomEvents": RoomEvents;  // this
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
    "player": unknown;  // currentScene.player
    "previousScene": string|boolean;  // previousScene
    "roomEvents": RoomEvents;  // this
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
    "playerSchema": unknown;  // playerSchema
    "room": RoomScene;  // this
    "stateObject": unknown;  // stateObject
};

/**
 * `reldens.restoreObjectAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `enemyObject, room`
 * - Emitted at: lib/objects/server/object/type/enemy-object.js:L396
 */
export type RestoreObjectAfterPayload = {
    "enemyObject": EnemyObject;  // this
    "room": RoomScene;  // room
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
    "client": Client;  // client
    "loginResult": unknown;  // loginResult
    "options": unknown;  // options
    "request": unknown;  // request
    "result": string;  // result
    "roomLogin": RoomLogin;  // this
};

/**
 * `reldens.roomLoginOnCreate`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `options, roomLogin`
 * - Emitted at: lib/rooms/server/login.js:L58
 */
export type RoomLoginOnCreatePayload = {
    "options": unknown;  // options
    "roomLogin": RoomLogin;  // this
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
    "attackResult": unknown;  // attackResult
    "playerSchema": Player;  // playerSchema
    "roomScene": RoomScene;  // roomScene
    "target": Player;  // target
};

/**
 * `reldens.runGameOver`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `defaultBehavior, message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L510
 */
export type RunGameOverPayload = {
    "defaultBehavior": unknown;  // defaultBehavior
    "message": unknown;  // message
    "roomEvents": RoomEvents;  // this
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
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.serverBeforeListen`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L275
 */
export type ServerBeforeListenPayload = {
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.serverBeforeLoginManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L447
 */
export type ServerBeforeLoginManagerPayload = {
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.serverConfigFeaturesReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L471
 */
export type ServerConfigFeaturesReadyPayload = {
    "configProcessor": ConfigManager;  // this.configManager
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.serverConfigReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L506
 */
export type ServerConfigReadyPayload = {
    "configProcessor": ConfigManager;  // this.configManager
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.serverReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L280
 */
export type ServerReadyPayload = {
    "serverManager": ServerManager;  // this
};

/**
 * `reldens.setAudio`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `audioManager, categoryKey, enabled`
 * - Emitted at: lib/audio/client/manager.js:L80
 */
export type SetAudioPayload = {
    "audioManager": AudioManager;  // this
    "categoryKey": string;  // audioKey
    "enabled": boolean;  // enabled
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
    "enemyObject": EnemyObject;  // this
};

/**
 * `reldens.setupAdminManagers`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L161
 */
export type SetupAdminManagersPayload = {
    "adminManager": unknown;  // this
};

/**
 * `reldens.setupAdminRouter`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L157
 */
export type SetupAdminRouterPayload = {
    "adminManager": unknown;  // this
};

/**
 * `reldens.setupAdminRoutes`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L159
 */
export type SetupAdminRoutesPayload = {
    "adminManager": unknown;  // this
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
    "driverResource": unknown;  // driverResource
    "entityPath": unknown;  // entityPath
    "entityRoute": string;  // entityRoute
};

/**
 * `reldens.startChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L452
 */
export type StartChangedScenePayload = {
    "message": unknown;  // message
    "roomEvents": RoomEvents;  // this
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
    "bodyA": unknown;  // bodyA
    "bodyB": unknown;  // bodyB
};

/**
 * `reldens.startObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L441
 */
export type StartObjectHitWallPayload = {
    "objectBody": unknown;  // objectBody
};

/**
 * `reldens.startPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changePoint, collisionsManager, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L330
 */
export type StartPlayerHitChangePointPayload = {
    "changePoint": unknown;  // changePoint
    "collisionsManager": CollisionsManager;  // this
    "playerBody": unknown;  // playerBody
};

/**
 * `reldens.startPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L262
 */
export type StartPlayerHitObjectBeginPayload = {
    "otherBody": unknown;  // otherBody
    "playerBody": unknown;  // playerBody
};

/**
 * `reldens.startPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L307
 */
export type StartPlayerHitWallEndPayload = {
    "playerBody": unknown;  // playerBody
    "wallBody": unknown;  // wallBody
};

/**
 * `reldens.teamJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerRejectingName, playerSendingInvite`
 * - Emitted at: lib/teams/server/team-message-actions.js:L61
 */
export type TeamJoinInviteRejectedPayload = {
    "playerRejectingName": unknown;  // playerRejectingName
    "playerSendingInvite": unknown;  // playerSendingInvite
};

/**
 * `reldens.teamLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L31
 */
export type TeamLeavePayload = {
    "data": unknown;  // data
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.teamLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `areLessPlayerThanRequired, currentTeam, isOwnerDisbanding, playerId, playerSchema, room, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L80
 */
export type TeamLeaveBeforeSendUpdatePayload = {
    "areLessPlayerThanRequired": unknown;  // areLessPlayerThanRequired
    "currentTeam": unknown;  // currentTeam
    "isOwnerDisbanding": unknown;  // isOwnerDisbanding
    "playerId": unknown;  // playerId
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "sendUpdate": unknown;  // sendUpdate
    "singleRemoveId": number|string|boolean;  // singleRemoveId
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.templateReloader.templatesChanged`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changedFiles, reloader`
 * - Emitted at: lib/template-reloader.js:L213
 */
export type TemplateReloaderTemplatesChangedPayload = {
    "changedFiles": unknown;  // this.getChangedFiles()
    "reloader": unknown;  // this
};

/**
 * `reldens.tryClanStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-clan-invite.js:L69
 */
export type TryClanStartPayload = {
    "client": unknown;  // client
    "continueStart": boolean;  // true
    "data": unknown;  // data
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
};

/**
 * `reldens.tryTeamStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-team-start.js:L47
 */
export type TryTeamStartPayload = {
    "client": unknown;  // client
    "continueStart": boolean;  // true
    "data": unknown;  // data
    "playerSchema": PlayerState;  // playerSchema
    "room": RoomScene;  // room
    "teamsPlugin": TeamsPlugin;  // teamsPlugin
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
