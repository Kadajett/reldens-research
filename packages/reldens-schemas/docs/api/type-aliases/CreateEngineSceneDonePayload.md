# Type Alias: CreateEngineSceneDonePayload

```ts
type CreateEngineSceneDonePayload = {
  currentScene: SceneDynamic;
  previousScene: string | boolean;
  roomEvents: RoomEvents;
};
```

`reldens.createEngineSceneDone`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `currentScene, previousScene, roomEvents`
- Emitted at: lib/game/client/room-events.js:L877

## Properties

### currentScene

```ts
currentScene: SceneDynamic;
```

***

### previousScene

```ts
previousScene: string | boolean;
```

***

### roomEvents

```ts
roomEvents: RoomEvents;
```
