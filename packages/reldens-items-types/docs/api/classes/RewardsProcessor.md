# Class: RewardsProcessor

Validates and applies exchange rewards.

## Constructors

### Constructor

```ts
new RewardsProcessor(props?): RewardsProcessor;
```

#### Parameters

##### props?

###### rewardsByItemUid?

`boolean`

###### rewardsByItemKey?

`boolean`

#### Returns

`RewardsProcessor`

## Methods

### validateRewards()

```ts
validateRewards(inventoryKeyFrom, exchange): boolean;
```

Validate that required rewards exist with sufficient quantity on the opposite inventory.

#### Parameters

##### inventoryKeyFrom

`"A"` \| `"B"`

##### exchange

[`ExchangePlatform`](ExchangePlatform.md)

#### Returns

`boolean`
