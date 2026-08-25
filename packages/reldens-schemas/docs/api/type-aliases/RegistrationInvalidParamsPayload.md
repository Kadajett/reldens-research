# Type Alias: RegistrationInvalidParamsPayload

```ts
type RegistrationInvalidParamsPayload = [LoginManager, UsersModel, object, {
  error: string;
}];
```

`reldens.registrationInvalidParams`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L313
