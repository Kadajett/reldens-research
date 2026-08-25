# Type Alias: BeforeEnrichPlayerWithClanUpdatePayload

```ts
type BeforeEnrichPlayerWithClanUpdatePayload = {
  client: object;
  continueProcess: boolean;
  playerSchema: PlayerState;
  room: RoomScene;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeEnrichPlayerWithClanUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, continueProcess, playerSchema, room, teamsPlugin`
- Emitted at: lib/teams/server/event-handlers/create-player-clan-handler.js:L71

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
