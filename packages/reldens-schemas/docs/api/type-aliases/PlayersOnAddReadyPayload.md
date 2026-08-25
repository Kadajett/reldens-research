# Type Alias: PlayersOnAddReadyPayload

```ts
type PlayersOnAddReadyPayload = {
  player: unknown;
  previousScene: string | boolean;
  roomEvents: RoomEvents;
};
```

`reldens.playersOnAddReady`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `player, previousScene, roomEvents`
- Emitted at: lib/game/client/room-events.js:L875

## Properties

### player

```ts
player: unknown;
```

***

### previousScene

```ts
previousScene: string | boolean;
```

***

### roomEvents

```ts
roomEvents: RoomEvents;
```
