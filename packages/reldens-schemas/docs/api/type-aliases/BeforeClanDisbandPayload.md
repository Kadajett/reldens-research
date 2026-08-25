# Type Alias: BeforeClanDisbandPayload

```ts
type BeforeClanDisbandPayload = {
  continueDisband: boolean;
  playerSchema: PlayerState;
  singleRemoveId: number | string;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeClanDisband`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueDisband, playerSchema, singleRemoveId, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-leave.js:L97

## Properties

### continueDisband

```ts
continueDisband: boolean;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### singleRemoveId

```ts
singleRemoveId: number | string;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
