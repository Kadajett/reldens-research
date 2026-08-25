# Type Alias: PlayerLeftScenePayload

```ts
type PlayerLeftScenePayload = {
  code: number;
  roomEvents: RoomEvents;
};
```

`reldens.playerLeftScene`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `code, roomEvents`
- Emitted at: lib/game/client/room-events.js:L589

## Properties

### code

```ts
code: number;
```

***

### roomEvents

```ts
roomEvents: RoomEvents;
```
