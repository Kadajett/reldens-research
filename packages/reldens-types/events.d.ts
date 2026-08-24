/**
 * The Reldens events surface.
 *
 * Reldens is extended almost entirely through `EventsManagerSingleton`. Both the
 * server (`serverManager.events`) and the client (`gameManager.events`) expose the
 * same manager. The union below was extracted from the v4.0.0-beta.39.8 source
 * (every `'reldens.*'` literal under lib/ and theme/), so autocomplete lists the
 * real names. Regenerate it with:
 *
 *   grep -rhoE "'reldens\.[a-zA-Z0-9_.]+'" node_modules/reldens/lib | sort -u
 *
 * Payload shapes are deliberately loose: they differ per event and are documented
 * only by the emit call sites. Look the event up in the source before relying on a
 * field, then narrow it locally.
 */
declare module 'reldens-events' {
    import type { ServerManager } from 'reldens/server';

    export type ReldensEventName = ReldensKnownEventName | (string & {});

    /**
     * Payload of 'reldens.beforeInitializeManagers'.
     *
     * Emitted as `{serverManager: this, continueProcess: true}` and read back after
     * the emit: a listener that sets `continueProcess = false` aborts manager
     * initialization entirely (lib/game/server/manager.js:393-397).
     *
     * This event is also the registration deadline for server custom classes:
     * mutate `serverManager.configManager.configList.server.customClasses` here,
     * because RoomsManager reads it immediately afterwards.
     */
    export interface BeforeInitializeManagersEvent {
        serverManager: ServerManager;
        continueProcess: boolean;
    }

    /**
     * Payload of 'reldens.serverConfigFeaturesReady'.
     *
     * Emitted right after FeaturesManager.loadFeatures() resolves
     * (lib/game/server/manager.js:471-474), so the features table is loaded and every
     * enabled feature plugin has run its setup(). `configProcessor` is the same
     * ConfigManager instance as `serverManager.configManager`, under the name the
     * built-in plugins use for it - by this point the database configuration is
     * loaded, so `configProcessor.get('client/ui/chat')` style reads work.
     *
     * Nothing is read back from the payload after the emit: unlike
     * beforeInitializeManagers there is no abort mechanism here.
     */
    export interface ServerConfigFeaturesReadyEvent {
        serverManager: ServerManager;
        configProcessor: import('reldens/server').ServerConfigManager;
    }

    /**
     * Payload of 'reldens.joinRoomEnd' - one of the platform's three dedicated
     * payload classes (lib/rooms/server/events/joined-scene-room-event.js).
     * Emitted from RoomScene.onJoin (lib/rooms/server/scene.js:156) after the
     * player is created on the scene and added to activePlayers.
     */
    export interface JoinedSceneRoomEvent {
        roomScene: any;
        client: any;
        options: Record<string, any>;
        userModel: any;
        loggedPlayer: any;
        isGuest: boolean;
    }

    /**
     * Payload of 'reldens.battleEnded' (lib/actions/server/events/battle-ended-event.js).
     * Emitted from Pve.battleEnded (lib/actions/server/pve.js:332) when an enemy dies.
     */
    export interface BattleEndedEvent {
        playerSchema: any;
        pve: any;
        actionData: any;
        room: any;
    }

    /**
     * Payload of 'reldens.playerDeath' (lib/actions/server/events/player-death-event.js).
     */
    export interface PlayerDeathEvent {
        targetClient: any;
        targetSchema: any;
        attackerPlayer: any;
        room: any;
        affectedProperty: string;
    }

    export interface ReldensEventsManager {
        /** Register a listener. `removeKey` lets you drop it again with `off`/`offByKey`. */
        on(eventName: ReldensEventName, callback: (...args: any[]) => any, removeKey?: string, masterKey?: string): any;
        /** Register a listener that fires once. */
        once(eventName: ReldensEventName, callback: (...args: any[]) => any, removeKey?: string, masterKey?: string): any;
        /** Async emit: listeners are awaited. */
        emit(eventName: ReldensEventName, ...args: any[]): Promise<any>;
        /** Synchronous emit: used where Reldens cannot await, e.g. inside the physics tick. */
        emitSync(eventName: ReldensEventName, ...args: any[]): any;
        off(eventName: ReldensEventName, listener?: any): any;
        offByKey(removeKey: string, masterKey?: string): any;
        /** Set to 'all', or a comma separated list of event keys, to log every listener call. */
        debug: string | boolean;
        [key: string]: any;
    }

    export type ReldensKnownEventName =
        | 'reldens.actionsPrepareEventsListeners'
        | 'reldens.activateRoom'
        | 'reldens.activatedRoom'
        | 'reldens.activatedRoom_'
        | 'reldens.adminAfterEntitySave'
        | 'reldens.adminBeforeFieldRender'
        | 'reldens.adminEditPropertiesPopulation'
        | 'reldens.adminSideBarBeforeSubItems'
        | 'reldens.afterCreateAdminManager'
        | 'reldens.afterEnrichPlayerWithLocale'
        | 'reldens.afterGiveRewards'
        | 'reldens.afterInitEngineAndStartGame'
        | 'reldens.afterPlayerJoinedClan'
        | 'reldens.afterPlayerJoinedTeam'
        | 'reldens.afterProcessPlayerDropsBeforeBroadcast'
        | 'reldens.afterProcessRewardsDropsBeforeBroadcast'
        | 'reldens.afterRunAdditionalRespawnSetup'
        | 'reldens.afterRunAdditionalSetup'
        | 'reldens.afterSceneDynamicCreate'
        | 'reldens.afterTeamLeave'
        | 'reldens.allAudiosLoaded'
        | 'reldens.audioLoaded'
        | 'reldens.audioManagerDeleteAudios'
        | 'reldens.audioManagerUpdateAudiosLoaded'
        | 'reldens.audioManagerUpdateCategoriesLoaded'
        | 'reldens.battleEnded'
        | 'reldens.beforeClanDisband'
        | 'reldens.beforeClanJoin'
        | 'reldens.beforeClanUpdatePlayers'
        | 'reldens.beforeCreateAdminManager'
        | 'reldens.beforeCreateEngine'
        | 'reldens.beforeCreateUiScene'
        | 'reldens.beforeEnrichPlayerWithClan'
        | 'reldens.beforeEnrichPlayerWithClanUpdate'
        | 'reldens.beforeEnrichUserWithLocale'
        | 'reldens.beforeGetParsedValue'
        | 'reldens.beforeGiveRewards'
        | 'reldens.beforeInitEngineAndStartGame'
        | 'reldens.beforeInitializeManagers'
        | 'reldens.beforeJoinGame'
        | 'reldens.beforeJoinGameRoom'
        | 'reldens.beforeLoadConfigurations'
        | 'reldens.beforePreload'
        | 'reldens.beforePreloadUiScene'
        | 'reldens.beforeReconnectGameClient'
        | 'reldens.beforeRemovingDroppedReward'
        | 'reldens.beforeSceneDynamicCreate'
        | 'reldens.beforeSceneExecuteMessages'
        | 'reldens.beforeSetupAdminManager'
        | 'reldens.beforeSuperInitialGameData'
        | 'reldens.beforeTeamCreate'
        | 'reldens.beforeTeamDisband'
        | 'reldens.beforeTeamJoin'
        | 'reldens.beforeTeamUpdatePlayers'
        | 'reldens.buildAdminContentsAfter'
        | 'reldens.changeSceneDestroyPrevious'
        | 'reldens.chatMessageObjectCreated'
        | 'reldens.clanDisconnectAfterSendUpdate'
        | 'reldens.clanDisconnectBeforeSendUpdate'
        | 'reldens.clanJoinInviteRejected'
        | 'reldens.clanLeave'
        | 'reldens.clanLeaveAfterSendUpdate'
        | 'reldens.clanLeaveBeforeSendUpdate'
        | 'reldens.clientStartAfter'
        | 'reldens.clientStartBefore'
        | 'reldens.closeUI'
        | 'reldens.createAnimationAfter'
        | 'reldens.createAppServer'
        | 'reldens.createCurrentPlayer'
        | 'reldens.createDynamicAnimation_'
        | 'reldens.createDynamicAnimationsBefore'
        | 'reldens.createEngineScene'
        | 'reldens.createEngineSceneDone'
        | 'reldens.createGameServer'
        | 'reldens.createNewPlayerBefore'
        | 'reldens.createNewPlayerCriticalError'
        | 'reldens.createNewUserAfter'
        | 'reldens.createNewUserError'
        | 'reldens.createPlayerAfter'
        | 'reldens.createPlayerAnimations'
        | 'reldens.createPlayerBefore'
        | 'reldens.createPlayerStatsAfter'
        | 'reldens.createPreload'
        | 'reldens.createUiScene'
        | 'reldens.createWorld'
        | 'reldens.createdMinimap'
        | 'reldens.createdNewPlayer'
        | 'reldens.createdPlayerSchema'
        | 'reldens.createdPreloaderInstance'
        | 'reldens.createdPreloaderRecurring'
        | 'reldens.createdRoomsEventsInstance'
        | 'reldens.createdUserInterface'
        | 'reldens.createdWorldObject'
        | 'reldens.defineRoomsInGameServerDone'
        | 'reldens.disconnectLoggedBefore'
        | 'reldens.endChangedScene'
        | 'reldens.endObjectHitObject'
        | 'reldens.endObjectHitWall'
        | 'reldens.endPlayerHitChangePoint'
        | 'reldens.endPlayerHitObjectBegin'
        | 'reldens.endPlayerHitWallEnd'
        | 'reldens.eventBuildSideBarBefore'
        | 'reldens.featuresManagerLoadFeaturesAfter'
        | 'reldens.gameEngineClearTarget'
        | 'reldens.gameEngineShowTarget'
        | 'reldens.gameEngineTabTarget'
        | 'reldens.gameOver'
        | 'reldens.gameOverReload'
        | 'reldens.gameRoomError'
        | 'reldens.guestInvalidChangePoint'
        | 'reldens.guestLoginInvalidParams'
        | 'reldens.initUiAfter'
        | 'reldens.initUiBefore'
        | 'reldens.invalidData'
        | 'reldens.joinRoomEnd'
        | 'reldens.joinRoomInvalid'
        | 'reldens.joinRoomStart'
        | 'reldens.joinedRoom'
        | 'reldens.joinedRoom_'
        | 'reldens.loadFeature_'
        | 'reldens.loadFeatures'
        | 'reldens.loginError'
        | 'reldens.loginInvalidParams'
        | 'reldens.loginInvalidPassword'
        | 'reldens.loginInvalidRole'
        | 'reldens.loginSuccess'
        | 'reldens.objectBodyChange'
        | 'reldens.objectBodyChanged'
        | 'reldens.objectHitObjectEnd'
        | 'reldens.objectHitWallBegin'
        | 'reldens.onJoinRoomGame'
        | 'reldens.onPreparePlayerCreationFormSubmit'
        | 'reldens.onPreparePlayerSelectorFormSubmit'
        | 'reldens.onPrepareSinglePlayerSelectorFormSubmit'
        | 'reldens.onRoomDispose'
        | 'reldens.onSavePlayerStateBefore'
        | 'reldens.onSavePlayerStatsBefore'
        | 'reldens.openUI'
        | 'reldens.parsingMapLayerAfter'
        | 'reldens.parsingMapLayerBefore'
        | 'reldens.parsingMapLayersAfterBodiesQueue'
        | 'reldens.playerAttack'
        | 'reldens.playerDeath'
        | 'reldens.playerEngineAddPlayer'
        | 'reldens.playerHitObjectEnd'
        | 'reldens.playerHitPlayer'
        | 'reldens.playerHitPlayerEnd'
        | 'reldens.playerHitWallBegin'
        | 'reldens.playerLeftScene'
        | 'reldens.playerNewName'
        | 'reldens.playerNewNameUnavailable'
        | 'reldens.playerPersistDataAfter'
        | 'reldens.playerPersistDataBefore'
        | 'reldens.playerSceneUnavailable'
        | 'reldens.playerStatsUpdateAfter'
        | 'reldens.playerStatsUpdateBefore'
        | 'reldens.playersOnAdd'
        | 'reldens.playersOnAddReady'
        | 'reldens.playersOnRemove'
        | 'reldens.playersQueueBefore'
        | 'reldens.preloadUiScene'
        | 'reldens.processForgotPassword'
        | 'reldens.processUserRequestIsValidDataBefore'
        | 'reldens.register'
        | 'reldens.registrationInvalidParams'
        | 'reldens.removePlayerBefore'
        | 'reldens.restoreObjectAfter'
        | 'reldens.roomLoginOnAuth'
        | 'reldens.roomLoginOnCreate'
        | 'reldens.roomsDefinition'
        | 'reldens.roomsMessageActionsByRoom'
        | 'reldens.roomsMessageActionsGlobal'
        | 'reldens.runBattlePveAfter'
        | 'reldens.runGameOver'
        | 'reldens.runPlayerAnimation'
        | 'reldens.savePlayerStatsUpdateClient'
        | 'reldens.sceneRoomOnCreate'
        | 'reldens.serverBeforeDefineRooms'
        | 'reldens.serverBeforeListen'
        | 'reldens.serverBeforeLoginManager'
        | 'reldens.serverConfigFeaturesReady'
        | 'reldens.serverConfigReady'
        | 'reldens.serverReady'
        | 'reldens.setAudio'
        | 'reldens.setSceneOnPlayers'
        | 'reldens.setupActions'
        | 'reldens.setupAdminManagers'
        | 'reldens.setupEntitiesRoutes'
        | 'reldens.startChangedScene'
        | 'reldens.startEngineScene'
        | 'reldens.startGameAfter'
        | 'reldens.startGameBefore'
        | 'reldens.startObjectHitObject'
        | 'reldens.startObjectHitWall'
        | 'reldens.startPlayerHitChangePoint'
        | 'reldens.startPlayerHitObjectBegin'
        | 'reldens.startPlayerHitWallEnd'
        | 'reldens.teamJoinInviteRejected'
        | 'reldens.teamLeave'
        | 'reldens.teamLeaveBeforeSendUpdate'
        | 'reldens.tryClanStart'
        | 'reldens.tryTeamStart'
        | 'reldens.updateGameSizeAfter'
        | 'reldens.updateGameSizeBefore'
        ;
}
