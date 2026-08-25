# Type Alias: AfterGiveRewardsPayload

```ts
type AfterGiveRewardsPayload = {
  itemRewards: object[];
  playerSchema: object;
  targetObject: object;
  winningRewards: object;
};
```

`reldens.afterGiveRewards`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `itemRewards, playerSchema, targetObject, winningRewards`
- Emitted at: lib/rewards/server/subscribers/rewards-subscriber.js:L79

## Properties

### itemRewards

```ts
itemRewards: object[];
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

***

### winningRewards

```ts
winningRewards: object;
```
