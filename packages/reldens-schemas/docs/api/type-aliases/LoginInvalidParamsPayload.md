# Type Alias: LoginInvalidParamsPayload

```ts
type LoginInvalidParamsPayload = [LoginManager, UsersModel, object, {
  error: string;
}];
```

`reldens.loginInvalidParams`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L307
