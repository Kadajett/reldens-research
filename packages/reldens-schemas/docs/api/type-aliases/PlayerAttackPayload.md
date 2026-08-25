# Type Alias: PlayerAttackPayload

```ts
type PlayerAttackPayload = [object, RoomScene];
```

`reldens.playerAttack`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(message, this.room)`
- Emitted at: lib/actions/client/receiver-wrapper.js:L104
