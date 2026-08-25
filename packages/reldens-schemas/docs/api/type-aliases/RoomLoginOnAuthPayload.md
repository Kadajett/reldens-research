# Type Alias: RoomLoginOnAuthPayload

```ts
type RoomLoginOnAuthPayload = {
  client: unknown;
  loginResult: unknown;
  options: unknown;
  request: unknown;
  result: unknown;
  roomLogin: unknown;
};
```

`reldens.roomLoginOnAuth`
Custom authentication hook. Setting props.result.confirm = false denies the login. Shape read from the platform's own project template, which is the only place it is shown.
[EXTRACTED] theme/index.js.dist:L49 - props.loginResult.user.role_id / props.result.confirm = false

- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `client, loginResult, options, request, result, roomLogin`
- Emitted at: lib/rooms/server/login.js:L94

## Properties

### client

```ts
client: unknown;
```

***

### loginResult

```ts
loginResult: unknown;
```

***

### options

```ts
options: unknown;
```

***

### request

```ts
request: unknown;
```

***

### result

```ts
result: unknown;
```

***

### roomLogin

```ts
roomLogin: unknown;
```
