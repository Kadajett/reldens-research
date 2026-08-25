# Type Alias: LoginInvalidPasswordPayload

```ts
type LoginInvalidPasswordPayload = [LoginManager, UsersModel, object, {
  error: string;
}];
```

`reldens.loginInvalidPassword`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L380
