# Type Alias: PlayerNewNameUnavailablePayload

```ts
type PlayerNewNameUnavailablePayload = [LoginManager, object, boolean, {
  error: boolean;
  message: string;
}];
```

`reldens.playerNewNameUnavailable`
- Zone: server
- Dispatch: emit (awaited)
- Payload: positional arguments `(this, loginData, isNameAvailable, result)`
- Emitted at: lib/game/server/login-manager.js:L557
