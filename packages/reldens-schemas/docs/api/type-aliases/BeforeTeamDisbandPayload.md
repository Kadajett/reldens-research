# Type Alias: BeforeTeamDisbandPayload

```ts
type BeforeTeamDisbandPayload = {
  continueDisband?: boolean;
  continueLeave?: boolean;
  playerSchema: PlayerState;
  room: RoomScene;
  singleRemoveId: number;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.beforeTeamDisband`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerSchema, room, singleRemoveId, teamsPlugin` (sometimes: continueDisband, continueLeave)
- Emitted at: lib/teams/server/message-actions/team-leave.js:L99, lib/teams/server/message-actions/team-leave.js:L107

## Properties

### continueDisband?

```ts
optional continueDisband?: boolean;
```

***

### continueLeave?

```ts
optional continueLeave?: boolean;
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

### singleRemoveId

```ts
singleRemoveId: number;
```

***

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
