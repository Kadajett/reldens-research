# Type Alias: CreateCurrentPlayerPayload

```ts
type CreateCurrentPlayerPayload = {
  key: string;
  player: unknown;
  previousScene: string | boolean;
  roomEvents: RoomEvents;
};
```

`reldens.createCurrentPlayer`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `key, player, previousScene, roomEvents`
- Emitted at: lib/prediction/client/room-events-override.js:L41, lib/game/client/room-events.js:L232

## Properties

### key

```ts
key: string;
```

***

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
