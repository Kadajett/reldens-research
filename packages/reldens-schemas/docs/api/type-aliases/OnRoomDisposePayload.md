# Type Alias: OnRoomDisposePayload

```ts
type OnRoomDisposePayload = {
  result: {
     confirm: boolean;
  };
  roomId: number;
  roomName: string;
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
result: {
  confirm: boolean;
};
```

#### confirm

```ts
confirm: boolean;
```

***

### roomId

```ts
roomId: number;
```

***

### roomName

```ts
roomName: string;
```
