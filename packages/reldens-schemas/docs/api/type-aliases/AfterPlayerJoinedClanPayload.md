# Type Alias: AfterPlayerJoinedClanPayload

```ts
type AfterPlayerJoinedClanPayload = {
  clan: unknown;
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
clan: unknown;
```

***

### playerJoining

```ts
playerJoining: PlayerState;
```
