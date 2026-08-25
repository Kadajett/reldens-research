# Type Alias: BeforeEnrichPlayerWithClanPayload

```ts
type BeforeEnrichPlayerWithClanPayload = {
  client: object;
  continueProcess: boolean;
  playerSchema: PlayerState;
  room: RoomScene;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeEnrichPlayerWithClan`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
- Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L49

## Properties

### client

```ts
client: object;
```

***

### continueProcess

```ts
continueProcess: boolean;
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
