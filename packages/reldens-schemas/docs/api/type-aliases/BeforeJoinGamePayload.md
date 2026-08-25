# Type Alias: BeforeJoinGamePayload

```ts
type BeforeJoinGamePayload = {
  formData: unknown;
  gameManager: unknown;
  isNewUser: unknown;
};
```

`reldens.beforeJoinGame`
The registration deadline for client custom classes. The scene preloader reads client/customClasses/objects/* right after the join.
[EXTRACTED] theme/plugins/client-plugin.js:L25 - props.gameManager.config.client.customClasses

- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `formData, gameManager, isNewUser`
- Emitted at: lib/game/client/game-manager.js:L184

## Properties

### formData

```ts
formData: unknown;
```

***

### gameManager

```ts
gameManager: unknown;
```

***

### isNewUser

```ts
isNewUser: unknown;
```
