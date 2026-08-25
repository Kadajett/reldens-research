# Type Alias: OnPreparePlayerCreationFormSubmitPayload

```ts
type OnPreparePlayerCreationFormSubmitPayload = {
  form: unknown;
  gameManager: unknown;
  usersPlugin: unknown;
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
form: unknown;
```

***

### gameManager

```ts
gameManager: unknown;
```

***

### usersPlugin

```ts
usersPlugin: unknown;
```
