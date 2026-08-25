# Type Alias: AfterPlayerJoinedTeamPayload

```ts
type AfterPlayerJoinedTeamPayload = {
  currentTeam: unknown;
  playerJoining: PlayerState;
};
```

`reldens.afterPlayerJoinedTeam`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `currentTeam, playerJoining`
- Emitted at: lib/teams/server/message-actions/team-join.js:L85

## Properties

### currentTeam

```ts
currentTeam: unknown;
```

***

### playerJoining

```ts
playerJoining: PlayerState;
```
