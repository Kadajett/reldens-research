# Type Alias: PlayerEngineAddPlayerPayload

```ts
type PlayerEngineAddPlayerPayload = [PlayerEngine, string, object];
```

`reldens.playerEngineAddPlayer`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, id, addPlayerData)`
- Emitted at: lib/users/client/player-engine.js:L171
