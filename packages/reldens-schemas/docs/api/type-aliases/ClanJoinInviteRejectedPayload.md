# Type Alias: ClanJoinInviteRejectedPayload

```ts
type ClanJoinInviteRejectedPayload = {
  clanInvite: unknown;
  clientSendingInvite: unknown;
  playerRejectingName: unknown;
};
```

`reldens.clanJoinInviteRejected`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `clanInvite, clientSendingInvite, playerRejectingName`
- Emitted at: lib/teams/server/clan-message-actions.js:L75

## Properties

### clanInvite

```ts
clanInvite: unknown;
```

***

### clientSendingInvite

```ts
clientSendingInvite: unknown;
```

***

### playerRejectingName

```ts
playerRejectingName: unknown;
```
