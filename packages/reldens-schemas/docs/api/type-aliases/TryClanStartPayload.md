# Type Alias: TryClanStartPayload

```ts
type TryClanStartPayload = {
  client: Client;
  continueStart: boolean;
  data: object;
  playerSchema: PlayerState;
  room: RoomScene;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.tryClanStart`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/try-clan-invite.js:L69

## Properties

### client

```ts
client: Client;
```

***

### continueStart

```ts
continueStart: boolean;
```

***

### data

```ts
data: object;
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

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
