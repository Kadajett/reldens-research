# Type Alias: LoginInvalidRolePayload

```ts
type LoginInvalidRolePayload = [LoginManager, UsersModel, object, {
  error: string;
}];
```

`reldens.loginInvalidRole`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, user, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L374
