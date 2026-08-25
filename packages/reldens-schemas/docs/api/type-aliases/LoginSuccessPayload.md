# Type Alias: LoginSuccessPayload

```ts
type LoginSuccessPayload = [LoginManager, UsersModel, object, object];
```

`reldens.loginSuccess`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L391
