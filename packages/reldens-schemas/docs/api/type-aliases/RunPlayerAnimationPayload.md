# Type Alias: RunPlayerAnimationPayload

```ts
type RunPlayerAnimationPayload = [unknown, unknown, unknown, unknown];
```

`reldens.runPlayerAnimation`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, playerId, playerState, playerSprite)`
- Emitted at: lib/users/client/player-engine.js:L333
