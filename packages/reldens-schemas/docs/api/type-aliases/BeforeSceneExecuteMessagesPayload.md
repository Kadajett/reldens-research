# Type Alias: BeforeSceneExecuteMessagesPayload

```ts
type BeforeSceneExecuteMessagesPayload = {
  canContinue: boolean;
  client: Client;
  messageData: object;
  playerSchema: PlayerState;
  room: RoomScene;
};
```

`reldens.beforeSceneExecuteMessages`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `canContinue, client, messageData, playerSchema, room`
- Emitted at: lib/rooms/server/scene.js:L449

## Properties

### canContinue

```ts
canContinue: boolean;
```

***

### client

```ts
client: Client;
```

***

### messageData

```ts
messageData: object;
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
