# Type Alias: BeforeGiveRewardsPayload

```ts
type BeforeGiveRewardsPayload = {
  continueEvent: boolean;
  playerSchema: object;
  targetObject: object;
};
```

`reldens.beforeGiveRewards`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `continueEvent, playerSchema, targetObject`
- Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L52

## Properties

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

### targetObject

```ts
targetObject: object;
```
