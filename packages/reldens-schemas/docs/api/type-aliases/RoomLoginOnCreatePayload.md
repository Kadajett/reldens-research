# Type Alias: RoomLoginOnCreatePayload

```ts
type RoomLoginOnCreatePayload = {
  options: unknown;
  roomLogin: RoomLogin;
};
```

`reldens.roomLoginOnCreate`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `options, roomLogin`
- Emitted at: lib/rooms/server/login.js:L58

## Properties

### options

```ts
options: unknown;
```

***

### roomLogin

```ts
roomLogin: RoomLogin;
```
