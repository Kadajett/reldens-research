# Type Alias: RunBattlePveAfterPayload

```ts
type RunBattlePveAfterPayload = {
  attackResult: object;
  playerSchema: PlayerState;
  roomScene: RoomScene;
  target: object;
};
```

`reldens.runBattlePveAfter`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `attackResult, playerSchema, roomScene, target`
- Emitted at: lib/actions/server/pve.js:L82

## Properties

### attackResult

```ts
attackResult: object;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### roomScene

```ts
roomScene: RoomScene;
```

***

### target

```ts
target: object;
```
