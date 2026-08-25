# Type Alias: AfterEnrichPlayerWithLocalePayload

```ts
type AfterEnrichPlayerWithLocalePayload = {
  client: Client;
  roomGame: RoomGame;
  superInitialGameData: object;
  userModel: UsersModel;
};
```

`reldens.afterEnrichPlayerWithLocale`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, roomGame, superInitialGameData, userModel`
- Emitted at: lib/snippets/server/initial-game-data-enricher.js:L39

## Properties

### client

```ts
client: Client;
```

***

### roomGame

```ts
roomGame: RoomGame;
```

***

### superInitialGameData

```ts
superInitialGameData: object;
```

***

### userModel

```ts
userModel: UsersModel;
```
