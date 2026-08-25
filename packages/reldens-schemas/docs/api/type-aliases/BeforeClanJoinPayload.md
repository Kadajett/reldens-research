# Type Alias: BeforeClanJoinPayload

```ts
type BeforeClanJoinPayload = {
  clanToJoin: object;
  continueBeforeJoin: boolean;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeClanJoin`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `clanToJoin, continueBeforeJoin, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-join.js:L42

## Properties

### clanToJoin

```ts
clanToJoin: object;
```

***

### continueBeforeJoin

```ts
continueBeforeJoin: boolean;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
