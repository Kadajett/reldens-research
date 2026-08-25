# Type Alias: DisconnectLoggedBeforePayload

```ts
type DisconnectLoggedBeforePayload = {
  client: Client;
  player: unknown;
  room: RoomScene;
  userModel: UsersModel;
};
```

`reldens.disconnectLoggedBefore`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, player, room, userModel`
- Emitted at: lib/rooms/server/scene.js:L175

## Properties

### client

```ts
client: Client;
```

***

### player

```ts
player: unknown;
```

***

### room

```ts
room: RoomScene;
```

***

### userModel

```ts
userModel: UsersModel;
```
