# Class: ItemsDataGenerator

Static helper: maps a list of item DB models into the `{ [key]: { class, data } }`
catalog the manager consumes, and builds Modifier instances from model relations.

## Constructors

### Constructor

```ts
new ItemsDataGenerator(): ItemsDataGenerator;
```

#### Returns

`ItemsDataGenerator`

## Methods

### itemsListMappedData()

```ts
static itemsListMappedData(inventoryClasses, itemsModelsList): Record<string, {
  class: unknown;
  data: ItemData;
}>;
```

Map item models to `{ class, data }` catalog entries (data is ItemData).

#### Parameters

##### inventoryClasses

`object`

##### itemsModelsList

`object`[]

#### Returns

`Record`\<`string`, \{
  `class`: `unknown`;
  `data`: `ItemData`;
\}\>

***

### generateItemModifiers()

```ts
static generateItemModifiers(itemModel): Record<string, Modifier>;
```

Build Modifier instances keyed by id from an item model's modifier relations.

#### Parameters

##### itemModel

`object`

#### Returns

`Record`\<`string`, [`Modifier`](../type-aliases/Modifier.md)\>
