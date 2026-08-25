# Type Alias: RunBattlePveAfterPayload

```ts
type RunBattlePveAfterPayload = {
  attackResult: unknown;
  playerSchema: Player;
  roomScene: RoomScene;
  target: Player;
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
attackResult: unknown;
```

***

### playerSchema

```ts
playerSchema: Player;
```

***

### roomScene

```ts
roomScene: RoomScene;
```

***

### target

```ts
target: Player;
```
