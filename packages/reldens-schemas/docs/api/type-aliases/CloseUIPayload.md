# Type Alias: CloseUIPayload

```ts
type CloseUIPayload = {
  box?: unknown;
  closeButton: unknown;
  dialogBox?: unknown;
  dialogContainer?: unknown;
  minimap?: unknown;
  openButton?: unknown;
  ui: unknown;
  uiScene?: unknown;
};
```

`reldens.closeUI`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `closeButton, ui` (sometimes: box, dialogBox, dialogContainer, minimap, openButton, uiScene)
- Emitted at: lib/chat/client/chat-ui.js:L170, lib/game/client/user-interface.js:L193, lib/game/client/ui-factory.js:L75, lib/game/client/settings-ui.js:L62, lib/game/client/instructions-ui.js:L53, lib/game/client/minimap-ui.js:L98, lib/users/client/player-stats-ui.js:L59

## Properties

### box?

```ts
optional box?: unknown;
```

***

### closeButton

```ts
closeButton: unknown;
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

### openButton?

```ts
optional openButton?: unknown;
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
