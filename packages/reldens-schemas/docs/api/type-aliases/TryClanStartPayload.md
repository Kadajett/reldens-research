# Type Alias: TryClanStartPayload

```ts
type TryClanStartPayload = {
  client: unknown;
  continueStart: boolean;
  data: unknown;
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
client: unknown;
```

***

### continueStart

```ts
continueStart: boolean;
```

***

### data

```ts
data: unknown;
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
