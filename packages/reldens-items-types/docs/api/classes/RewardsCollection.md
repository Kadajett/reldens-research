# Class: RewardsCollection

A queryable list of [ExchangeReward](ExchangeReward.md)s.

## Constructors

### Constructor

```ts
new RewardsCollection(props?): RewardsCollection;
```

#### Parameters

##### props?

###### rewards?

[`ExchangeReward`](ExchangeReward.md)[]

#### Returns

`RewardsCollection`

## Methods

### count()

```ts
count(): number;
```

Number of rewards.

#### Returns

`number`

***

### add()

```ts
add(
   itemUid, 
   itemKey, 
   rewardItemKey, 
   rewardQuantity, 
   rewardItemIsRequired): void;
```

Construct and append a new reward.

#### Parameters

##### itemUid

`string`

##### itemKey

`string`

##### rewardItemKey

`string`

##### rewardQuantity

`number`

##### rewardItemIsRequired

`boolean`

#### Returns

`void`

***

### remove()

```ts
remove(itemUid): void;
```

Remove the first reward matching `itemUid`.

#### Parameters

##### itemUid

`string`

#### Returns

`void`

***

### fetchAllBy()

```ts
fetchAllBy(propertyName, propertyValue): ExchangeReward[];
```

All rewards whose property matches.

#### Parameters

##### propertyName

`string`

##### propertyValue

`unknown`

#### Returns

[`ExchangeReward`](ExchangeReward.md)[]
