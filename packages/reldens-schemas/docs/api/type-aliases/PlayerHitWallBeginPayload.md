# Type Alias: PlayerHitWallBeginPayload

```ts
type PlayerHitWallBeginPayload = {
  playerBody: object;
  wallBody: object;
};
```

`reldens.playerHitWallBegin`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerBody, wallBody`
- Emitted at: lib/world/server/collisions-manager.js:L296

## Properties

### playerBody

```ts
playerBody: object;
```

***

### wallBody

```ts
wallBody: object;
```
