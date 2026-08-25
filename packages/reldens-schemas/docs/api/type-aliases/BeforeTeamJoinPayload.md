# Type Alias: BeforeTeamJoinPayload

```ts
type BeforeTeamJoinPayload = {
  continueBeforeJoin: boolean;
  currentTeam: object;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeTeamJoin`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueBeforeJoin, currentTeam, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/team-join.js:L70

## Properties

### continueBeforeJoin

```ts
continueBeforeJoin: boolean;
```

***

### currentTeam

```ts
currentTeam: object;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
