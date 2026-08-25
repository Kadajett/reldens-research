# Class: BaseDriver

Abstract per-entity CRUD/query driver. The three concrete drivers (Objection/MikroORM/
Prisma) implement this contract; concrete CRUD returns are awaitable. `filters` is a
where-clause object, `relations` a list of relation names, `operator` one of
GT/GTE/LT/LTE/NE/EQ.

## Extended by

- [`ObjectionJsDriver`](ObjectionJsDriver.md)
- [`MikroOrmDriver`](MikroOrmDriver.md)
- [`PrismaDriver`](PrismaDriver.md)

## Constructors

### Constructor

```ts
new BaseDriver(): BaseDriver;
```

#### Returns

`BaseDriver`

## Methods

### databaseName()

```ts
databaseName(): string;
```

The DB name for this entity.

#### Returns

`string`

***

### id()

```ts
id(): string;
```

The primary-key field name.

#### Returns

`string`

***

### name()

```ts
name(): string;
```

The entity name.

#### Returns

`string`

***

### tableName()

```ts
tableName(): string;
```

The table name.

#### Returns

`string`

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

***

### loadAll()

```ts
loadAll(): object[];
```

All rows.

#### Returns

`object`[]

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
