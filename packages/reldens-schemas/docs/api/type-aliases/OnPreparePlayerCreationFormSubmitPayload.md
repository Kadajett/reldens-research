# Type Alias: OnPreparePlayerCreationFormSubmitPayload

```ts
type OnPreparePlayerCreationFormSubmitPayload = {
  form: HTMLFormElement;
  gameManager: GameManager;
  usersPlugin: UsersPlugin;
};
```

`reldens.onPreparePlayerCreationFormSubmit`
- Zone: client
- Dispatch: emitSync (runs inside the caller's tick; keep listeners cheap)
- Payload: one object with keys `form, gameManager, usersPlugin`
- Emitted at: lib/users/client/plugin.js:L322

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

### usersPlugin

```ts
usersPlugin: UsersPlugin;
```
