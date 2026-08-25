# Type Alias: TeamLeavePayload

```ts
type TeamLeavePayload = {
  data: unknown;
  playerSchema: PlayerState;
  room: RoomScene;
  teamsPlugin: TeamsPlugin;
};
```

`reldens.teamLeave`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `data, playerSchema, room, teamsPlugin`
- Emitted at: lib/teams/server/message-actions/team-leave.js:L31

## Properties

### data

```ts
data: unknown;
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

### teamsPlugin

```ts
teamsPlugin: TeamsPlugin;
```
