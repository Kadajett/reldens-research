# Type Alias: BattleEndedPayload

```ts
type BattleEndedPayload = {
  actionData: unknown;
  playerSchema: unknown;
  pve: unknown;
  room: unknown;
};
```

`reldens.battleEnded`
- Zone: server
- Dispatch: emit (awaited)
- Payload: a `BattleEndedEvent` instance with properties `actionData, playerSchema, pve, room`
- Emitted at: lib/actions/server/pve.js:L332

## Properties

### actionData

```ts
actionData: unknown;
```

***

### playerSchema

```ts
playerSchema: unknown;
```

***

### pve

```ts
pve: unknown;
```

***

### room

```ts
room: unknown;
```
