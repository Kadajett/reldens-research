# Type Alias: TryTeamStartPayload

```ts
type TryTeamStartPayload = {
  client: Client;
  continueStart: boolean;
  data: object;
  playerSchema: PlayerState;
  room: RoomScene;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.tryTeamStart`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, continueStart, data, playerSchema, room, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/try-team-start.js:L47

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
