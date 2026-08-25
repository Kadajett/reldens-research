# Type Alias: BeforeTeamDisbandPayload

```ts
type BeforeTeamDisbandPayload = {
  continueDisband?: unknown;
  continueLeave?: unknown;
  playerSchema: unknown;
  room: unknown;
  singleRemoveId: unknown;
  teamsPlugin: unknown;
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
optional continueDisband?: unknown;
```

***

### continueLeave?

```ts
optional continueLeave?: unknown;
```

***

### playerSchema

```ts
playerSchema: unknown;
```

***

### room

```ts
room: unknown;
```

***

### singleRemoveId

```ts
singleRemoveId: unknown;
```

***

### teamsPlugin

```ts
teamsPlugin: unknown;
```
