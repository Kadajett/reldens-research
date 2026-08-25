# Type Alias: PlayerDeathPayload

```ts
type PlayerDeathPayload = {
  affectedProperty: unknown;
  attackerPlayer: unknown;
  room: unknown;
  targetClient: unknown;
  targetSchema: unknown;
};
```

`reldens.playerDeath`
- Zone: server
- Dispatch: emit (awaited)
- Payload: a `PlayerDeathEvent` instance with properties `affectedProperty, attackerPlayer, room, targetClient, targetSchema`
- Emitted at: lib/actions/server/battle.js:L197

## Properties

### affectedProperty

```ts
affectedProperty: unknown;
```

***

### attackerPlayer

```ts
attackerPlayer: unknown;
```

***

### room

```ts
room: unknown;
```

***

### targetClient

```ts
targetClient: unknown;
```

***

### targetSchema

```ts
targetSchema: unknown;
```
