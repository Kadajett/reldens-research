# Type Alias: EndPlayerHitChangePointPayload

```ts
type EndPlayerHitChangePointPayload = {
  changeData: object;
  changePoint: object;
  collisionsManager: CollisionsManager;
  playerBody: object;
  playerSchema: PlayerState;
};
```

`reldens.endPlayerHitChangePoint`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `changeData, changePoint, collisionsManager, playerBody, playerSchema`
- Emitted at: lib/world/server/collisions-manager.js:L364

## Properties

### changeData

```ts
changeData: object;
```

***

### changePoint

```ts
changePoint: object;
```

***

### collisionsManager

```ts
collisionsManager: CollisionsManager;
```

***

### playerBody

```ts
playerBody: object;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```
