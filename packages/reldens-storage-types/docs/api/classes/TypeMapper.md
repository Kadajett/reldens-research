# Class: TypeMapper

Maps SQL/DB column types to JS or Prisma types. Exported as a ready-to-use singleton.

## Constructors

### Constructor

```ts
new TypeMapper(): TypeMapper;
```

#### Returns

`TypeMapper`

## Methods

### mapDbTypeToJsType()

```ts
mapDbTypeToJsType(dbType): string;
```

DB type -> JS type ('int'->'number', 'datetime'->'Date', 'json'->'object', ...).

#### Parameters

##### dbType

`string`

#### Returns

`string`

***

### mapDbTypeToPrismaType()

```ts
mapDbTypeToPrismaType(dbType): string;
```

DB type -> Prisma scalar ('int'->'Int', 'datetime'->'DateTime', 'json'->'Json', ...).

#### Parameters

##### dbType

`string`

#### Returns

`string`
