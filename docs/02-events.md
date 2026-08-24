# Events

Reldens' extension model is mostly events. Both halves share one manager:
`serverManager.events` and `gameManager.events` are the same
`EventsManagerSingleton` from `@reldens/utils`.

```js
events.on('reldens.serverConfigFeaturesReady', (props) => { /* ... */ });
events.once('reldens.startGameAfter', () => { /* ... */ });
events.on('reldens.beforeJoinGame', handler, 'my-remove-key');
events.offByKey('my-remove-key');
```

Some are emitted with `emit` (awaited), some with `emitSync` (inside a tick, not
awaited). A slow listener on a sync event slows the room down for everyone in it.

To find out what an event actually carries, turn the debugger on once and read:

```js
appServer.events.debug = 'all';          // extremely noisy
appServer.events.debug = 'reldens.beforeJoinGame,reldens.createRoomAfter';
```

Then go read the emit site. The payload shapes are not documented anywhere else,
and they differ per event.

## The ones you will actually use

### Server boot

| Event | Use it for |
|---|---|
| `reldens.beforeLoadConfigurations` | changing configuration before anything reads it |
| `reldens.serverConfigFeaturesReady` | the features table is loaded; managers exist |
| `reldens.beforeInitializeManagers` | **registering custom classes.** Later is too late |
| `reldens.serverReady` | everything is up |

### Login and players

| Event | Use it for |
|---|---|
| `reldens.roomLoginOnAuth` | custom auth; set `props.result.confirm = false` to deny |
| `reldens.beforeJoinGame` | client-side custom class registration |
| `reldens.beforeJoinGameRoom` | last chance before the lobby join |
| `reldens.createPlayerAfter` | a new character exists |

### Rooms and world

| Event | Use it for |
|---|---|
| `reldens.createRoomAfter` | adding behaviour to a room without subclassing it |
| `reldens.joinedRoom` | a player entered a scene |
| `reldens.beforeSceneExecuteMessages` | intercepting a room's message handling |

### Combat, items, rewards

| Event | Use it for |
|---|---|
| `reldens.battleEnded` | someone died, PvE or PvP |
| `reldens.beforeGiveRewards` / `reldens.afterGiveRewards` | drop and reward logic |
| `reldens.afterProcessPlayerDropsBeforeBroadcast` | changing drops before clients see them |

### Client rendering

| Event | Use it for |
|---|---|
| `reldens.beforeCreateEngine` | Phaser config |
| `reldens.afterSceneDynamicCreate` | adding sprites/layers to a room's scene |
| `reldens.activateRoom` | raw `room.onMessage('*', ...)` access |
| `reldens.afterInitEngineAndStartGame` | the DOM UI around the canvas |
| `reldens.startGameAfter` | the game is running |

### Admin

| Event | Use it for |
|---|---|
| `reldens.beforeCreateAdminManager` / `reldens.afterCreateAdminManager` | locking down CRUD routes per role |
| `reldens.adminBeforeFieldRender` | custom admin field rendering |

## Every event name

Extracted from the v4.0.0-beta.39.8 source. The same list is a TypeScript union
in `packages/reldens-types/events.d.ts`, so your editor will autocomplete it.

Regenerate with:

```bash
grep -rhoE "'reldens\.[a-zA-Z0-9_.]+'" node_modules/reldens/lib | sort -u
```

- `reldens.actionsPrepareEventsListeners`
- `reldens.activateRoom`
- `reldens.activatedRoom`
- `reldens.activatedRoom_`
- `reldens.adminAfterEntitySave`
- `reldens.adminBeforeFieldRender`
- `reldens.adminEditPropertiesPopulation`
- `reldens.adminSideBarBeforeSubItems`
- `reldens.afterCreateAdminManager`
- `reldens.afterEnrichPlayerWithLocale`
- `reldens.afterGiveRewards`
- `reldens.afterInitEngineAndStartGame`
- `reldens.afterPlayerJoinedClan`
- `reldens.afterPlayerJoinedTeam`
- `reldens.afterProcessPlayerDropsBeforeBroadcast`
- `reldens.afterProcessRewardsDropsBeforeBroadcast`
- `reldens.afterRunAdditionalRespawnSetup`
- `reldens.afterRunAdditionalSetup`
- `reldens.afterSceneDynamicCreate`
- `reldens.afterTeamLeave`
- `reldens.allAudiosLoaded`
- `reldens.audioLoaded`
- `reldens.audioManagerDeleteAudios`
- `reldens.audioManagerUpdateAudiosLoaded`
- `reldens.audioManagerUpdateCategoriesLoaded`
- `reldens.battleEnded`
- `reldens.beforeClanDisband`
- `reldens.beforeClanJoin`
- `reldens.beforeClanUpdatePlayers`
- `reldens.beforeCreateAdminManager`
- `reldens.beforeCreateEngine`
- `reldens.beforeCreateUiScene`
- `reldens.beforeEnrichPlayerWithClan`
- `reldens.beforeEnrichPlayerWithClanUpdate`
- `reldens.beforeEnrichUserWithLocale`
- `reldens.beforeGetParsedValue`
- `reldens.beforeGiveRewards`
- `reldens.beforeInitEngineAndStartGame`
- `reldens.beforeInitializeManagers`
- `reldens.beforeJoinGame`
- `reldens.beforeJoinGameRoom`
- `reldens.beforeLoadConfigurations`
- `reldens.beforePreload`
- `reldens.beforePreloadUiScene`
- `reldens.beforeReconnectGameClient`
- `reldens.beforeRemovingDroppedReward`
- `reldens.beforeSceneDynamicCreate`
- `reldens.beforeSceneExecuteMessages`
- `reldens.beforeSetupAdminManager`
- `reldens.beforeSuperInitialGameData`
- `reldens.beforeTeamCreate`
- `reldens.beforeTeamDisband`
- `reldens.beforeTeamJoin`
- `reldens.beforeTeamUpdatePlayers`
- `reldens.buildAdminContentsAfter`
- `reldens.changeSceneDestroyPrevious`
- `reldens.chatMessageObjectCreated`
- `reldens.clanDisconnectAfterSendUpdate`
- `reldens.clanDisconnectBeforeSendUpdate`
- `reldens.clanJoinInviteRejected`
- `reldens.clanLeave`
- `reldens.clanLeaveAfterSendUpdate`
- `reldens.clanLeaveBeforeSendUpdate`
- `reldens.clientStartAfter`
- `reldens.clientStartBefore`
- `reldens.closeUI`
- `reldens.createAnimationAfter`
- `reldens.createAppServer`
- `reldens.createCurrentPlayer`
- `reldens.createDynamicAnimation_`
- `reldens.createDynamicAnimationsBefore`
- `reldens.createEngineScene`
- `reldens.createEngineSceneDone`
- `reldens.createGameServer`
- `reldens.createNewPlayerBefore`
- `reldens.createNewPlayerCriticalError`
- `reldens.createNewUserAfter`
- `reldens.createNewUserError`
- `reldens.createPlayerAfter`
- `reldens.createPlayerAnimations`
- `reldens.createPlayerBefore`
- `reldens.createPlayerStatsAfter`
- `reldens.createPreload`
- `reldens.createUiScene`
- `reldens.createWorld`
- `reldens.createdMinimap`
- `reldens.createdNewPlayer`
- `reldens.createdPlayerSchema`
- `reldens.createdPreloaderInstance`
- `reldens.createdPreloaderRecurring`
- `reldens.createdRoomsEventsInstance`
- `reldens.createdUserInterface`
- `reldens.createdWorldObject`
- `reldens.defineRoomsInGameServerDone`
- `reldens.disconnectLoggedBefore`
- `reldens.endChangedScene`
- `reldens.endObjectHitObject`
- `reldens.endObjectHitWall`
- `reldens.endPlayerHitChangePoint`
- `reldens.endPlayerHitObjectBegin`
- `reldens.endPlayerHitWallEnd`
- `reldens.eventBuildSideBarBefore`
- `reldens.featuresManagerLoadFeaturesAfter`
- `reldens.gameEngineClearTarget`
- `reldens.gameEngineShowTarget`
- `reldens.gameEngineTabTarget`
- `reldens.gameOver`
- `reldens.gameOverReload`
- `reldens.gameRoomError`
- `reldens.guestInvalidChangePoint`
- `reldens.guestLoginInvalidParams`
- `reldens.initUiAfter`
- `reldens.initUiBefore`
- `reldens.invalidData`
- `reldens.joinRoomEnd`
- `reldens.joinRoomInvalid`
- `reldens.joinRoomStart`
- `reldens.joinedRoom`
- `reldens.joinedRoom_`
- `reldens.loadFeature_`
- `reldens.loadFeatures`
- `reldens.loginError`
- `reldens.loginInvalidParams`
- `reldens.loginInvalidPassword`
- `reldens.loginInvalidRole`
- `reldens.loginSuccess`
- `reldens.objectBodyChange`
- `reldens.objectBodyChanged`
- `reldens.objectHitObjectEnd`
- `reldens.objectHitWallBegin`
- `reldens.onJoinRoomGame`
- `reldens.onPreparePlayerCreationFormSubmit`
- `reldens.onPreparePlayerSelectorFormSubmit`
- `reldens.onPrepareSinglePlayerSelectorFormSubmit`
- `reldens.onRoomDispose`
- `reldens.onSavePlayerStateBefore`
- `reldens.onSavePlayerStatsBefore`
- `reldens.openUI`
- `reldens.parsingMapLayerAfter`
- `reldens.parsingMapLayerBefore`
- `reldens.parsingMapLayersAfterBodiesQueue`
- `reldens.playerAttack`
- `reldens.playerDeath`
- `reldens.playerEngineAddPlayer`
- `reldens.playerHitObjectEnd`
- `reldens.playerHitPlayer`
- `reldens.playerHitPlayerEnd`
- `reldens.playerHitWallBegin`
- `reldens.playerLeftScene`
- `reldens.playerNewName`
- `reldens.playerNewNameUnavailable`
- `reldens.playerPersistDataAfter`
- `reldens.playerPersistDataBefore`
- `reldens.playerSceneUnavailable`
- `reldens.playerStatsUpdateAfter`
- `reldens.playerStatsUpdateBefore`
- `reldens.playersOnAdd`
- `reldens.playersOnAddReady`
- `reldens.playersOnRemove`
- `reldens.playersQueueBefore`
- `reldens.preloadUiScene`
- `reldens.processForgotPassword`
- `reldens.processUserRequestIsValidDataBefore`
- `reldens.register`
- `reldens.registrationInvalidParams`
- `reldens.removePlayerBefore`
- `reldens.restoreObjectAfter`
- `reldens.roomLoginOnAuth`
- `reldens.roomLoginOnCreate`
- `reldens.roomsDefinition`
- `reldens.roomsMessageActionsByRoom`
- `reldens.roomsMessageActionsGlobal`
- `reldens.runBattlePveAfter`
- `reldens.runGameOver`
- `reldens.runPlayerAnimation`
- `reldens.savePlayerStatsUpdateClient`
- `reldens.sceneRoomOnCreate`
- `reldens.serverBeforeDefineRooms`
- `reldens.serverBeforeListen`
- `reldens.serverBeforeLoginManager`
- `reldens.serverConfigFeaturesReady`
- `reldens.serverConfigReady`
- `reldens.serverReady`
- `reldens.setAudio`
- `reldens.setSceneOnPlayers`
- `reldens.setupActions`
- `reldens.setupAdminManagers`
- `reldens.setupEntitiesRoutes`
- `reldens.startChangedScene`
- `reldens.startEngineScene`
- `reldens.startGameAfter`
- `reldens.startGameBefore`
- `reldens.startObjectHitObject`
- `reldens.startObjectHitWall`
- `reldens.startPlayerHitChangePoint`
- `reldens.startPlayerHitObjectBegin`
- `reldens.startPlayerHitWallEnd`
- `reldens.teamJoinInviteRejected`
- `reldens.teamLeave`
- `reldens.teamLeaveBeforeSendUpdate`
- `reldens.tryClanStart`
- `reldens.tryTeamStart`
- `reldens.updateGameSizeAfter`
- `reldens.updateGameSizeBefore`
