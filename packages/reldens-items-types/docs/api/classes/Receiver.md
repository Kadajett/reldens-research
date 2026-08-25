# Class: Receiver

Client-side counterpart to the server Sender. Extend it and override the `on*` hooks.
Parses server messages and replays each action against a client-side [ItemsManager](ItemsManager.md).

## Constructors

### Constructor

```ts
new Receiver(): Receiver;
```

#### Returns

`Receiver`

## Methods

### setDefaultActions()

```ts
setDefaultActions(): void;
```

Populate the default action-constant -> handler-method map.

#### Returns

`void`

***

### processMessage()

```ts
processMessage(message): false | void;
```

Validate a message's action prefix, look up its handler, and invoke it.

#### Parameters

##### message

`object`

#### Returns

`false` \| `void`

***

### onSetItems()

```ts
onSetItems(message): Promise<unknown>;
```

Rebuild all items from `message.items` and call manager.setItems.

#### Parameters

##### message

`object`

#### Returns

`Promise`\<`unknown`\>

***

### onSetGroups()

```ts
onSetGroups(message): Promise<unknown>;
```

Rebuild groups from `message.groups` and call manager.setGroups.

#### Parameters

##### message

`object`

#### Returns

`Promise`\<`unknown`\>

***

### onAddItem()

```ts
onAddItem(message): void;
```

Build one item from `message.item` and add it.

#### Parameters

##### message

`object`

#### Returns

`void`

***

### onRemoveItem()

```ts
onRemoveItem(message): void;
```

Remove the referenced item.

#### Parameters

##### message

`object`

#### Returns

`void`

***

### onSetQty()

```ts
onSetQty(message): void;
```

Set the referenced item's qty.

#### Parameters

##### message

`object`

#### Returns

`void`

***

### getItemClass()

```ts
getItemClass(key, typeId): unknown;
```

Resolve the item class for a key, falling back to the class for the type id.

#### Parameters

##### key

`string`

##### typeId

`number`

#### Returns

`unknown`

***

### getGroupClass()

```ts
getGroupClass(key): unknown;
```

Resolve the group class for a key, defaulting to ItemGroup.

#### Parameters

##### key

`string`

#### Returns

`unknown`
