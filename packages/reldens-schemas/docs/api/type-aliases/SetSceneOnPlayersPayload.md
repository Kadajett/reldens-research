# Type Alias: SetSceneOnPlayersPayload

```ts
type SetSceneOnPlayersPayload = [unknown, unknown, unknown];
```

`reldens.setSceneOnPlayers`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData)`
- Emitted at: lib/game/server/login-manager.js:L387
