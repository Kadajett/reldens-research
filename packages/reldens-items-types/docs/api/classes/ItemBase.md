# Class: ItemBase

The base class for every item. Holds the core properties (`key`, `uid`, `id`, `qty`,
`modifiers`, ...), applies and reverts its modifiers, and proxies events to its manager.

## Extended by

- [`ItemEquipment`](ItemEquipment.md)
- [`ItemUsable`](ItemUsable.md)
- [`ItemSingle`](ItemSingle.md)

## Constructors

### Constructor

```ts
new ItemBase(props): ItemBase;
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

`ItemBase`

## Methods

### isSingleInstance()

```ts
static isSingleInstance(): boolean;
```

Base items are not single-instance; subclasses override.

#### Returns

`boolean`

***

### getInventoryId()

```ts
getInventoryId(): string;
```

The inventory index key: `key` for single-instance items, else `uid`.

#### Returns

`string`

***

### applyModifiers()

```ts
applyModifiers(): Promise<false | void>;
```

Apply all of the item's modifiers to its target.

#### Returns

`Promise`\<`false` \| `void`\>

***

### revertModifiers()

```ts
revertModifiers(): Promise<false | void>;
```

Revert all of the item's modifiers from its target.

#### Returns

`Promise`\<`false` \| `void`\>

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
