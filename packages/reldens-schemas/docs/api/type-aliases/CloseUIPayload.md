# Type Alias: CloseUIPayload

```ts
type CloseUIPayload = {
  box?: object;
  closeButton: boolean;
  dialogBox?: object;
  dialogContainer?: object;
  minimap?: Minimap;
  openButton?: boolean;
  ui: ChatUi;
  uiScene?: object;
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
optional box?: object;
```

***

### closeButton

```ts
closeButton: boolean;
```

***

### dialogBox?

```ts
optional dialogBox?: object;
```

***

### dialogContainer?

```ts
optional dialogContainer?: object;
```

***

### minimap?

```ts
optional minimap?: Minimap;
```

***

### openButton?

```ts
optional openButton?: boolean;
```

***

### ui

```ts
ui: ChatUi;
```

***

### uiScene?

```ts
optional uiScene?: object;
```
