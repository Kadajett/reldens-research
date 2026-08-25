# Type Alias: AfterTeamLeavePayload

```ts
type AfterTeamLeavePayload = {
  currentTeam: object;
  leavingPlayerName: string;
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
currentTeam: object;
```

***

### leavingPlayerName

```ts
leavingPlayerName: string;
```
