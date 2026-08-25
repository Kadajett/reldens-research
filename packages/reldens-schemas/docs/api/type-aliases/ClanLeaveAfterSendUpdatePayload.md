# Type Alias: ClanLeaveAfterSendUpdatePayload

```ts
type ClanLeaveAfterSendUpdatePayload = {
  continueLeave: boolean;
  playerSchema: PlayerState;
  singleRemoveId: number | string;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.clanLeaveAfterSendUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueLeave, playerSchema, singleRemoveId, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-leave.js:L106

## Properties

### continueLeave

```ts
continueLeave: boolean;
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
