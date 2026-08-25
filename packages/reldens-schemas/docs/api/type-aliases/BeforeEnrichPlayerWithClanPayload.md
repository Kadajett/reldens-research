# Type Alias: BeforeEnrichPlayerWithClanPayload

```ts
type BeforeEnrichPlayerWithClanPayload = {
  client: unknown;
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
client: unknown;
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
