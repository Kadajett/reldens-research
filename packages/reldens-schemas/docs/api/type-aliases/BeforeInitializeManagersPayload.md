# Type Alias: BeforeInitializeManagersPayload

```ts
type BeforeInitializeManagersPayload = {
  continueProcess: boolean;
  serverManager: ServerManager;
};
```

`reldens.beforeInitializeManagers`
The registration deadline for server custom classes. RoomsManager reads server/customClasses/roomsClass/* immediately after this event, so a class registered later is invisible to it.
[EXTRACTED] lib/game/server/manager.js:L144 - emit('reldens.beforeInitializeManagers', ...); theme/plugins/server-plugin.js:L29 - props.serverManager.configManager.configList.server.customClasses

- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueProcess, serverManager`
- Emitted at: lib/game/server/manager.js:L394

## Properties

### continueProcess

```ts
continueProcess: boolean;
```

***

### serverManager

```ts
serverManager: ServerManager;
```
