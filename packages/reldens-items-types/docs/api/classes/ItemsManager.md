# Class: ItemsManager

An [Inventory](Inventory.md) bound to an owner: resolves the owner id, namespaces event keys,
and creates item instances from `itemsModelData`. This is the object most server code
holds.

## Extends

- [`Inventory`](Inventory.md)

## Constructors

### Constructor

```ts
new ItemsManager(props): ItemsManager;
```

#### Parameters

##### props

###### owner?

`any` = `zInstance`

The owning game entity; must carry the id property. Required.

###### itemClasses?

`false` \| `Record`\<`string`, `any`\> = `...`

Item classes by key, or false.

###### groupClasses?

`false` \| `Record`\<`string`, `any`\> = `...`

Group classes by key, or false.

###### itemsModelData?

  \| `false`
  \| `Record`\<`string`, \{
  `class?`: `any`;
  `data`: \{
     `key`: `string`;
     `uid?`: `string`;
     `id?`: `string` \| `number` \| `null`;
     `item_id?`: `string` \| `number` \| `null`;
     `label?`: `string`;
     `description?`: `string`;
     `type?`: `1` \| `2` \| `10` \| `3` \| `4` \| `5`;
     `qty?`: `number`;
     `remaining_uses?`: `number`;
     `is_active?`: `boolean`;
     `group_id?`: `number` \| `false`;
     `qty_limit?`: `number` \| `false`;
     `uses_limit?`: `number` \| `false`;
     `autoRemoveItemOnZeroQty?`: `boolean`;
     `useTimeOut?`: `number` \| `false`;
     `execTimeOut?`: `number` \| `false`;
     `modifiers?`: `object`[] \| `Record`\<`string`, `any`\>;
     `customData?`: `string` \| `Record`\<`string`, `any`\>;
  \};
\}\> = `...`

Catalog of `{ [key]: { class, data } }`, or false.

###### ownerIdProperty?

`string` = `...`

Property name on `owner` holding its id. Defaults to 'id'.

###### eventsPrefix?

`string` = `...`

#### Returns

`ItemsManager`

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

`Record`\<`string`, [`ItemGroup`](ItemGroup.md)\>

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

***

### getOwnerId()

```ts
getOwnerId(): string | number;
```

The owner's id, read from `owner[ownerIdProperty]`.

#### Returns

`string` \| `number`

***

### getOwnerEventKey()

```ts
getOwnerEventKey(): string;
```

The owner's event-key prefix.

#### Returns

`string`

***

### getOwnerUniqueEventKey()

```ts
getOwnerUniqueEventKey(suffix): string;
```

A unique event key for the owner, optionally suffixed.

#### Parameters

##### suffix

`string`

#### Returns

`string`

***

### setup()

```ts
setup(props): Promise<false | void>;
```

Initialize: fire MANAGER_INIT, then setItems/setGroups when provided.

#### Parameters

##### props

###### items?

`Record`\<`string`, `any`\> = `...`

###### groups?

`Record`\<`string`, `any`\> = `...`

#### Returns

`Promise`\<`false` \| `void`\>

***

### createItemInstance()

```ts
createItemInstance(key, qty?): false | ItemBase | ItemBase[];
```

Build one item instance (or an array for non-single items with qty > 1) from the catalog.

#### Parameters

##### key

`string`

##### qty?

`number`

#### Returns

`false` \| [`ItemBase`](ItemBase.md) \| [`ItemBase`](ItemBase.md)[]
