# Type Alias: PlayerDeathPayload

```ts
type PlayerDeathPayload = {
  affectedProperty: object;
  attackerPlayer: PlayerState;
  room: RoomScene;
  targetClient: Client;
  targetSchema: PlayerState;
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
affectedProperty: object;
```

***

### attackerPlayer

```ts
attackerPlayer: PlayerState;
```

***

### room

```ts
room: RoomScene;
```

***

### targetClient

```ts
targetClient: Client;
```

***

### targetSchema

```ts
targetSchema: PlayerState;
```
