# Type Alias: TeamLeaveBeforeSendUpdatePayload

```ts
type TeamLeaveBeforeSendUpdatePayload = {
  areLessPlayerThanRequired: boolean;
  currentTeam: object;
  isOwnerDisbanding: boolean;
  playerId: number;
  playerSchema: PlayerState;
  room: RoomScene;
  sendUpdate: object;
  singleRemoveId: number;
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
areLessPlayerThanRequired: boolean;
```

***

### currentTeam

```ts
currentTeam: object;
```

***

### isOwnerDisbanding

```ts
isOwnerDisbanding: boolean;
```

***

### playerId

```ts
playerId: number;
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
sendUpdate: object;
```

***

### singleRemoveId

```ts
singleRemoveId: number;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
