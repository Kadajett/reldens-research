# Type Alias: OnSavePlayerStatsBeforePayload

```ts
type OnSavePlayerStatsBeforePayload = {
  client: Client;
  objectState: {
     updateReady: boolean;
  };
  playerSchema: PlayerState;
  room: RoomScene;
};
```

`reldens.onSavePlayerStatsBefore`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `client, objectState, playerSchema, room`
- Emitted at: lib/rooms/server/scene.js:L748

## Properties

### client

```ts
client: Client;
```

***

### objectState

```ts
objectState: {
  updateReady: boolean;
};
```

#### updateReady

```ts
updateReady: boolean;
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
