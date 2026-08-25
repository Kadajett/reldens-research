# Type Alias: AfterTeamLeavePayload

```ts
type AfterTeamLeavePayload = {
  currentTeam: unknown;
  leavingPlayerName: unknown;
};
```

`reldens.afterTeamLeave`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `currentTeam, leavingPlayerName`
- Emitted at: lib/teams/server/message-actions/team-leave.js:L95

## Properties

### currentTeam

```ts
currentTeam: unknown;
```

***

### leavingPlayerName

```ts
leavingPlayerName: unknown;
```
