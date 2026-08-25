# Type Alias: OnSavePlayerStateBeforePayload

```ts
type OnSavePlayerStateBeforePayload = {
  playerId: number;
  playerSchema: PlayerState;
  room: RoomScene;
  updatePatch: object;
  updateReady: {
     continueUpdate: boolean;
  };
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
playerId: number;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### room

```ts
room: RoomScene;
```

***

### updatePatch

```ts
updatePatch: object;
```

***

### updateReady

```ts
updateReady: {
  continueUpdate: boolean;
};
```

#### continueUpdate

```ts
continueUpdate: boolean;
```
