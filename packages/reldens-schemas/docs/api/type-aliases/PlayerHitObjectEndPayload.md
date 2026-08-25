# Type Alias: PlayerHitObjectEndPayload

```ts
type PlayerHitObjectEndPayload = {
  playerBody: object;
  result: {
     continue: boolean;
     stopFull: boolean;
  };
};
```

`reldens.playerHitObjectEnd`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `playerBody, result`
- Emitted at: lib/world/server/collisions-manager.js:L281

## Properties

### playerBody

```ts
playerBody: object;
```

***

### result

```ts
result: {
  continue: boolean;
  stopFull: boolean;
};
```

#### continue

```ts
continue: boolean;
```

#### stopFull

```ts
stopFull: boolean;
```
