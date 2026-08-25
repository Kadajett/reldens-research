# Type Alias: InvalidDataPayload

```ts
type InvalidDataPayload = [LoginManager, object, {
  error: string;
}];
```

`reldens.invalidData`
- Zone: server
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, userData, result)`
- Emitted at: lib/game/server/login-manager.js:L289
