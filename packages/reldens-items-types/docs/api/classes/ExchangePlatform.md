# Class: ExchangePlatform

The trading engine between two inventories keyed `'A'` and `'B'`. It locks both
inventories, stages items per side, requires both sides to confirm, validates
requirements and rewards, then transfers on finalize.

## Constructors

### Constructor

```ts
new ExchangePlatform(props?): ExchangePlatform;
```

#### Parameters

##### props?

###### eventsManager?

`any` = `...`

###### exchangeInitializerId?

`string` \| `number` \| `false` = `...`

Id of whoever opened the exchange; `false` when unset.

#### Returns

`ExchangePlatform`

## Methods

### initializeExchangeBetween()

```ts
initializeExchangeBetween(props): void;
```

Start an exchange: set and lock both inventories, install requirement/reward collections.

#### Parameters

##### props

###### inventoryA?

`any` = `zInstance`

Side A inventory instance. Required (null throws).

###### inventoryB?

`any` = `zInstance`

Side B inventory instance. Required (null throws).

###### exchangeRequirementsA?

`any` = `...`

RequirementsCollection instances; default to empty collections.

###### exchangeRequirementsB?

`any` = `...`

###### exchangeRewardsA?

`any` = `...`

RewardsCollection instances; default to empty collections.

###### exchangeRewardsB?

`any` = `...`

###### dropExchangeA?

`boolean` = `...`

Side gives its rewards but receives no traded item (e.g. an NPC vendor).

###### dropExchangeB?

`boolean` = `...`

###### avoidExchangeDecreaseA?

`boolean` = `...`

Skip decrementing this side's inventory on finalize.

###### avoidExchangeDecreaseB?

`boolean` = `...`

#### Returns

`void`

***

### pushForExchange()

```ts
pushForExchange(
   itemUid, 
   qty, 
inventoryKey): Promise<boolean>;
```

Stage an item+qty for a side (blocked once either side has confirmed).

#### Parameters

##### itemUid

`string`

##### qty

`number`

##### inventoryKey

`"A"` \| `"B"`

#### Returns

`Promise`\<`boolean`\>

***

### removeFromExchange()

```ts
removeFromExchange(itemUid, inventoryKey): Promise<boolean>;
```

Remove a staged item for a side.

#### Parameters

##### itemUid

`string`

##### inventoryKey

`"A"` \| `"B"`

#### Returns

`Promise`\<`boolean`\>

***

### confirmExchange()

```ts
confirmExchange(inventoryKey): Promise<void>;
```

Mark a side confirmed.

#### Parameters

##### inventoryKey

`"A"` \| `"B"`

#### Returns

`Promise`\<`void`\>

***

### disconfirmExchange()

```ts
disconfirmExchange(inventoryKey): Promise<void>;
```

Clear a side's confirmation.

#### Parameters

##### inventoryKey

`"A"` \| `"B"`

#### Returns

`Promise`\<`void`\>

***

### finalizeExchange()

```ts
finalizeExchange(): Promise<boolean>;
```

Complete the trade: requires both confirmations, re-validates, then transfers both ways.

#### Returns

`Promise`\<`boolean`\>

***

### cancelExchange()

```ts
cancelExchange(): void;
```

Unlock inventories and reset all exchange state.

#### Returns

`void`

***

### oppositeKey()

```ts
oppositeKey(inventoryKey): "A" | "B";
```

The other side's key.

#### Parameters

##### inventoryKey

`"A"` \| `"B"`

#### Returns

`"A"` \| `"B"`
