# Type Alias: ClanLeavePayload

```ts
type ClanLeavePayload = {
  message: unknown;
  playerSchema: PlayerState;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.clanLeave`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `message, playerSchema, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/clan-leave.js:L29

## Properties

### message

```ts
message: unknown;
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
