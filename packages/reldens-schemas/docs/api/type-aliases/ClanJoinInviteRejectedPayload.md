# Type Alias: ClanJoinInviteRejectedPayload

```ts
type ClanJoinInviteRejectedPayload = {
  clanInvite: object;
  clientSendingInvite: Client;
  playerRejectingName: string;
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
clanInvite: object;
```

***

### clientSendingInvite

```ts
clientSendingInvite: Client;
```

***

### playerRejectingName

```ts
playerRejectingName: string;
```
