# Class: InteractionArea

A square interaction range around an origin; `isValidInteraction(x,y)` tests a point.

## Constructors

### Constructor

```ts
new InteractionArea(): InteractionArea;
```

#### Returns

`InteractionArea`

## Methods

### setupInteractionArea()

```ts
setupInteractionArea(
   margin?, 
   x?, 
   y?): void;
```

Set the area size (margin) and origin, computing the limits.

#### Parameters

##### margin?

`number` \| `false`

##### x?

`number` \| `false`

##### y?

`number` \| `false`

#### Returns

`void`

***

### isValidInteraction()

```ts
isValidInteraction(posX, posY): boolean;
```

True when the point lies inside the computed limits.

#### Parameters

##### posX

`number`

##### posY

`number`

#### Returns

`boolean`

***

### getPosition()

```ts
getPosition(): object;
```

The stored origin.

#### Returns

`object`

##### x

```ts
x: number;
```

##### y

```ts
y: number;
```
