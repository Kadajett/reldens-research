# Type Alias: OnPreparePlayerSelectorFormSubmitPayload

```ts
type OnPreparePlayerSelectorFormSubmitPayload = {
  form: HTMLFormElement;
  gameManager: GameManager;
  select: HTMLSelectElement;
  selectedPlayer: unknown;
  usersPlugin: UsersPlugin;
};
```

`reldens.onPreparePlayerSelectorFormSubmit`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `form, gameManager, select, selectedPlayer, usersPlugin`
- Emitted at: lib/users/client/plugin.js:L265

## Properties

### form

```ts
form: HTMLFormElement;
```

***

### gameManager

```ts
gameManager: GameManager;
```

***

### select

```ts
select: HTMLSelectElement;
```

***

### selectedPlayer

```ts
selectedPlayer: unknown;
```

***

### usersPlugin

```ts
usersPlugin: UsersPlugin;
```
