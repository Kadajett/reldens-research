# Type Alias: RunGameOverPayload

```ts
type RunGameOverPayload = {
  defaultBehavior: boolean;
  message: object;
  roomEvents: RoomEvents;
};
```

`reldens.runGameOver`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `defaultBehavior, message, roomEvents`
- Emitted at: lib/game/client/room-events.js:L510

## Properties

### defaultBehavior

```ts
defaultBehavior: boolean;
```

***

### message

```ts
message: object;
```

***

### roomEvents

```ts
roomEvents: RoomEvents;
```
