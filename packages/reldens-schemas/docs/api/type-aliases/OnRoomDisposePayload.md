# Type Alias: OnRoomDisposePayload

```ts
type OnRoomDisposePayload = {
  result: unknown;
  roomId: unknown;
  roomName: unknown;
};
```

`reldens.onRoomDispose`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `result, roomId, roomName`
- Emitted at: lib/rooms/server/login.js:L298

## Properties

### result

```ts
result: unknown;
```

***

### roomId

```ts
roomId: unknown;
```

***

### roomName

```ts
roomName: unknown;
```
