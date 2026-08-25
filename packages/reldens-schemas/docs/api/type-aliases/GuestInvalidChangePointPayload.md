# Type Alias: GuestInvalidChangePointPayload

```ts
type GuestInvalidChangePointPayload = {
  changePoint: object;
  collisionsManager: CollisionsManager;
  contactClient: Client;
  isGuest: boolean;
  playerBody: object;
  playerSchema: PlayerState;
};
```

`reldens.guestInvalidChangePoint`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `changePoint, collisionsManager, contactClient, isGuest, playerBody, playerSchema`
- Emitted at: lib/world/server/collisions-manager.js:L344

## Properties

### changePoint

```ts
changePoint: object;
```

***

### collisionsManager

```ts
collisionsManager: CollisionsManager;
```

***

### contactClient

```ts
contactClient: Client;
```

***

### isGuest

```ts
isGuest: boolean;
```

***

### playerBody

```ts
playerBody: object;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```
