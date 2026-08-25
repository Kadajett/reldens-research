# Type Alias: RemovePlayerBeforePayload

```ts
type RemovePlayerBeforePayload = {
  playerSchema: PlayerState;
  room: RoomScene;
  stateObject: {
     isRemoveReady: boolean;
  };
};
```

`reldens.removePlayerBefore`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerSchema, room, stateObject`
- Emitted at: lib/rooms/server/scene.js:L662

## Properties

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

### stateObject

```ts
stateObject: {
  isRemoveReady: boolean;
};
```

#### isRemoveReady

```ts
isRemoveReady: boolean;
```
