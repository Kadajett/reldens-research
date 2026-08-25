# Type Alias: ClanLeaveBeforeSendUpdatePayload

```ts
type ClanLeaveBeforeSendUpdatePayload = {
  currentClan: unknown;
  disbandClan: unknown;
  playerId: unknown;
  playerSchema: PlayerState;
  sendUpdate: unknown;
  singleRemoveId: number | string;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.clanLeaveBeforeSendUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `currentClan, disbandClan, playerId, playerSchema, sendUpdate, singleRemoveId, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-leave.js:L81

## Properties

### currentClan

```ts
currentClan: unknown;
```

***

### disbandClan

```ts
disbandClan: unknown;
```

***

### playerId

```ts
playerId: unknown;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### sendUpdate

```ts
sendUpdate: unknown;
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
