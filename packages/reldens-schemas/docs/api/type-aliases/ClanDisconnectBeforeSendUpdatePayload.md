# Type Alias: ClanDisconnectBeforeSendUpdatePayload

```ts
type ClanDisconnectBeforeSendUpdatePayload = {
  playerId: unknown;
  playerSchema: PlayerState;
  sendUpdate: unknown;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.clanDisconnectBeforeSendUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerId, playerSchema, sendUpdate, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-disconnect.js:L56

## Properties

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

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
