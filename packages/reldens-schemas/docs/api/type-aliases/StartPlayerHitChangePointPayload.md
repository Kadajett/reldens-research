# Type Alias: StartPlayerHitChangePointPayload

```ts
type StartPlayerHitChangePointPayload = {
  changePoint: object;
  collisionsManager: CollisionsManager;
  playerBody: object;
};
```

`reldens.startPlayerHitChangePoint`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `changePoint, collisionsManager, playerBody`
- Emitted at: lib/world/server/collisions-manager.js:L330

## Properties

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
