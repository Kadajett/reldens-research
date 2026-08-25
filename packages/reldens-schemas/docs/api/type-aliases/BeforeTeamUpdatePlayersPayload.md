# Type Alias: BeforeTeamUpdatePlayersPayload

```ts
type BeforeTeamUpdatePlayersPayload = {
  continueBeforeJoinUpdate: boolean;
  currentTeam: unknown;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeTeamUpdatePlayers`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueBeforeJoinUpdate, currentTeam, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/team-join.js:L79

## Properties

### continueBeforeJoinUpdate

```ts
continueBeforeJoinUpdate: boolean;
```

***

### currentTeam

```ts
currentTeam: unknown;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
