# Type Alias: CreatePreloadPayload

```ts
type CreatePreloadPayload = [ScenePreloader, object];
```

`reldens.createPreload`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: positional arguments `(this, eventUiScene)`
- Emitted at: lib/game/client/scene-preloader.js:L206
