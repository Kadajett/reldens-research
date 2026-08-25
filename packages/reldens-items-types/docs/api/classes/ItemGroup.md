# Class: ItemGroup

A categorized sub-inventory (e.g. a bag) with its own id, key, label, sort and limits.
All behavior is inherited from [Inventory](Inventory.md); `id` and `key` are required.

## Extends

- [`Inventory`](Inventory.md)

## Constructors

### Constructor

```ts
new ItemGroup(props): ItemGroup;
```

#### Parameters

##### props

###### id

`string` \| `number` = `...`

Group id. Required.

###### key

`string` = `...`

Group key. Required.

###### label?

`string` = `...`

###### description?

`string` = `...`

###### files_name?

`string` = `...`

###### sort?

`number` = `...`

###### items_limit?

`number` = `...`

Descriptive only; enforcement uses Inventory's itemsLimit.

###### limit_per_item?

`number` = `...`

Descriptive only; enforcement uses Inventory's limitPerItem.

###### eventsPrefix?

`string` = `...`

#### Returns

`ItemGroup`

#### Overrides

[`Inventory`](Inventory.md).[`constructor`](Inventory.md#constructor)

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

#### Inherited from

[`Inventory`](Inventory.md).[`validate`](Inventory.md#validate)

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

#### Inherited from

[`Inventory`](Inventory.md).[`findItemByKey`](Inventory.md#finditembykey)

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

#### Inherited from

[`Inventory`](Inventory.md).[`findItemsByPropertyValue`](Inventory.md#finditemsbypropertyvalue)

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

#### Inherited from

[`Inventory`](Inventory.md).[`addItem`](Inventory.md#additem)

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

#### Inherited from

[`Inventory`](Inventory.md).[`addItems`](Inventory.md#additems)

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

#### Inherited from

[`Inventory`](Inventory.md).[`setItem`](Inventory.md#setitem)

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

#### Inherited from

[`Inventory`](Inventory.md).[`removeItem`](Inventory.md#removeitem)

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

#### Inherited from

[`Inventory`](Inventory.md).[`setItemQty`](Inventory.md#setitemqty)

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

#### Inherited from

[`Inventory`](Inventory.md).[`increaseItemQty`](Inventory.md#increaseitemqty)

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

#### Inherited from

[`Inventory`](Inventory.md).[`decreaseItemQty`](Inventory.md#decreaseitemqty)

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

#### Inherited from

[`Inventory`](Inventory.md).[`modifyItemQty`](Inventory.md#modifyitemqty)

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

#### Inherited from

[`Inventory`](Inventory.md).[`setItems`](Inventory.md#setitems)

***

### setGroups()

```ts
setGroups(groups): Promise<unknown>;
```

Replace the groups map and fire SET_GROUPS.

#### Parameters

##### groups

`Record`\<`string`, `ItemGroup`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`Inventory`](Inventory.md).[`setGroups`](Inventory.md#setgroups)

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

#### Inherited from

[`Inventory`](Inventory.md).[`fireEvent`](Inventory.md#fireevent)

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

#### Inherited from

[`Inventory`](Inventory.md).[`listenEvent`](Inventory.md#listenevent)
