# Type Alias: ClanDisconnectAfterSendUpdatePayload

```ts
type ClanDisconnectAfterSendUpdatePayload = {
  continueLeave: boolean;
  playerSchema: PlayerState;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.clanDisconnectAfterSendUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueLeave, playerSchema, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L72

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

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
