# Type Alias: BeforeClanUpdatePlayersPayload

```ts
type BeforeClanUpdatePlayersPayload = {
  clanToJoin: object;
  continueBeforeJoinUpdate: boolean;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeClanUpdatePlayers`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `clanToJoin, continueBeforeJoinUpdate, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-join.js:L66

## Properties

### clanToJoin

```ts
clanToJoin: object;
```

***

### continueBeforeJoinUpdate

```ts
continueBeforeJoinUpdate: boolean;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
