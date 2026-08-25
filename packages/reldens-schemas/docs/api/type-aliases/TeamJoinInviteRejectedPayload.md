# Type Alias: TeamJoinInviteRejectedPayload

```ts
type TeamJoinInviteRejectedPayload = {
  playerRejectingName: unknown;
  playerSendingInvite: unknown;
};
```

`reldens.teamJoinInviteRejected`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerRejectingName, playerSendingInvite`
- Emitted at: lib/teams/server/team-message-actions.js:L61

## Properties

### playerRejectingName

```ts
playerRejectingName: unknown;
```

***

### playerSendingInvite

```ts
playerSendingInvite: unknown;
```
