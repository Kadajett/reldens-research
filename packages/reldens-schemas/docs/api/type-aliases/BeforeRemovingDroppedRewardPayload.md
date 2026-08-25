# Type Alias: BeforeRemovingDroppedRewardPayload

```ts
type BeforeRemovingDroppedRewardPayload = {
  client: object;
  continueEvent: boolean;
  playerSchema: object;
  room: object;
  roomObject: object;
};
```

`reldens.beforeRemovingDroppedReward`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `client, continueEvent, playerSchema, room, roomObject`
- Emitted at: lib/rewards/server/reward-message-actions.js:L61

## Properties

### client

```ts
client: object;
```

***

### continueEvent

```ts
continueEvent: boolean;
```

***

### playerSchema

```ts
playerSchema: object;
```

***

### room

```ts
room: object;
```

***

### roomObject

```ts
roomObject: object;
```
