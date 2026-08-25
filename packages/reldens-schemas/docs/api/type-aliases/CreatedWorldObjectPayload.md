# Type Alias: CreatedWorldObjectPayload

```ts
type CreatedWorldObjectPayload = {
  bodyMass: number;
  bodyObject: object;
  collision: boolean;
  hasState: boolean;
  objectIndex: number;
  p2world: P2world;
  pathFinder: object;
  posX: number;
  posY: number;
  roomObject: object;
  tileH: number;
  tileW: number;
};
```

`reldens.createdWorldObject`
- Zone: server
- Dispatch: emit (awaited)
- Payload: one object with keys `bodyMass, bodyObject, collision, hasState, objectIndex, p2world, pathFinder, posX, posY, roomObject, tileH, tileW`
- Emitted at: lib/world/server/p2world.js:L686

## Properties

### bodyMass

```ts
bodyMass: number;
```

***

### bodyObject

```ts
bodyObject: object;
```

***

### collision

```ts
collision: boolean;
```

***

### hasState

```ts
hasState: boolean;
```

***

### objectIndex

```ts
objectIndex: number;
```

***

### p2world

```ts
p2world: P2world;
```

***

### pathFinder

```ts
pathFinder: object;
```

***

### posX

```ts
posX: number;
```

***

### posY

```ts
posY: number;
```

***

### roomObject

```ts
roomObject: object;
```

***

### tileH

```ts
tileH: number;
```

***

### tileW

```ts
tileW: number;
```
