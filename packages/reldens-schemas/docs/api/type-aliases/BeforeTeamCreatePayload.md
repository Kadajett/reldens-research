# Type Alias: BeforeTeamCreatePayload

```ts
type BeforeTeamCreatePayload = {
  continueBeforeCreate: boolean;
  teamProps: object;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeTeamCreate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueBeforeCreate, teamProps, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/team-join.js:L63

## Properties

### continueBeforeCreate

```ts
continueBeforeCreate: boolean;
```

***

### teamProps

```ts
teamProps: object;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
