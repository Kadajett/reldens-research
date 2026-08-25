# Class: Inventory

The core inventory: holds items, enforces limits and locking, mutates quantities, and
drives the events system. Base class for [ItemsManager](ItemsManager.md) and [ItemGroup](ItemGroup.md).

## Extended by

- [`ItemGroup`](ItemGroup.md)
- [`ItemsManager`](ItemsManager.md)

## Constructors

### Constructor

```ts
new Inventory(): Inventory;
```

#### Returns

`Inventory`

## Methods

### validate()

```ts
validate(item): Promise<boolean>;
```

Validate an item instance (exists, has getInventoryId() and a key); fires VALIDATE.

#### Parameters

##### item

[`ItemBase`](ItemBase.md)

#### Returns

`Promise`\<`boolean`\>

***

### findItemByKey()

```ts
findItemByKey(itemKey): false | ItemBase;
```

The first stored item whose `key` matches, or false.

#### Parameters

##### itemKey

`string`

#### Returns

`false` \| [`ItemBase`](ItemBase.md)

***

### findItemsByPropertyValue()

```ts
findItemsByPropertyValue(propertyKey, propertyValue): ItemBase[];
```

All stored items whose given property equals the value.

#### Parameters

##### propertyKey

`string`

##### propertyValue

`unknown`

#### Returns

[`ItemBase`](ItemBase.md)[]

***

### addItem()

```ts
addItem(item): Promise<false | ItemBase>;
```

Add an item after validation/limit/lock checks; single items increase qty instead.

#### Parameters

##### item

[`ItemBase`](ItemBase.md)

#### Returns

`Promise`\<`false` \| [`ItemBase`](ItemBase.md)\>

***

### addItems()

```ts
addItems(itemsArray): Promise<boolean>;
```

Add each item in turn; false at the first failure, else true.

#### Parameters

##### itemsArray

[`ItemBase`](ItemBase.md)[]

#### Returns

`Promise`\<`boolean`\>

***

### setItem()

```ts
setItem(item): Promise<false | void>;
```

Store an item by its inventory id, bypassing validation; false if locked.

#### Parameters

##### item

[`ItemBase`](ItemBase.md)

#### Returns

`Promise`\<`false` \| `void`\>

***

### removeItem()

```ts
removeItem(key): Promise<boolean>;
```

Remove the item at inventory-id `key`; false if locked or not found.

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

***

### setItemQty()

```ts
setItemQty(key, qty): Promise<boolean>;
```

Set an item's qty.

#### Parameters

##### key

`string`

##### qty

`number`

#### Returns

`Promise`\<`boolean`\>

***

### increaseItemQty()

```ts
increaseItemQty(key, qty): Promise<boolean>;
```

Increase an item's qty.

#### Parameters

##### key

`string`

##### qty

`number`

#### Returns

`Promise`\<`boolean`\>

***

### decreaseItemQty()

```ts
decreaseItemQty(key, qty): Promise<boolean>;
```

Decrease an item's qty (floored at 0; may auto-remove at 0).

#### Parameters

##### key

`string`

##### qty

`number`

#### Returns

`Promise`\<`boolean`\>

***

### modifyItemQty()

```ts
modifyItemQty(
   op, 
   key, 
qty): Promise<boolean>;
```

Core qty mutator; `op` is a SET/INCREASE/DECREASE operation.

#### Parameters

##### op

`"set"` \| `"increase"` \| `"decrease"`

##### key

`string`

##### qty

`number`

#### Returns

`Promise`\<`boolean`\>

***

### setItems()

```ts
setItems(items): Promise<unknown>;
```

Replace the whole items map (keyed by inventory id) and fire SET_ITEMS.

#### Parameters

##### items

`Record`\<`string`, [`ItemBase`](ItemBase.md)\>

#### Returns

`Promise`\<`unknown`\>

***

### setGroups()

```ts
setGroups(groups): Promise<unknown>;
```

Replace the groups map and fire SET_GROUPS.

#### Parameters

##### groups

`Record`\<`string`, [`ItemGroup`](ItemGroup.md)\>

#### Returns

`Promise`\<`unknown`\>

***

### fireEvent()

```ts
fireEvent(eventName, ...args): Promise<unknown>;
```

Emit a prefixed event through the events manager.

#### Parameters

##### eventName

`string`

##### args

...`unknown`[]

#### Returns

`Promise`\<`unknown`\>

***

### listenEvent()

```ts
listenEvent(
   eventName, 
   callback, 
   removeKey?, 
   masterKey?): unknown;
```

Register a keyed listener for a prefixed event.

#### Parameters

##### eventName

`string`

##### callback

(...`args`) => `unknown`

##### removeKey?

`string`

##### masterKey?

`string`

#### Returns

`unknown`
