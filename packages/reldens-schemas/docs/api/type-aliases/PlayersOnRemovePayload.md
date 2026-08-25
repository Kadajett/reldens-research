# Type Alias: PlayersOnRemovePayload

```ts
type PlayersOnRemovePayload = [PlayerState, string, RoomEvents];
```

`reldens.playersOnRemove`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(player, key, this)`
- Emitted at: lib/game/client/room-events.js:L281
