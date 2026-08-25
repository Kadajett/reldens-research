# Type Alias: OnPreparePlayerSelectorFormSubmitPayload

```ts
type OnPreparePlayerSelectorFormSubmitPayload = {
  form: object;
  gameManager: object;
  select: object;
  selectedPlayer: object;
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
form: object;
```

***

### gameManager

```ts
gameManager: object;
```

***

### select

```ts
select: object;
```

***

### selectedPlayer

```ts
selectedPlayer: object;
```

***

### usersPlugin

```ts
usersPlugin: UsersPlugin;
```
