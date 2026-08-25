# Type Alias: BeforePreloadPayload

```ts
type BeforePreloadPayload = [unknown, unknown];
```

`reldens.beforePreload`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, eventUiScene)`
- Emitted at: lib/game/client/scene-preloader.js:L81
