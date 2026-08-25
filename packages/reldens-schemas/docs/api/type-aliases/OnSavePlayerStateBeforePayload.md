# Type Alias: OnSavePlayerStateBeforePayload

```ts
type OnSavePlayerStateBeforePayload = {
  playerId: unknown;
  playerSchema: unknown;
  room: RoomScene;
  updatePatch: unknown;
  updateReady: unknown;
};
```

`reldens.onSavePlayerStateBefore`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `playerId, playerSchema, room, updatePatch, updateReady`
- Emitted at: lib/rooms/server/scene.js:L719

## Properties

### playerId

```ts
playerId: unknown;
```

***

### playerSchema

```ts
playerSchema: unknown;
```

***

### room

```ts
room: RoomScene;
```

***

### updatePatch

```ts
updatePatch: unknown;
```

***

### updateReady

```ts
updateReady: unknown;
```
