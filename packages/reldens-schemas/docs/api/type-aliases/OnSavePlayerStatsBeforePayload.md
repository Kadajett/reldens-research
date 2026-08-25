# Type Alias: OnSavePlayerStatsBeforePayload

```ts
type OnSavePlayerStatsBeforePayload = {
  client: Client;
  objectState: unknown;
  playerSchema: unknown;
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
objectState: unknown;
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
