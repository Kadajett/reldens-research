# Type Alias: ServerConfigReadyPayload

```ts
type ServerConfigReadyPayload = {
  configProcessor: ConfigManager;
  serverManager: ServerManager;
};
```

`reldens.serverConfigReady`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `configProcessor, serverManager`
- Emitted at: lib/game/server/manager.js:L506

## Properties

### configProcessor

```ts
configProcessor: ConfigManager;
```

***

### serverManager

```ts
serverManager: ServerManager;
```
