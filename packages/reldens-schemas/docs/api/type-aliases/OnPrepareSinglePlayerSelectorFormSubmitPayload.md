# Type Alias: OnPrepareSinglePlayerSelectorFormSubmitPayload

```ts
type OnPrepareSinglePlayerSelectorFormSubmitPayload = {
  form: HTMLFormElement;
  gameManager: object;
  player: object;
  selectElement: HTMLInputElement;
  usersPlugin: UsersPlugin;
};
```

`reldens.onPrepareSinglePlayerSelectorFormSubmit`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `form, gameManager, player, selectElement, usersPlugin`
- Emitted at: lib/users/client/plugin.js:L196

## Properties

### form

```ts
form: HTMLFormElement;
```

***

### gameManager

```ts
gameManager: object;
```

***

### player

```ts
player: object;
```

***

### selectElement

```ts
selectElement: HTMLInputElement;
```

***

### usersPlugin

```ts
usersPlugin: UsersPlugin;
```
