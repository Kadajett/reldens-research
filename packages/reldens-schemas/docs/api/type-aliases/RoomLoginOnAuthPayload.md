# Type Alias: RoomLoginOnAuthPayload

```ts
type RoomLoginOnAuthPayload = {
  client: Client;
  loginResult: unknown;
  options: unknown;
  request: unknown;
  result: string;
  roomLogin: RoomLogin;
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
client: Client;
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
result: string;
```

***

### roomLogin

```ts
roomLogin: RoomLogin;
```
