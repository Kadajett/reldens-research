# Type Alias: BattleEndedPayload

```ts
type BattleEndedPayload = {
  actionData: object;
  playerSchema: PlayerState;
  pve: Pve;
  room: RoomScene;
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
actionData: object;
```

***

### playerSchema

```ts
playerSchema: PlayerState;
```

***

### pve

```ts
pve: Pve;
```

***

### room

```ts
room: RoomScene;
```
