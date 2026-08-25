# Type Alias: GuestLoginInvalidParamsPayload

```ts
type GuestLoginInvalidParamsPayload = [LoginManager, UsersModel, object, {
  error: string;
}];
```

`reldens.guestLoginInvalidParams`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L295
