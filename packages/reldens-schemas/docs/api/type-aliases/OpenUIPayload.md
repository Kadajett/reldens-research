# Type Alias: OpenUIPayload

```ts
type OpenUIPayload = {
  box?: object;
  dialogBox?: object;
  dialogContainer?: object;
  minimap?: Minimap;
  openButton: boolean;
  ui: ChatUi;
  uiScene?: object;
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
optional box?: object;
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

### openButton

```ts
openButton: boolean;
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
