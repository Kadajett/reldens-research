/* GENERATED - do not edit. Source: scripts/generate-event-api.cjs
 * One documented payload type per Reldens event, for TypeDoc, rendered from the
 * SAME zod schema the package validates with. A value the emit site proves is a
 * reldens class instance is named as that class; a value the source does not type
 * is `unknown`. There are no invented shapes. */

/**
 * Reldens runtime classes the payloads below reference. The emit site proves a
 * value IS an instance of one of these; the class is named for documentation but
 * its internal shape is not modelled here, so each is an opaque object type.
 */
export type AdminManager = object;
export type AnimationEngine = object;
export type AudioManager = object;
export type ChatUi = object;
export type Client = object;
export type ClientStartHandler = object;
export type CollisionsManager = object;
export type ConfigManager = object;
export type EnemyObject = object;
export type FeaturesManager = object;
export type GameEngine = object;
export type GameManager = object;
export type HTMLFormElement = object;
export type HTMLInputElement = object;
export type LoginManager = object;
export type Manager = object;
export type Minimap = object;
export type ObjectsManager = object;
export type ObjectsPlugin = object;
export type P2world = object;
export type Pve = object;
export type Player = object;
export type PlayerEngine = object;
export type PlayerState = object;
export type Room = object;
export type RoomEvents = object;
export type RoomGame = object;
export type RoomLogin = object;
export type RoomRespawn = object;
export type RoomScene = object;
export type RoomsManager = object;
export type SceneDynamic = object;
export type ScenePreloader = object;
export type ServerManager = object;
export type TeamsPlugin = object;
export type TemplateReloader = object;
export type UsersModel = object;
export type UsersPlugin = object;

/**
 * `reldens.actionsPrepareEventsListeners`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(actionsPlugin, classPath)`
 * - Emitted at: lib/actions/server/event-listeners.js:L55
 */
export type ActionsPrepareEventsListenersPayload = [actionsPlugin: object, classPath: string];

/**
 * `reldens.activateRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(room, this.gameManager)`
 * - Emitted at: lib/game/client/room-events.js:L85
 */
export type ActivateRoomPayload = [room: Room, gameManager: GameManager];

/**
 * `reldens.activatedRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L435
 */
export type ActivatedRoomPayload = [sceneRoom: Room, gameManager: GameManager];

/**
 * `reldens.activatedRoom_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L436
 */
export type ActivatedRoom_Payload = [sceneRoom: Room, gameManager: GameManager];

/**
 * `reldens.adminAfterEntityDelete`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, idProperty, ids` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L305
 */
export type AdminAfterEntityDeletePayload = { adminManager: AdminManager; driverResource: object; idProperty: string; ids: number[]; };

/**
 * `reldens.adminAfterEntitySave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityData, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L351
 */
export type AdminAfterEntitySavePayload = { adminManager: AdminManager; driverResource: object; entityData: object; entityPath: string; req: object; res: object; };

/**
 * `reldens.adminBeforeEntityEdit`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L128
 */
export type AdminBeforeEntityEditPayload = { adminManager: AdminManager; driverResource: object; entityPath: string; req: object; res: object; };

/**
 * `reldens.adminBeforeEntityLoad`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityId` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L490
 */
export type AdminBeforeEntityLoadPayload = { adminManager: AdminManager; driverResource: object; entityId: string; };

/**
 * `reldens.adminBeforeEntitySave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L162, lib/admin-manager/router.js:L192
 */
export type AdminBeforeEntitySavePayload = { adminManager: AdminManager; driverResource: object; entityPath: string; req: object; res: object; };

/**
 * `reldens.adminBeforeFieldRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminContentsRender, adminFilesContents, adminManager, driverResource, loadedEntity, property, propertyKey, renderedEditProperties, req, templateData` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L266
 */
export type AdminBeforeFieldRenderPayload = { adminContentsRender: object; adminFilesContents: object; adminManager: AdminManager; driverResource: object; loadedEntity: object; property: object; propertyKey: string; renderedEditProperties: object; req: object; templateData: object; };

/**
 * `reldens.adminEditPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityData, entityId, loadedEntity, renderedEditProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L229
 */
export type AdminEditPropertiesPopulationPayload = { adminManager: AdminManager; driverResource: object; entityData: object; entityId: string; loadedEntity: object; renderedEditProperties: object; req: object; };

/**
 * `reldens.adminIsAuthenticated`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, allowContinue, next, req, res` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L207
 */
export type AdminIsAuthenticatedPayload = { adminManager: AdminManager; allowContinue: { result: boolean; callback: null; }; next: object; req: object; res: object; };

/**
 * `reldens.adminListPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, listProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L112
 */
export type AdminListPropertiesPopulationPayload = { adminManager: AdminManager; driverResource: object; listProperties: object; req: object; };

/**
 * `reldens.adminSideBarBeforeRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents, navigationView` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L106
 */
export type AdminSideBarBeforeRenderPayload = { adminManager: AdminManager; navigationContents: object; navigationView: string; };

/**
 * `reldens.adminSideBarBeforeSubItems`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L92
 */
export type AdminSideBarBeforeSubItemsPayload = { adminManager: AdminManager; navigationContents: object; };

/**
 * `reldens.adminViewPropertiesPopulation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, idProperty, loadedEntity, renderedViewProperties, req` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router-contents.js:L202
 */
export type AdminViewPropertiesPopulationPayload = { adminManager: AdminManager; driverResource: object; idProperty: string; loadedEntity: object; renderedViewProperties: object; req: object; };

/**
 * `reldens.afterContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `processedContent, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L188
 */
export type AfterContentProcessPayload = { processedContent: string; renderContext: object; variables: object; };

/**
 * `reldens.afterCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L75
 */
export type AfterCreateAdminManagerPayload = { serverManager: ServerManager; };

/**
 * `reldens.afterEnrichPlayerWithLocale`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, roomGame, superInitialGameData, userModel`
 * - Emitted at: lib/snippets/server/initial-game-data-enricher.js:L39
 */
export type AfterEnrichPlayerWithLocalePayload = { client: Client; roomGame: RoomGame; superInitialGameData: object; userModel: UsersModel; };

/**
 * `reldens.afterGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `itemRewards, playerSchema, targetObject, winningRewards`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L79
 */
export type AfterGiveRewardsPayload = { itemRewards: object[]; playerSchema: object; targetObject: object; winningRewards: object; };

/**
 * `reldens.afterInitEngineAndStartGame`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, joinedFirstRoom)`
 * - Emitted at: lib/game/client/game-manager.js:L361
 */
export type AfterInitEngineAndStartGamePayload = [initialGameData: object, joinedFirstRoom: Room];

/**
 * `reldens.afterPlayerJoinedClan`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clan, playerJoining`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L72
 */
export type AfterPlayerJoinedClanPayload = { clan: object; playerJoining: PlayerState; };

/**
 * `reldens.afterPlayerJoinedTeam`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentTeam, playerJoining`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L85
 */
export type AfterPlayerJoinedTeamPayload = { currentTeam: object; playerJoining: PlayerState; };

/**
 * `reldens.afterProcessPlayerDropsBeforeBroadcast`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(dropsMappedData, eventResult)`
 * - Emitted at: lib/inventory/server/subscribers/player-death-subscriber.js:L103
 */
export type AfterProcessPlayerDropsBeforeBroadcastPayload = [dropsMappedData: object, eventResult: boolean];

/**
 * `reldens.afterProcessRewardsDropsBeforeBroadcast`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(dropsMappedData, eventResult)`
 * - Emitted at: lib/rewards/server/rewards-drops-processor.js:L49
 */
export type AfterProcessRewardsDropsBeforeBroadcastPayload = [dropsMappedData: object, eventResult: boolean];

/**
 * `reldens.afterRunAdditionalRespawnSetup`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clonedObjProps, multipleObj, objClass, objInstance, objectIndex, respawnArea, roomRespawn`
 * - Emitted at: lib/respawn/server/room-respawn.js:L137
 */
export type AfterRunAdditionalRespawnSetupPayload = { clonedObjProps: object; multipleObj: object; objClass: object; objInstance: object; objectIndex: number; respawnArea: object; roomRespawn: RoomRespawn; };

/**
 * `reldens.afterRunAdditionalSetup`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectData, objectInstance, objectsManager`
 * - Emitted at: lib/objects/server/manager.js:L144
 */
export type AfterRunAdditionalSetupPayload = { objectData: object; objectInstance: object; objectsManager: ObjectsManager; };

/**
 * `reldens.afterSceneDynamicCreate`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L104
 */
export type AfterSceneDynamicCreatePayload = [self: SceneDynamic];

/**
 * `reldens.afterTeamLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentTeam, leavingPlayerName`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L95
 */
export type AfterTeamLeavePayload = { currentTeam: object; leavingPlayerName: string; };

/**
 * `reldens.afterVariablesCreated`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `renderContext, variables`
 * - Emitted at: lib/template-engine.js:L168
 */
export type AfterVariablesCreatedPayload = { renderContext: object; variables: object; };

/**
 * `reldens.allAudiosLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, audios, currentScene, audio)`
 * - Emitted at: lib/audio/client/manager.js:L365
 */
export type AllAudiosLoadedPayload = [self: AudioManager, audios: object, currentScene: SceneDynamic, audio: object];

/**
 * `reldens.audioLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, audios, currentScene, audio)`
 * - Emitted at: lib/audio/client/manager.js:L363
 */
export type AudioLoadedPayload = [self: AudioManager, audios: object, currentScene: SceneDynamic, audio: object];

/**
 * `reldens.audioManagerDeleteAudios`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L449
 */
export type AudioManagerDeleteAudiosPayload = [self: AudioManager, room: Room, gameManager: GameManager, message: object];

/**
 * `reldens.audioManagerUpdateAudiosLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L432
 */
export type AudioManagerUpdateAudiosLoadedPayload = [self: AudioManager, room: Room, gameManager: GameManager, message: object];

/**
 * `reldens.audioManagerUpdateCategoriesLoaded`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, room, gameManager, message)`
 * - Emitted at: lib/audio/client/manager.js:L426
 */
export type AudioManagerUpdateCategoriesLoadedPayload = [self: AudioManager, room: Room, gameManager: GameManager, message: object];

/**
 * `reldens.battleEnded`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: a `BattleEndedEvent` instance with properties `actionData, playerSchema, pve, room`
 * - Emitted at: lib/actions/server/pve.js:L332
 */
export type BattleEndedPayload = { actionData: object; playerSchema: PlayerState; pve: Pve; room: RoomScene; };

/**
 * `reldens.beforeClanDisband`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueDisband, playerSchema, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L97
 */
export type BeforeClanDisbandPayload = { continueDisband: boolean; playerSchema: PlayerState; singleRemoveId: number; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeClanJoin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoin, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L42
 */
export type BeforeClanJoinPayload = { clanToJoin: object; continueBeforeJoin: boolean; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeClanUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanToJoin, continueBeforeJoinUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-join.js:L66
 */
export type BeforeClanUpdatePlayersPayload = { clanToJoin: object; continueBeforeJoinUpdate: boolean; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeContentProcess`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `content, renderContext, variables`
 * - Emitted at: lib/template-engine.js:L175
 */
export type BeforeContentProcessPayload = { content: string; renderContext: object; variables: object; };

/**
 * `reldens.beforeCreateAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L40
 */
export type BeforeCreateAdminManagerPayload = { serverManager: ServerManager; };

/**
 * `reldens.beforeCreateEngine`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, this)`
 * - Emitted at: lib/game/client/game-manager.js:L299
 */
export type BeforeCreateEnginePayload = [initialGameData: object, gameManager: GameManager];

/**
 * `reldens.beforeCreateUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L217
 */
export type BeforeCreateUiScenePayload = [self: ScenePreloader];

/**
 * `reldens.beforeEnrichPlayerWithClan`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L49
 */
export type BeforeEnrichPlayerWithClanPayload = { client: object; continueProcess: boolean; playerSchema: PlayerState; room: RoomScene; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeEnrichPlayerWithClanUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L71
 */
export type BeforeEnrichPlayerWithClanUpdatePayload = { client: object; continueProcess: boolean; playerSchema: PlayerState; room: RoomScene; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeEnrichUserWithLocale`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(startEvent)`
 * - Emitted at: lib/snippets/server/initial-game-data-enricher.js:L26
 */
export type BeforeEnrichUserWithLocalePayload = [startEvent: object];

/**
 * `reldens.beforeGetParsedValue`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `config, configManager`
 * - Emitted at: lib/config/server/manager.js:L102
 */
export type BeforeGetParsedValuePayload = { config: object; configManager: ConfigManager; };

/**
 * `reldens.beforeGiveRewards`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueEvent, playerSchema, targetObject`
 * - Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L52
 */
export type BeforeGiveRewardsPayload = { continueEvent: boolean; playerSchema: object; targetObject: object; };

/**
 * `reldens.beforeInitEngineAndStartGame`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.initialGameData, this)`
 * - Emitted at: lib/game/client/game-manager.js:L291
 */
export type BeforeInitEngineAndStartGamePayload = [initialGameData: object, gameManager: GameManager];

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
export type BeforeInitializeManagersPayload = { continueProcess: boolean; serverManager: ServerManager; };

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
export type BeforeJoinGamePayload = { formData: object; gameManager: GameManager; isNewUser: boolean; };

/**
 * `reldens.beforeJoinGameRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.gameRoom)`
 * - Emitted at: lib/game/client/game-manager.js:L193
 */
export type BeforeJoinGameRoomPayload = [gameRoom: Room];

/**
 * `reldens.beforeLoadConfigurations`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configManager`
 * - Emitted at: lib/config/server/manager.js:L57
 */
export type BeforeLoadConfigurationsPayload = { configManager: ConfigManager; };

/**
 * `reldens.beforePreload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, eventUiScene)`
 * - Emitted at: lib/game/client/scene-preloader.js:L81
 */
export type BeforePreloadPayload = [scenePreloader: ScenePreloader, eventUiScene: object];

/**
 * `reldens.beforePreloadUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L132
 */
export type BeforePreloadUiScenePayload = [self: ScenePreloader];

/**
 * `reldens.beforeReconnectGameClient`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L422
 */
export type BeforeReconnectGameClientPayload = [message: object, self: RoomEvents];

/**
 * `reldens.beforeRemovingDroppedReward`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueEvent, playerSchema, room, roomObject`
 * - Emitted at: lib/rewards/server/reward-message-actions.js:L61
 */
export type BeforeRemovingDroppedRewardPayload = { client: object; continueEvent: boolean; playerSchema: object; room: object; roomObject: object; };

/**
 * `reldens.beforeSceneDynamicCreate`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L93
 */
export type BeforeSceneDynamicCreatePayload = [self: SceneDynamic];

/**
 * `reldens.beforeSceneExecuteMessages`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `canContinue, client, messageData, playerSchema, room`
 * - Emitted at: lib/rooms/server/scene.js:L449
 */
export type BeforeSceneExecuteMessagesPayload = { canContinue: boolean; client: Client; messageData: object; playerSchema: PlayerState; room: RoomScene; };

/**
 * `reldens.beforeSetupAdminManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/admin/server/subscribers/create-admin-subscriber.js:L73
 */
export type BeforeSetupAdminManagerPayload = { serverManager: ServerManager; };

/**
 * `reldens.beforeSuperInitialGameData`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(superInitialGameData, this, client, userModel)`
 * - Emitted at: lib/rooms/server/game.js:L69
 */
export type BeforeSuperInitialGameDataPayload = [superInitialGameData: object, self: RoomGame, client: Client, userModel: UsersModel];

/**
 * `reldens.beforeTeamCreate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeCreate, teamProps, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L63
 */
export type BeforeTeamCreatePayload = { continueBeforeCreate: boolean; teamProps: object; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeTeamDisband`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerSchema, room, singleRemoveId, teamsPlugin` (sometimes: continueDisband, continueLeave)
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L99, lib/teams/server/message-actions/team-leave.js:L107
 */
export type BeforeTeamDisbandPayload = { playerSchema: PlayerState; room: RoomScene; singleRemoveId: number; teamsPlugin: TeamsPlugin; continueDisband?: boolean; continueLeave?: boolean; };

/**
 * `reldens.beforeTeamJoin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeJoin, currentTeam, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L70
 */
export type BeforeTeamJoinPayload = { continueBeforeJoin: boolean; currentTeam: object; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.beforeTeamUpdatePlayers`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueBeforeJoinUpdate, currentTeam, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-join.js:L79
 */
export type BeforeTeamUpdatePlayersPayload = { continueBeforeJoinUpdate: boolean; currentTeam: object; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.buildAdminContentsAfter`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L45
 */
export type BuildAdminContentsAfterPayload = { adminManager: AdminManager; };

/**
 * `reldens.changeSceneDestroyPrevious`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-dynamic.js:L559
 */
export type ChangeSceneDestroyPreviousPayload = [self: SceneDynamic];

/**
 * `reldens.chatMessageObjectCreated`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, message)`
 * - Emitted at: lib/chat/client/chat-ui.js:L613
 */
export type ChatMessageObjectCreatedPayload = [self: ChatUi, message: object];

/**
 * `reldens.clanDisconnectAfterSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueLeave, playerSchema, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L72
 */
export type ClanDisconnectAfterSendUpdatePayload = { continueLeave: boolean; playerSchema: PlayerState; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.clanDisconnectBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerId, playerSchema, sendUpdate, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L56
 */
export type ClanDisconnectBeforeSendUpdatePayload = { playerId: number; playerSchema: PlayerState; sendUpdate: object; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.clanJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `clanInvite, clientSendingInvite, playerRejectingName`
 * - Emitted at: lib/teams/server/clan-message-actions.js:L75
 */
export type ClanJoinInviteRejectedPayload = { clanInvite: object; clientSendingInvite: Client; playerRejectingName: string; };

/**
 * `reldens.clanLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, playerSchema, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L29
 */
export type ClanLeavePayload = { message: object; playerSchema: PlayerState; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.clanLeaveAfterSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueLeave, playerSchema, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L106
 */
export type ClanLeaveAfterSendUpdatePayload = { continueLeave: boolean; playerSchema: PlayerState; singleRemoveId: number; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.clanLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentClan, disbandClan, playerId, playerSchema, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/clan-leave.js:L81
 */
export type ClanLeaveBeforeSendUpdatePayload = { currentClan: object; disbandClan: boolean; playerId: number; playerSchema: PlayerState; sendUpdate: object; singleRemoveId: number; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.clientStartAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/handlers/client-start-handler.js:L52
 */
export type ClientStartAfterPayload = [self: ClientStartHandler];

/**
 * `reldens.clientStartBefore`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L125
 */
export type ClientStartBeforePayload = [self: GameManager];

/**
 * `reldens.closeUI`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `closeButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, openButton, uiScene)
 * - Emitted at: lib/chat/client/chat-ui.js:L170, lib/game/client/user-interface.js:L193, lib/game/client/ui-factory.js:L75, lib/game/client/settings-ui.js:L62, lib/game/client/instructions-ui.js:L53, lib/game/client/minimap-ui.js:L98, lib/users/client/player-stats-ui.js:L59
 */
export type CloseUIPayload = { closeButton: boolean; ui: ChatUi; box?: object; dialogBox?: object; dialogContainer?: object; minimap?: Minimap; openButton?: boolean; uiScene?: object; };

/**
 * `reldens.cmsManagerInitializeServices`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `manager`
 * - Emitted at: lib/manager.js:L390
 */
export type CmsManagerInitializeServicesPayload = { manager: Manager; };

/**
 * `reldens.createAnimationAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `animationEngine`
 * - Emitted at: lib/objects/client/animation-engine.js:L223
 */
export type CreateAnimationAfterPayload = { animationEngine: AnimationEngine; };

/**
 * `reldens.createAppServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, serverManager`
 * - Emitted at: lib/game/server/manager.js:L339
 */
export type CreateAppServerPayload = { continueProcess: boolean; serverManager: ServerManager; };

/**
 * `reldens.createCurrentPlayer`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `key, player, previousScene, roomEvents`
 * - Emitted at: lib/prediction/client/room-events-override.js:L41, lib/game/client/room-events.js:L232
 */
export type CreateCurrentPlayerPayload = { key: string; player: PlayerState; previousScene: string | boolean; roomEvents: RoomEvents; };

/**
 * `reldens.createDynamicAnimation_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, animProps)`
 * - Emitted at: lib/objects/client/plugin.js:L539
 */
export type CreateDynamicAnimation_Payload = [objectsPlugin: ObjectsPlugin, animProps: object];

/**
 * `reldens.createDynamicAnimationsBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, sceneDynamic)`
 * - Emitted at: lib/objects/client/plugin.js:L517
 */
export type CreateDynamicAnimationsBeforePayload = [objectsPlugin: ObjectsPlugin, sceneDynamic: SceneDynamic];

/**
 * `reldens.createEngineScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, room, previousScene, this)`
 * - Emitted at: lib/game/client/room-events.js:L861
 */
export type CreateEngineScenePayload = [player: PlayerState, room: Room, previousScene: string | boolean, roomEvents: RoomEvents];

/**
 * `reldens.createEngineSceneDone`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `currentScene, previousScene, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L877
 */
export type CreateEngineSceneDonePayload = { currentScene: SceneDynamic; previousScene: string | boolean; roomEvents: RoomEvents; };

/**
 * `reldens.createGameServer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continueProcess, options`
 * - Emitted at: lib/game/server/manager.js:L378
 */
export type CreateGameServerPayload = { continueProcess: boolean; options: object; };

/**
 * `reldens.createNewPlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(loginData, playerData, this)`
 * - Emitted at: lib/game/server/login-manager.js:L553
 */
export type CreateNewPlayerBeforePayload = [loginData: object, playerData: object, self: LoginManager];

/**
 * `reldens.createNewPlayerCriticalError`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, error, result)`
 * - Emitted at: lib/game/server/login-manager.js:L572
 */
export type CreateNewPlayerCriticalErrorPayload = [self: LoginManager, loginData: object, error: object, result: { error: boolean; message: string; }];

/**
 * `reldens.createNewUserAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(newUser, this, result)`
 * - Emitted at: lib/game/server/login-manager.js:L517
 */
export type CreateNewUserAfterPayload = [newUser: UsersModel, self: LoginManager, result: object];

/**
 * `reldens.createNewUserError`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L521
 */
export type CreateNewUserErrorPayload = [self: LoginManager, userData: object, result: object];

/**
 * `reldens.createPlayerAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, this)`
 * - Emitted at: lib/rooms/server/scene.js:L250
 */
export type CreatePlayerAfterPayload = [client: Client, userModel: UsersModel, currentPlayer: PlayerState, self: RoomScene];

/**
 * `reldens.createPlayerAnimations`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, avatarKey)`
 * - Emitted at: lib/game/client/scene-preloader.js:L446
 */
export type CreatePlayerAnimationsPayload = [scenePreloader: ScenePreloader, avatarKey: string];

/**
 * `reldens.createPlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, this)`
 * - Emitted at: lib/rooms/server/scene.js:L225
 */
export type CreatePlayerBeforePayload = [client: Client, userModel: UsersModel, self: RoomScene];

/**
 * `reldens.createPlayerStatsAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, roomScene)`
 * - Emitted at: lib/users/server/plugin.js:L308
 */
export type CreatePlayerStatsAfterPayload = [client: Client, userModel: UsersModel, currentPlayer: PlayerState, roomScene: RoomScene];

/**
 * `reldens.createPreload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, eventUiScene)`
 * - Emitted at: lib/game/client/scene-preloader.js:L206
 */
export type CreatePreloadPayload = [scenePreloader: ScenePreloader, eventUiScene: object];

/**
 * `reldens.createUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L227
 */
export type CreateUiScenePayload = [self: ScenePreloader];

/**
 * `reldens.createWorld`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(roomData, objectsManager, this)`
 * - Emitted at: lib/rooms/server/scene.js:L503
 */
export type CreateWorldPayload = [roomData: object, objectsManager: ObjectsManager, self: RoomScene];

/**
 * `reldens.createdMinimap`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/minimap.js:L58
 */
export type CreatedMinimapPayload = [self: Minimap];

/**
 * `reldens.createdNewPlayer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, loginData, this, result)`
 * - Emitted at: lib/game/server/login-manager.js:L567
 */
export type CreatedNewPlayerPayload = [player: object, loginData: object, self: LoginManager, result: { error: boolean; }];

/**
 * `reldens.createdPlayerSchema`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, this)`
 * - Emitted at: lib/rooms/server/scene.js:L239
 */
export type CreatedPlayerSchemaPayload = [client: Client, userModel: UsersModel, currentPlayer: PlayerState, self: RoomScene];

/**
 * `reldens.createdPreloaderInstance`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, this.scenePreloader)`
 * - Emitted at: lib/game/client/room-events.js:L820
 */
export type CreatedPreloaderInstancePayload = [self: RoomEvents, scenePreloader: ScenePreloader];

/**
 * `reldens.createdPreloaderRecurring`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, this.scenePreloader)`
 * - Emitted at: lib/game/client/room-events.js:L796
 */
export type CreatedPreloaderRecurringPayload = [self: RoomEvents, scenePreloader: ScenePreloader];

/**
 * `reldens.createdRoomsEventsInstance`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(joinedFirstRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L358
 */
export type CreatedRoomsEventsInstancePayload = [joinedFirstRoom: Room, gameManager: GameManager];

/**
 * `reldens.createdUserInterface`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `ObjectsPlugin, gameManager, id, userInterface`
 * - Emitted at: lib/objects/client/plugin.js:L498
 */
export type CreatedUserInterfacePayload = { ObjectsPlugin: ObjectsPlugin; gameManager: GameManager; id: string; userInterface: object; };

/**
 * `reldens.createdWorldObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyMass, bodyObject, collision, hasState, objectIndex, p2world, pathFinder, posX, posY, roomObject, tileH, tileW`
 * - Emitted at: lib/world/server/p2world.js:L686
 */
export type CreatedWorldObjectPayload = { bodyMass: number; bodyObject: object; collision: boolean; hasState: boolean; objectIndex: number; p2world: P2world; pathFinder: object; posX: number; posY: number; roomObject: object; tileH: number; tileW: number; };

/**
 * `reldens.defineRoomsInGameServerDone`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/rooms/server/manager.js:L117
 */
export type DefineRoomsInGameServerDonePayload = [self: RoomsManager];

/**
 * `reldens.disconnectLoggedBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, player, room, userModel`
 * - Emitted at: lib/rooms/server/scene.js:L175
 */
export type DisconnectLoggedBeforePayload = { client: Client; player: object; room: RoomScene; userModel: UsersModel; };

/**
 * `reldens.dynamicForm.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues, result`
 * - Emitted at: lib/dynamic-form.js:L295
 */
export type DynamicFormAfterSavePayload = { formConfig: object; preparedValues: object; result: object; };

/**
 * `reldens.dynamicForm.afterValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues, validationResult`
 * - Emitted at: lib/dynamic-form.js:L64
 */
export type DynamicFormAfterValidationPayload = { formConfig: object; formKey: string; req: object; submittedValues: object; validationResult: { isValid: boolean; }; };

/**
 * `reldens.dynamicForm.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, preparedValues`
 * - Emitted at: lib/dynamic-form.js:L281
 */
export type DynamicFormBeforeSavePayload = { formConfig: object; preparedValues: object; };

/**
 * `reldens.dynamicForm.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, submittedValues`
 * - Emitted at: lib/dynamic-form.js:L42
 */
export type DynamicFormBeforeValidationPayload = { formConfig: object; formKey: string; req: object; submittedValues: object; };

/**
 * `reldens.dynamicFormRenderer.afterFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, formFields, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L43
 */
export type DynamicFormRendererAfterFieldsRenderPayload = { attributes: object; domain: string; enhancedData: object; fieldsToRender: object; formConfig: object; formFields: object; req: object; systemVariables: object; };

/**
 * `reldens.dynamicFormRenderer.beforeFieldsRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attributes, domain, enhancedData, fieldsToRender, formConfig, req, systemVariables`
 * - Emitted at: lib/dynamic-form-renderer.js:L33
 */
export type DynamicFormRendererBeforeFieldsRenderPayload = { attributes: object; domain: string; enhancedData: object; fieldsToRender: object; formConfig: object; req: object; systemVariables: object; };

/**
 * `reldens.dynamicFormRequestHandler.afterSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, req, res, submissionResult`
 * - Emitted at: lib/dynamic-form-request-handler.js:L65
 */
export type DynamicFormRequestHandlerAfterSavePayload = { formConfig: object; formKey: string; req: object; res: object; submissionResult: object; };

/**
 * `reldens.dynamicFormRequestHandler.beforeSave`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formConfig, formKey, preparedValues, req, res`
 * - Emitted at: lib/dynamic-form-request-handler.js:L51
 */
export type DynamicFormRequestHandlerBeforeSavePayload = { formConfig: object; formKey: string; preparedValues: object; req: object; res: object; };

/**
 * `reldens.dynamicFormRequestHandler.beforeValidation`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `formKey, req, res, submittedValues`
 * - Emitted at: lib/dynamic-form-request-handler.js:L37
 */
export type DynamicFormRequestHandlerBeforeValidationPayload = { formKey: string; req: object; res: object; submittedValues: object; };

/**
 * `reldens.endChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L460
 */
export type EndChangedScenePayload = { message: object; roomEvents: RoomEvents; };

/**
 * `reldens.endObjectHitObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB, priorityObject`
 * - Emitted at: lib/world/server/collisions-manager.js:L399
 */
export type EndObjectHitObjectPayload = { bodyA: object; bodyB: object; priorityObject: object; };

/**
 * `reldens.endObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L446
 */
export type EndObjectHitWallPayload = { objectBody: object; };

/**
 * `reldens.endPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changeData, changePoint, collisionsManager, playerBody, playerSchema`
 * - Emitted at: lib/world/server/collisions-manager.js:L364
 */
export type EndPlayerHitChangePointPayload = { changeData: object; changePoint: object; collisionsManager: CollisionsManager; playerBody: object; playerSchema: PlayerState; };

/**
 * `reldens.endPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L269
 */
export type EndPlayerHitObjectBeginPayload = { otherBody: object; playerBody: object; };

/**
 * `reldens.endPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L319
 */
export type EndPlayerHitWallEndPayload = { playerBody: object; wallBody: object; };

/**
 * `reldens.eventBuildSideBarBefore`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, navigationContents` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/contents-builder.js:L69
 */
export type EventBuildSideBarBeforePayload = { adminManager: AdminManager; navigationContents: object; };

/**
 * `reldens.featuresManagerLoadFeaturesAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `featuresCollection, featuresManager`
 * - Emitted at: lib/features/server/manager.js:L89
 */
export type FeaturesManagerLoadFeaturesAfterPayload = { featuresCollection: object; featuresManager: FeaturesManager; };

/**
 * `reldens.formsTransformer.afterRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, formConfig, formContent, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L74
 */
export type FormsTransformerAfterRenderPayload = { domain: string; enhancedData: object; formConfig: object; formContent: string; formKey: string; req: object; systemVariables: object; };

/**
 * `reldens.formsTransformer.beforeRender`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `domain, enhancedData, fieldsToRender, formAttributes, formConfig, formKey, req, systemVariables`
 * - Emitted at: lib/template-engine/forms-transformer.js:L52
 */
export type FormsTransformerBeforeRenderPayload = { domain: string; enhancedData: object; fieldsToRender: object; formAttributes: object; formConfig: object; formKey: string; req: object; systemVariables: object; };

/**
 * `reldens.gameEngineClearTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, clearedTargetData)`
 * - Emitted at: lib/game/client/game-engine.js:L253
 */
export type GameEngineClearTargetPayload = [gameEngine: GameEngine, clearedTargetData: object];

/**
 * `reldens.gameEngineShowTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, target, previousTarget, targetName)`
 * - Emitted at: lib/game/client/game-engine.js:L180
 */
export type GameEngineShowTargetPayload = [gameEngine: GameEngine, target: object, previousTarget: object, targetName: string];

/**
 * `reldens.gameEngineTabTarget`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, closerTarget, previousTarget)`
 * - Emitted at: lib/game/client/game-engine.js:L300
 */
export type GameEngineTabTargetPayload = [gameEngine: GameEngine, closerTarget: object, previousTarget: object];

/**
 * `reldens.gameOver`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L514
 */
export type GameOverPayload = [message: object, self: RoomEvents];

/**
 * `reldens.gameOverReload`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, defaultReload)`
 * - Emitted at: lib/game/client/room-events.js:L306
 */
export type GameOverReloadPayload = [self: RoomEvents, defaultReload: { confirmed: boolean; }];

/**
 * `reldens.gameRoomError`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L168
 */
export type GameRoomErrorPayload = [self: GameManager];

/**
 * `reldens.guestInvalidChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changePoint, collisionsManager, contactClient, isGuest, playerBody, playerSchema`
 * - Emitted at: lib/world/server/collisions-manager.js:L344
 */
export type GuestInvalidChangePointPayload = { changePoint: object; collisionsManager: CollisionsManager; contactClient: Client; isGuest: boolean; playerBody: object; playerSchema: PlayerState; };

/**
 * `reldens.guestLoginInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L295
 */
export type GuestLoginInvalidParamsPayload = [self: LoginManager, user: UsersModel, userData: object, result: { error: string; }];

/**
 * `reldens.initUiAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L350
 */
export type InitUiAfterPayload = [message: object, self: RoomEvents];

/**
 * `reldens.initUiBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L348
 */
export type InitUiBeforePayload = [message: object, self: RoomEvents];

/**
 * `reldens.invalidData`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L289
 */
export type InvalidDataPayload = [self: LoginManager, userData: object, result: { error: string; }];

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
export type JoinRoomEndPayload = { client: Client; isGuest: boolean; loggedPlayer: object; options: object; roomScene: RoomScene; userModel: UsersModel; };

/**
 * `reldens.joinRoomInvalid`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, client, options, userModel, isGuest)`
 * - Emitted at: lib/rooms/server/scene.js:L149
 */
export type JoinRoomInvalidPayload = [self: RoomScene, client: Client, options: object, userModel: UsersModel, isGuest: boolean];

/**
 * `reldens.joinRoomStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, client, options, userModel)`
 * - Emitted at: lib/rooms/server/scene.js:L136
 */
export type JoinRoomStartPayload = [self: RoomScene, client: Client, options: object, userModel: UsersModel];

/**
 * `reldens.joinedRoom`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L446
 */
export type JoinedRoomPayload = [sceneRoom: Room, gameManager: GameManager];

/**
 * `reldens.joinedRoom_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(sceneRoom, this)`
 * - Emitted at: lib/game/client/game-manager.js:L447
 */
export type JoinedRoom_Payload = [sceneRoom: Room, gameManager: GameManager];

/**
 * `reldens.loadFeature_`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.featuresList[featureCode], this)`
 * - Emitted at: lib/features/client/manager.js:L60
 */
export type LoadFeature_Payload = [featuresList_featureCode: object, self: FeaturesManager];

/**
 * `reldens.loadFeatures`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, featuresCodeList)`
 * - Emitted at: lib/features/client/manager.js:L46
 */
export type LoadFeaturesPayload = [self: FeaturesManager, featuresCodeList: object];

/**
 * `reldens.loginError`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L395
 */
export type LoginErrorPayload = [self: LoginManager, user: UsersModel, userData: object, result: object];

/**
 * `reldens.loginInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L307
 */
export type LoginInvalidParamsPayload = [self: LoginManager, user: UsersModel, userData: object, result: { error: string; }];

/**
 * `reldens.loginInvalidPassword`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L380
 */
export type LoginInvalidPasswordPayload = [self: LoginManager, user: UsersModel, userData: object, result: { error: string; }];

/**
 * `reldens.loginInvalidRole`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L374
 */
export type LoginInvalidRolePayload = [self: LoginManager, user: UsersModel, userData: object, result: { error: string; }];

/**
 * `reldens.loginSuccess`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L391
 */
export type LoginSuccessPayload = [self: LoginManager, user: UsersModel, userData: object, result: object];

/**
 * `reldens.manager.initializeAdminManager`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminFilesContents, authenticationCallback, manager, translations`
 * - Emitted at: lib/manager.js:L563
 */
export type ManagerInitializeAdminManagerPayload = { adminFilesContents: object; authenticationCallback: object; manager: Manager; translations: object; };

/**
 * `reldens.objectBodyChange`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, changes, key`
 * - Emitted at: lib/objects/client/plugin.js:L205
 */
export type ObjectBodyChangePayload = { body: object; changes: object; key: string; };

/**
 * `reldens.objectBodyChanged`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `body, key`
 * - Emitted at: lib/objects/client/plugin.js:L284, lib/objects/client/plugin.js:L300
 */
export type ObjectBodyChangedPayload = { body: object; key: string; };

/**
 * `reldens.objectHitObjectEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L412
 */
export type ObjectHitObjectEndPayload = { bodyA: object; bodyB: object; };

/**
 * `reldens.objectHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `continue, objectBody, wall`
 * - Emitted at: lib/world/server/collisions-manager.js:L424
 */
export type ObjectHitWallBeginPayload = { continue: boolean; objectBody: object; wall: object; };

/**
 * `reldens.onJoinRoomGame`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, options, userModel, this)`
 * - Emitted at: lib/rooms/server/game.js:L41
 */
export type OnJoinRoomGamePayload = [client: Client, options: object, userModel: UsersModel, self: RoomGame];

/**
 * `reldens.onPreparePlayerCreationFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L322
 */
export type OnPreparePlayerCreationFormSubmitPayload = { form: object; gameManager: object; usersPlugin: UsersPlugin; };

/**
 * `reldens.onPreparePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, select, selectedPlayer, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L265
 */
export type OnPreparePlayerSelectorFormSubmitPayload = { form: object; gameManager: object; select: object; selectedPlayer: object; usersPlugin: UsersPlugin; };

/**
 * `reldens.onPrepareSinglePlayerSelectorFormSubmit`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `form, gameManager, player, selectElement, usersPlugin`
 * - Emitted at: lib/users/client/plugin.js:L196
 */
export type OnPrepareSinglePlayerSelectorFormSubmitPayload = { form: HTMLFormElement; gameManager: object; player: object; selectElement: HTMLInputElement; usersPlugin: UsersPlugin; };

/**
 * `reldens.onRoomDispose`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `result, roomId, roomName`
 * - Emitted at: lib/rooms/server/login.js:L298
 */
export type OnRoomDisposePayload = { result: { confirm: boolean; }; roomId: number; roomName: string; };

/**
 * `reldens.onSavePlayerStateBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `playerId, playerSchema, room, updatePatch, updateReady`
 * - Emitted at: lib/rooms/server/scene.js:L719
 */
export type OnSavePlayerStateBeforePayload = { playerId: number; playerSchema: PlayerState; room: RoomScene; updatePatch: object; updateReady: { continueUpdate: boolean; }; };

/**
 * `reldens.onSavePlayerStatsBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `client, objectState, playerSchema, room`
 * - Emitted at: lib/rooms/server/scene.js:L748
 */
export type OnSavePlayerStatsBeforePayload = { client: Client; objectState: { updateReady: boolean; }; playerSchema: PlayerState; room: RoomScene; };

/**
 * `reldens.openUI`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `openButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, uiScene)
 * - Emitted at: lib/chat/client/chat-ui.js:L156, lib/game/client/user-interface.js:L155, lib/game/client/ui-factory.js:L56, lib/game/client/settings-ui.js:L51, lib/game/client/instructions-ui.js:L44, lib/game/client/minimap-ui.js:L77, lib/users/client/player-stats-ui.js:L49
 */
export type OpenUIPayload = { openButton: boolean; ui: ChatUi; box?: object; dialogBox?: object; dialogContainer?: object; minimap?: Minimap; uiScene?: object; };

/**
 * `reldens.parsingMapLayerAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L245
 */
export type ParsingMapLayerAfterPayload = { layer: object; world: P2world; };

/**
 * `reldens.parsingMapLayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L243
 */
export type ParsingMapLayerBeforePayload = { layer: object; world: P2world; };

/**
 * `reldens.parsingMapLayersAfterBodiesQueue`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `layer, world`
 * - Emitted at: lib/world/server/p2world.js:L254
 */
export type ParsingMapLayersAfterBodiesQueuePayload = { layer: object; world: P2world; };

/**
 * `reldens.playerAttack`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(message, this.room)`
 * - Emitted at: lib/actions/client/receiver-wrapper.js:L104
 */
export type PlayerAttackPayload = [message: object, room: RoomScene];

/**
 * `reldens.playerDeath`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: a `PlayerDeathEvent` instance with properties `affectedProperty, attackerPlayer, room, targetClient, targetSchema`
 * - Emitted at: lib/actions/server/battle.js:L197
 */
export type PlayerDeathPayload = { affectedProperty: object; attackerPlayer: PlayerState; room: RoomScene; targetClient: Client; targetSchema: PlayerState; };

/**
 * `reldens.playerEngineAddPlayer`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, id, addPlayerData)`
 * - Emitted at: lib/users/client/player-engine.js:L171
 */
export type PlayerEngineAddPlayerPayload = [playerEngine: PlayerEngine, id: string, addPlayerData: object];

/**
 * `reldens.playerHitObjectEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, result`
 * - Emitted at: lib/world/server/collisions-manager.js:L281
 */
export type PlayerHitObjectEndPayload = { playerBody: object; result: { stopFull: boolean; continue: boolean; }; };

/**
 * `reldens.playerHitPlayer`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L237
 */
export type PlayerHitPlayerPayload = { bodyA: object; bodyB: object; };

/**
 * `reldens.playerHitPlayerEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L251
 */
export type PlayerHitPlayerEndPayload = { bodyA: object; bodyB: object; };

/**
 * `reldens.playerHitWallBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L296
 */
export type PlayerHitWallBeginPayload = { playerBody: object; wallBody: object; };

/**
 * `reldens.playerLeftScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `code, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L589
 */
export type PlayerLeftScenePayload = { code: number; roomEvents: RoomEvents; };

/**
 * `reldens.playerNewName`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L536
 */
export type PlayerNewNamePayload = [self: LoginManager, loginData: object, result: { error: boolean; message: string; }];

/**
 * `reldens.playerNewNameUnavailable`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, isNameAvailable, result)`
 * - Emitted at: lib/game/server/login-manager.js:L557
 */
export type PlayerNewNameUnavailablePayload = [self: LoginManager, loginData: object, isNameAvailable: boolean, result: { error: boolean; message: string; }];

/**
 * `reldens.playerPersistDataAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, params, this)`
 * - Emitted at: lib/rooms/server/scene.js:L237
 */
export type PlayerPersistDataAfterPayload = [client: Client, userModel: UsersModel, currentPlayer: PlayerState, params: object, self: RoomScene];

/**
 * `reldens.playerPersistDataBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, userModel, currentPlayer, params, this)`
 * - Emitted at: lib/rooms/server/scene.js:L233
 */
export type PlayerPersistDataBeforePayload = [client: Client, userModel: UsersModel, currentPlayer: PlayerState, params: object, self: RoomScene];

/**
 * `reldens.playerSceneUnavailable`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, loginData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L545
 */
export type PlayerSceneUnavailablePayload = [self: LoginManager, loginData: object, result: object];

/**
 * `reldens.playerStatsUpdateAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L620
 */
export type PlayerStatsUpdateAfterPayload = [message: object, self: RoomEvents];

/**
 * `reldens.playerStatsUpdateBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(message, this)`
 * - Emitted at: lib/game/client/room-events.js:L409
 */
export type PlayerStatsUpdateBeforePayload = [message: object, self: RoomEvents];

/**
 * `reldens.playersOnAdd`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, key, previousScene, this)`
 * - Emitted at: lib/game/client/room-events.js:L168
 */
export type PlayersOnAddPayload = [player: PlayerState, key: string, previousScene: string | boolean, roomEvents: RoomEvents];

/**
 * `reldens.playersOnAddReady`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `player, previousScene, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L875
 */
export type PlayersOnAddReadyPayload = { player: PlayerEngine; previousScene: string | boolean; roomEvents: RoomEvents; };

/**
 * `reldens.playersOnRemove`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(player, key, this)`
 * - Emitted at: lib/game/client/room-events.js:L281
 */
export type PlayersOnRemovePayload = [player: PlayerState, key: string, roomEvents: RoomEvents];

/**
 * `reldens.playersQueueBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(player, key, previousScene, roomEvents)`
 * - Emitted at: lib/prediction/client/room-events-override.js:L33, lib/game/client/room-events.js:L227
 */
export type PlayersQueueBeforePayload = [player: PlayerState, key: string, previousScene: string | boolean, roomEvents: RoomEvents];

/**
 * `reldens.preloadUiScene`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/scene-preloader.js:L166
 */
export type PreloadUiScenePayload = [self: ScenePreloader];

/**
 * `reldens.processForgotPassword`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData, sendResult)`
 * - Emitted at: lib/game/server/login-manager.js:L679
 */
export type ProcessForgotPasswordPayload = [self: LoginManager, userData: object, sendResult: object];

/**
 * `reldens.processUserRequestIsValidDataBefore`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, userData)`
 * - Emitted at: lib/game/server/login-manager.js:L285
 */
export type ProcessUserRequestIsValidDataBeforePayload = [self: LoginManager, userData: object];

/**
 * `reldens.register`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L501
 */
export type RegisterPayload = [self: LoginManager, userData: object, result: { error: string; }];

/**
 * `reldens.registrationInvalidParams`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData, result)`
 * - Emitted at: lib/game/server/login-manager.js:L313
 */
export type RegistrationInvalidParamsPayload = [self: LoginManager, user: UsersModel, userData: object, result: { error: string; }];

/**
 * `reldens.removePlayerBefore`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerSchema, room, stateObject`
 * - Emitted at: lib/rooms/server/scene.js:L662
 */
export type RemovePlayerBeforePayload = { playerSchema: PlayerState; room: RoomScene; stateObject: { isRemoveReady: boolean; }; };

/**
 * `reldens.restoreObjectAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `enemyObject, room`
 * - Emitted at: lib/objects/server/object/type/enemy-object.js:L396
 */
export type RestoreObjectAfterPayload = { enemyObject: EnemyObject; room: RoomScene; };

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
export type RoomLoginOnAuthPayload = { client: Client; loginResult: object; options: object; request: object; result: { confirm: boolean; }; roomLogin: RoomLogin; };

/**
 * `reldens.roomLoginOnCreate`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: one object with keys `options, roomLogin`
 * - Emitted at: lib/rooms/server/login.js:L58
 */
export type RoomLoginOnCreatePayload = { options: object; roomLogin: RoomLogin; };

/**
 * `reldens.roomsDefinition`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this.defineExtraRooms)`
 * - Emitted at: lib/rooms/server/manager.js:L93
 */
export type RoomsDefinitionPayload = [defineExtraRooms: object[]];

/**
 * `reldens.roomsMessageActionsByRoom`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(roomMessageActions, roomName)`
 * - Emitted at: lib/rooms/server/manager.js:L184
 */
export type RoomsMessageActionsByRoomPayload = [roomMessageActions: object, roomName: string];

/**
 * `reldens.roomsMessageActionsGlobal`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `(none required)`
 * - Emitted at: lib/rooms/server/manager.js:L99
 */
export type RoomsMessageActionsGlobalPayload = object;

/**
 * `reldens.runBattlePveAfter`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `attackResult, playerSchema, roomScene, target`
 * - Emitted at: lib/actions/server/pve.js:L82
 */
export type RunBattlePveAfterPayload = { attackResult: object; playerSchema: PlayerState; roomScene: RoomScene; target: object; };

/**
 * `reldens.runGameOver`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `defaultBehavior, message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L510
 */
export type RunGameOverPayload = { defaultBehavior: boolean; message: object; roomEvents: RoomEvents; };

/**
 * `reldens.runPlayerAnimation`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, playerId, playerState, playerSprite)`
 * - Emitted at: lib/users/client/player-engine.js:L333
 */
export type RunPlayerAnimationPayload = [playerEngine: PlayerEngine, playerId: number, playerState: PlayerState, playerSprite: object];

/**
 * `reldens.savePlayerStatsUpdateClient`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(client, playerSchema, this)`
 * - Emitted at: lib/rooms/server/scene.js:L762
 */
export type SavePlayerStatsUpdateClientPayload = [client: Client, playerSchema: PlayerState, self: RoomScene];

/**
 * `reldens.sceneRoomOnCreate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/rooms/server/scene.js:L116
 */
export type SceneRoomOnCreatePayload = [self: RoomScene];

/**
 * `reldens.serverBeforeDefineRooms`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L413
 */
export type ServerBeforeDefineRoomsPayload = { serverManager: ServerManager; };

/**
 * `reldens.serverBeforeListen`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L275
 */
export type ServerBeforeListenPayload = { serverManager: ServerManager; };

/**
 * `reldens.serverBeforeLoginManager`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L447
 */
export type ServerBeforeLoginManagerPayload = { serverManager: ServerManager; };

/**
 * `reldens.serverConfigFeaturesReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L471
 */
export type ServerConfigFeaturesReadyPayload = { configProcessor: ConfigManager; serverManager: ServerManager; };

/**
 * `reldens.serverConfigReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `configProcessor, serverManager`
 * - Emitted at: lib/game/server/manager.js:L506
 */
export type ServerConfigReadyPayload = { configProcessor: ConfigManager; serverManager: ServerManager; };

/**
 * `reldens.serverReady`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `serverManager`
 * - Emitted at: lib/game/server/manager.js:L280
 */
export type ServerReadyPayload = { serverManager: ServerManager; };

/**
 * `reldens.setAudio`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `audioManager, categoryKey, enabled`
 * - Emitted at: lib/audio/client/manager.js:L80
 */
export type SetAudioPayload = { audioManager: AudioManager; categoryKey: string; enabled: boolean; };

/**
 * `reldens.setSceneOnPlayers`
 * - Zone: server
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this, user, userData)`
 * - Emitted at: lib/game/server/login-manager.js:L387
 */
export type SetSceneOnPlayersPayload = [self: LoginManager, user: UsersModel, userData: object];

/**
 * `reldens.setupActions`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `enemyObject`
 * - Emitted at: lib/objects/server/object/type/enemy-object.js:L226
 */
export type SetupActionsPayload = { enemyObject: EnemyObject; };

/**
 * `reldens.setupAdminManagers`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L161
 */
export type SetupAdminManagersPayload = { adminManager: AdminManager; };

/**
 * `reldens.setupAdminRouter`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L157
 */
export type SetupAdminRouterPayload = { adminManager: AdminManager; };

/**
 * `reldens.setupAdminRoutes`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager`
 * - Emitted at: lib/admin-manager.js:L159
 */
export type SetupAdminRoutesPayload = { adminManager: AdminManager; };

/**
 * `reldens.setupEntitiesRoutes`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `adminManager, driverResource, entityPath, entityRoute` (site adds spread/computed keys)
 * - Emitted at: lib/admin-manager/router.js:L145
 */
export type SetupEntitiesRoutesPayload = { adminManager: AdminManager; driverResource: object; entityPath: string; entityRoute: string; };

/**
 * `reldens.startChangedScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `message, roomEvents`
 * - Emitted at: lib/game/client/room-events.js:L452
 */
export type StartChangedScenePayload = { message: object; roomEvents: RoomEvents; };

/**
 * `reldens.startEngineScene`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, player, room, previousScene)`
 * - Emitted at: lib/game/client/room-events.js:L773
 */
export type StartEngineScenePayload = [roomEvents: RoomEvents, player: PlayerState, room: Room, previousScene: string | boolean];

/**
 * `reldens.startGameAfter`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L154
 */
export type StartGameAfterPayload = [self: GameManager];

/**
 * `reldens.startGameBefore`
 * - Zone: client
 * - Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
 * - Payload: positional arguments `(this)`
 * - Emitted at: lib/game/client/game-manager.js:L138
 */
export type StartGameBeforePayload = [self: GameManager];

/**
 * `reldens.startObjectHitObject`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `bodyA, bodyB`
 * - Emitted at: lib/world/server/collisions-manager.js:L381
 */
export type StartObjectHitObjectPayload = { bodyA: object; bodyB: object; };

/**
 * `reldens.startObjectHitWall`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `objectBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L441
 */
export type StartObjectHitWallPayload = { objectBody: object; };

/**
 * `reldens.startPlayerHitChangePoint`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changePoint, collisionsManager, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L330
 */
export type StartPlayerHitChangePointPayload = { changePoint: object; collisionsManager: CollisionsManager; playerBody: object; };

/**
 * `reldens.startPlayerHitObjectBegin`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `otherBody, playerBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L262
 */
export type StartPlayerHitObjectBeginPayload = { otherBody: object; playerBody: object; };

/**
 * `reldens.startPlayerHitWallEnd`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerBody, wallBody`
 * - Emitted at: lib/world/server/collisions-manager.js:L307
 */
export type StartPlayerHitWallEndPayload = { playerBody: object; wallBody: object; };

/**
 * `reldens.teamJoinInviteRejected`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `playerRejectingName, playerSendingInvite`
 * - Emitted at: lib/teams/server/team-message-actions.js:L61
 */
export type TeamJoinInviteRejectedPayload = { playerRejectingName: string; playerSendingInvite: Client; };

/**
 * `reldens.teamLeave`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L31
 */
export type TeamLeavePayload = { data: object; playerSchema: PlayerState; room: RoomScene; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.teamLeaveBeforeSendUpdate`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `areLessPlayerThanRequired, currentTeam, isOwnerDisbanding, playerId, playerSchema, room, sendUpdate, singleRemoveId, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/team-leave.js:L80
 */
export type TeamLeaveBeforeSendUpdatePayload = { areLessPlayerThanRequired: boolean; currentTeam: object; isOwnerDisbanding: boolean; playerId: number; playerSchema: PlayerState; room: RoomScene; sendUpdate: object; singleRemoveId: number; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.templateReloader.templatesChanged`
 * - Zone: cms
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `changedFiles, reloader`
 * - Emitted at: lib/template-reloader.js:L213
 */
export type TemplateReloaderTemplatesChangedPayload = { changedFiles: object; reloader: TemplateReloader; };

/**
 * `reldens.tryClanStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-clan-invite.js:L69
 */
export type TryClanStartPayload = { client: Client; continueStart: boolean; data: object; playerSchema: PlayerState; room: RoomScene; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.tryTeamStart`
 * - Zone: server
 * - Dispatch: emit (awaited)
 * - Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
 * - Emitted at: lib/teams/server/message-actions/try-team-start.js:L47
 */
export type TryTeamStartPayload = { client: Client; continueStart: boolean; data: object; playerSchema: PlayerState; room: RoomScene; teamsPlugin: TeamsPlugin; };

/**
 * `reldens.updateGameSizeAfter`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, newWidth, newHeight)`
 * - Emitted at: lib/game/client/game-engine.js:L100
 */
export type UpdateGameSizeAfterPayload = [gameEngine: GameEngine, newWidth: number, newHeight: number];

/**
 * `reldens.updateGameSizeBefore`
 * - Zone: client
 * - Dispatch: emit (awaited)
 * - Payload: positional arguments `(this, newWidth, newHeight)`
 * - Emitted at: lib/game/client/game-engine.js:L88
 */
export type UpdateGameSizeBeforePayload = [gameEngine: GameEngine, newWidth: number, newHeight: number];
