# Type Alias: OnPreparePlayerSelectorFormSubmitPayload

```ts
type OnPreparePlayerSelectorFormSubmitPayload = {
  form: unknown;
  gameManager: unknown;
  select: unknown;
  selectedPlayer: unknown;
  usersPlugin: unknown;
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
form: unknown;
```

***

### gameManager

```ts
gameManager: unknown;
```

***

### select

```ts
select: unknown;
```

***

### selectedPlayer

```ts
selectedPlayer: unknown;
```

***

### usersPlugin

```ts
usersPlugin: unknown;
```
