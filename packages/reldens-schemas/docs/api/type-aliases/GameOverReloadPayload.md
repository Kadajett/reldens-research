# Type Alias: GameOverReloadPayload

```ts
type GameOverReloadPayload = [RoomEvents, {
  confirmed: boolean;
}];
```

`reldens.gameOverReload`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, defaultReload)`
- Emitted at: lib/game/client/room-events.js:L306
