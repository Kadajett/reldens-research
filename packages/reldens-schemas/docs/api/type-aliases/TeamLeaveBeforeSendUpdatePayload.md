# Type Alias: TeamLeaveBeforeSendUpdatePayload

```ts
type TeamLeaveBeforeSendUpdatePayload = {
  areLessPlayerThanRequired: unknown;
  currentTeam: unknown;
  isOwnerDisbanding: unknown;
  playerId: unknown;
  playerSchema: PlayerState;
  room: RoomScene;
  sendUpdate: unknown;
  singleRemoveId: number | string | boolean;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.teamLeaveBeforeSendUpdate`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `areLessPlayerThanRequired, currentTeam, isOwnerDisbanding, playerId, playerSchema, room, sendUpdate, singleRemoveId, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/team-leave.js:L80

## Properties

### areLessPlayerThanRequired

```ts
areLessPlayerThanRequired: unknown;
```

***

### currentTeam

```ts
currentTeam: unknown;
```

***

### isOwnerDisbanding

```ts
isOwnerDisbanding: unknown;
```

***

### playerId

```ts
playerId: unknown;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### room

```ts
room: RoomScene;
```

***

### sendUpdate

```ts
sendUpdate: unknown;
```

***

### singleRemoveId

```ts
singleRemoveId: number | string | boolean;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
