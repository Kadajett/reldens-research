# Class: PrismaDriver

Prisma implementation of the [BaseDriver](BaseDriver.md) contract (methods are async).

## Extends

- [`BaseDriver`](BaseDriver.md)

## Constructors

### Constructor

```ts
new PrismaDriver(): PrismaDriver;
```

#### Returns

`PrismaDriver`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`constructor`](BaseDriver.md#constructor)

## Methods

### databaseName()

```ts
databaseName(): string;
```

The DB name for this entity.

#### Returns

`string`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`databaseName`](BaseDriver.md#databasename)

***

### id()

```ts
id(): string;
```

The primary-key field name.

#### Returns

`string`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`id`](BaseDriver.md#id)

***

### name()

```ts
name(): string;
```

The entity name.

#### Returns

`string`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`name`](BaseDriver.md#name)

***

### tableName()

```ts
tableName(): string;
```

The table name.

#### Returns

`string`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`tableName`](BaseDriver.md#tablename)

***

### property()

```ts
property(propertyName): object;
```

The column config by name.

#### Parameters

##### propertyName

`string`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`property`](BaseDriver.md#property)

***

### create()

```ts
create(params): object;
```

Insert a row.

#### Parameters

##### params

`object`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`create`](BaseDriver.md#create)

***

### createWithRelations()

```ts
createWithRelations(params, relations): object;
```

Insert a row with nested relations.

#### Parameters

##### params

`object`

##### relations

`string`[]

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`createWithRelations`](BaseDriver.md#createwithrelations)

***

### update()

```ts
update(filters, updatePatch): object[];
```

Update rows matching filters.

#### Parameters

##### filters

`object`

##### updatePatch

`object`

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`update`](BaseDriver.md#update)

***

### updateBy()

```ts
updateBy(
   field, 
   fieldValue, 
   updatePatch, 
   operator?): object[];
```

Update rows by a single field condition.

#### Parameters

##### field

`string`

##### fieldValue

`unknown`

##### updatePatch

`object`

##### operator?

`string`

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`updateBy`](BaseDriver.md#updateby)

***

### updateById()

```ts
updateById(id, params): object;
```

Update the row with this primary key.

#### Parameters

##### id

[`Id`](../type-aliases/Id.md)

##### params

`object`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`updateById`](BaseDriver.md#updatebyid)

***

### upsert()

```ts
upsert(params, filters): object;
```

Insert or update.

#### Parameters

##### params

`object`

##### filters

`object`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`upsert`](BaseDriver.md#upsert)

***

### delete()

```ts
delete(filters): unknown;
```

Delete rows matching filters.

#### Parameters

##### filters

`object`

#### Returns

`unknown`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`delete`](BaseDriver.md#delete)

***

### deleteById()

```ts
deleteById(id): unknown;
```

Delete by primary key.

#### Parameters

##### id

[`Id`](../type-aliases/Id.md)

#### Returns

`unknown`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`deleteById`](BaseDriver.md#deletebyid)

***

### count()

```ts
count(filters): number;
```

Count matching rows.

#### Parameters

##### filters

`object`

#### Returns

`number`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`count`](BaseDriver.md#count)

***

### loadAll()

```ts
loadAll(): object[];
```

All rows.

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadAll`](BaseDriver.md#loadall)

***

### loadAllWithRelations()

```ts
loadAllWithRelations(relations): object[];
```

All rows with relations populated.

#### Parameters

##### relations

`string`[]

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadAllWithRelations`](BaseDriver.md#loadallwithrelations)

***

### load()

```ts
load(filters): object[];
```

Rows matching a filter object.

#### Parameters

##### filters

`object`

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`load`](BaseDriver.md#load)

***

### loadWithRelations()

```ts
loadWithRelations(filters, relations): object[];
```

Rows with relations populated.

#### Parameters

##### filters

`object`

##### relations

`string`[]

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadWithRelations`](BaseDriver.md#loadwithrelations)

***

### loadBy()

```ts
loadBy(
   field, 
   fieldValue, 
   operator?): object[];
```

Rows matching one field condition.

#### Parameters

##### field

`string`

##### fieldValue

`unknown`

##### operator?

`string`

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadBy`](BaseDriver.md#loadby)

***

### loadById()

```ts
loadById(id): object;
```

A single row by primary key.

#### Parameters

##### id

[`Id`](../type-aliases/Id.md)

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadById`](BaseDriver.md#loadbyid)

***

### loadByIds()

```ts
loadByIds(ids): object[];
```

Rows for a list of primary keys.

#### Parameters

##### ids

[`Id`](../type-aliases/Id.md)[]

#### Returns

`object`[]

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadByIds`](BaseDriver.md#loadbyids)

***

### loadOne()

```ts
loadOne(filters): object;
```

The first row matching filters.

#### Parameters

##### filters

`object`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadOne`](BaseDriver.md#loadone)

***

### loadOneBy()

```ts
loadOneBy(
   field, 
   fieldValue, 
   operator?): object;
```

The first row matching one field condition.

#### Parameters

##### field

`string`

##### fieldValue

`unknown`

##### operator?

`string`

#### Returns

`object`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadOneBy`](BaseDriver.md#loadoneby)

***

### rawQuery()

```ts
rawQuery(content): Promise<unknown>;
```

Run a raw SQL string.

#### Parameters

##### content

`string`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`rawQuery`](BaseDriver.md#rawquery)

***

### isJsonField()

```ts
isJsonField(fieldName): boolean;
```

Whether a column's configured type is `json`.

#### Parameters

##### fieldName

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`isJsonField`](BaseDriver.md#isjsonfield)

***

### applyQueryOptions()

```ts
applyQueryOptions(queryOptions): void;
```

Apply limit/offset/sortBy/sortDirection query options onto the driver.

#### Parameters

##### queryOptions

`object`

#### Returns

`void`

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`applyQueryOptions`](BaseDriver.md#applyqueryoptions)

***

### loadEntityData()

```ts
loadEntityData(
   filters, 
   queryOptions, 
relationsString): Promise<object[]>;
```

Convenience: apply options, parse relations, then load.

#### Parameters

##### filters

`object`

##### queryOptions

`object`

##### relationsString

`string`

#### Returns

`Promise`\<`object`[]\>

#### Inherited from

[`BaseDriver`](BaseDriver.md).[`loadEntityData`](BaseDriver.md#loadentitydata)
