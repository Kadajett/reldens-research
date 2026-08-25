# Type Alias: ClanLeaveBeforeSendUpdatePayload

```ts
type ClanLeaveBeforeSendUpdatePayload = {
  currentClan: object;
  disbandClan: boolean;
  playerId: number;
  playerSchema: PlayerState;
  sendUpdate: object;
  singleRemoveId: number;
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
currentClan: object;
```

***

### disbandClan

```ts
disbandClan: boolean;
```

***

### playerId

```ts
playerId: number;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### sendUpdate

```ts
sendUpdate: object;
```

***

### singleRemoveId

```ts
singleRemoveId: number;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
