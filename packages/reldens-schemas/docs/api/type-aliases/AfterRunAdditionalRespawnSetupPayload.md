# Type Alias: AfterRunAdditionalRespawnSetupPayload

```ts
type AfterRunAdditionalRespawnSetupPayload = {
  clonedObjProps: object;
  multipleObj: object;
  objClass: object;
  objectIndex: number;
  objInstance: object;
  respawnArea: object;
  roomRespawn: RoomRespawn;
};
```

`reldens.afterRunAdditionalRespawnSetup`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `clonedObjProps, multipleObj, objClass, objInstance, objectIndex, respawnArea, roomRespawn`
- Emitted at: lib/respawn/server/room-respawn.js:L137

## Properties

### clonedObjProps

```ts
clonedObjProps: object;
```

***

### multipleObj

```ts
multipleObj: object;
```

***

### objClass

```ts
objClass: object;
```

***

### objectIndex

```ts
objectIndex: number;
```

***

### objInstance

```ts
objInstance: object;
```

***

### respawnArea

```ts
respawnArea: object;
```

***

### roomRespawn

```ts
roomRespawn: RoomRespawn;
```
