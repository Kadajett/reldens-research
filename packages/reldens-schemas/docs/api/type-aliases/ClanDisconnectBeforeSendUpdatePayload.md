# Type Alias: ClanDisconnectBeforeSendUpdatePayload

```ts
type ClanDisconnectBeforeSendUpdatePayload = {
  playerId: number;
  playerSchema: PlayerState;
  sendUpdate: object;
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

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
