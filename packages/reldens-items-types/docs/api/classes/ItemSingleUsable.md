# Class: ItemSingleUsable

Stackable consumable item (type SINGLE_USABLE).

## Extends

- [`ItemUsable`](ItemUsable.md)

## Constructors

### Constructor

```ts
new ItemSingleUsable(props): ItemSingleUsable;
```

#### Parameters

##### props

###### key

`string` = `...`

Unique item-type key; also the inventory index for single-instance items. Required.

###### uid?

`string` = `...`

Inventory index for non-single items; auto-generated when omitted.

###### id?

`string` \| `number` \| `null` = `nullableId`

Item instance id for this inventory; null without storage.

###### item_id?

`string` \| `number` \| `null` = `nullableId`

Item type id; null without storage.

###### label?

`string` = `...`

###### description?

`string` = `...`

###### type?

`1` \| `2` \| `10` \| `3` \| `4` \| `5` = `...`

One of ItemsConst.TYPES; defaults to ITEM_BASE (10).

###### qty?

`number` = `...`

###### remaining_uses?

`number` = `...`

###### is_active?

`boolean` = `...`

###### group_id?

`number` \| `false` = `...`

###### qty_limit?

`number` \| `false` = `...`

###### uses_limit?

`number` \| `false` = `...`

###### autoRemoveItemOnZeroQty?

`boolean` = `...`

Remove the item from the inventory when its qty hits zero. Defaults true.

###### useTimeOut?

`number` \| `false` = `...`

###### execTimeOut?

`number` \| `false` = `...`

###### modifiers?

`object`[] \| `Record`\<`string`, `any`\> = `...`

Modifiers to apply when the item executes. Authored as an array of
`{key, operation, value}` configs (converted to Modifier instances by
ItemsDataGenerator) or a map of already-built modifier instances.

###### customData?

`string` \| `Record`\<`string`, `any`\> = `...`

Extra data merged onto the instance; an object or a JSON string.

###### manager?

`any` = `zInstance`

The owning ItemsManager instance. Required (opaque here).

#### Returns

`ItemSingleUsable`

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`constructor`](ItemUsable.md#constructor)

## Methods

### isSingleInstance()

```ts
static isSingleInstance(): boolean;
```

Base items are not single-instance; subclasses override.

#### Returns

`boolean`

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`isSingleInstance`](ItemUsable.md#issingleinstance)

***

### getInventoryId()

```ts
getInventoryId(): string;
```

The inventory index key: `key` for single-instance items, else `uid`.

#### Returns

`string`

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`getInventoryId`](ItemUsable.md#getinventoryid)

***

### applyModifiers()

```ts
applyModifiers(): Promise<false | void>;
```

Apply all of the item's modifiers to its target.

#### Returns

`Promise`\<`false` \| `void`\>

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`applyModifiers`](ItemUsable.md#applymodifiers)

***

### revertModifiers()

```ts
revertModifiers(): Promise<false | void>;
```

Revert all of the item's modifiers from its target.

#### Returns

`Promise`\<`false` \| `void`\>

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`revertModifiers`](ItemUsable.md#revertmodifiers)

***

### isType()

```ts
isType(type): boolean;
```

Whether `this.type` equals the given item type id.

#### Parameters

##### type

`1` \| `2` \| `3` \| `4` \| `5` \| `10`

#### Returns

`boolean`

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`isType`](ItemUsable.md#istype)

***

### fireEvent()

```ts
fireEvent(eventName, ...args): Promise<unknown>;
```

Fire an event through the item's manager.

#### Parameters

##### eventName

`string`

##### args

...`unknown`[]

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`fireEvent`](ItemUsable.md#fireevent)

***

### listenEvent()

```ts
listenEvent(
   eventName, 
   callback, 
   removeKey?, 
   masterKey?): unknown;
```

Register a keyed listener through the item's manager.

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

[`ItemUsable`](ItemUsable.md).[`listenEvent`](ItemUsable.md#listenevent)

***

### use()

```ts
use(target?): Promise<false | void>;
```

Use the item against an optional target; honors use and exec timeouts, then executes.

#### Parameters

##### target?

`false` \| `object`

#### Returns

`Promise`\<`false` \| `void`\>

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`use`](ItemUsable.md#use)

***

### executeItem()

```ts
executeItem(): Promise<unknown>;
```

Apply modifiers, decrement uses, and remove/deduct qty when uses run out.

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`ItemUsable`](ItemUsable.md).[`executeItem`](ItemUsable.md#executeitem)
