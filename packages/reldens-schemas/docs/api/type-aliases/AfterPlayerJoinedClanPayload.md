# Type Alias: AfterPlayerJoinedClanPayload

```ts
type AfterPlayerJoinedClanPayload = {
  clan: object;
  playerJoining: PlayerState;
};
```

`reldens.afterPlayerJoinedClan`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `clan, playerJoining`
- Emitted at: lib/teams/server/message-actions/clan-join.js:L72

## Properties

### clan

```ts
clan: object;
```

***

### playerJoining

```ts
playerJoining: PlayerState;
```
