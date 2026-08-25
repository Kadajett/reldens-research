# Type Alias: OnSavePlayerStatsBeforePayload

```ts
type OnSavePlayerStatsBeforePayload = {
  client: unknown;
  objectState: unknown;
  playerSchema: unknown;
  room: unknown;
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
client: unknown;
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
room: unknown;
```
