# Type Alias: BeforeTeamCreatePayload

```ts
type BeforeTeamCreatePayload = {
  continueBeforeCreate: unknown;
  teamProps: unknown;
  teamsPlugin: unknown;
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
continueBeforeCreate: unknown;
```

***

### teamProps

```ts
teamProps: unknown;
```

***

### teamsPlugin

```ts
teamsPlugin: unknown;
```
