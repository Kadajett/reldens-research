# Type Alias: ProcessForgotPasswordPayload

```ts
type ProcessForgotPasswordPayload = [LoginManager, object, object];
```

`reldens.processForgotPassword`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, userData, sendResult)`
- Emitted at: lib/game/server/login-manager.js:L679
