# Type Alias: OpenUIPayload

```ts
type OpenUIPayload = {
  box?: unknown;
  dialogBox?: unknown;
  dialogContainer?: unknown;
  minimap?: unknown;
  openButton: unknown;
  ui: unknown;
  uiScene?: unknown;
};
```

`reldens.openUI`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `openButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, uiScene)
- Emitted at: lib/chat/client/chat-ui.js:L156, lib/game/client/user-interface.js:L155, lib/game/client/ui-factory.js:L56, lib/game/client/settings-ui.js:L51, lib/game/client/instructions-ui.js:L44, lib/game/client/minimap-ui.js:L77, lib/users/client/player-stats-ui.js:L49

## Properties

### box?

```ts
optional box?: unknown;
```

***

### dialogBox?

```ts
optional dialogBox?: unknown;
```

***

### dialogContainer?

```ts
optional dialogContainer?: unknown;
```

***

### minimap?

```ts
optional minimap?: unknown;
```

***

### openButton

```ts
openButton: unknown;
```

***

### ui

```ts
ui: unknown;
```

***

### uiScene?

```ts
optional uiScene?: unknown;
```
