# Type Alias: BeforePreloadPayload

```ts
type BeforePreloadPayload = [ScenePreloader, object];
```

`reldens.beforePreload`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, eventUiScene)`
- Emitted at: lib/game/client/scene-preloader.js:L81
