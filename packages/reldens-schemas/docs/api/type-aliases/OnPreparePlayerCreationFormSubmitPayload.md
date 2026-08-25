# Type Alias: OnPreparePlayerCreationFormSubmitPayload

```ts
type OnPreparePlayerCreationFormSubmitPayload = {
  form: object;
  gameManager: object;
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
form: object;
```

***

### gameManager

```ts
gameManager: object;
```

***

### usersPlugin

```ts
usersPlugin: UsersPlugin;
```
