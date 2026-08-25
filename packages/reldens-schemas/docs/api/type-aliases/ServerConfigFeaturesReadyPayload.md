# Type Alias: ServerConfigFeaturesReadyPayload

```ts
type ServerConfigFeaturesReadyPayload = {
  configProcessor: ConfigManager;
  serverManager: ServerManager;
};
```

`reldens.serverConfigFeaturesReady`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `configProcessor, serverManager`
- Emitted at: lib/game/server/manager.js:L471

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
