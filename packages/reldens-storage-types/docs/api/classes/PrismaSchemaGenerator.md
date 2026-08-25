# Class: PrismaSchemaGenerator

Generates a `schema.prisma` and runs Prisma introspection + client generation.

## Constructors

### Constructor

```ts
new PrismaSchemaGenerator(props): PrismaSchemaGenerator;
```

#### Parameters

##### props

###### config?

\{
  `host?`: `string`;
  `port?`: `number`;
  `user?`: `string`;
  `password?`: `string`;
  `database?`: `string`;
\} = `...`

Connection config used to build the datasource URL. Required for a URL.

###### config.host?

`string` = `...`

###### config.port?

`number` = `...`

###### config.user?

`string` = `...`

###### config.password?

`string` = `...`

###### config.database?

`string` = `...`

###### client?

`string` = `...`

###### debug?

`boolean` = `...`

###### dataProxy?

`boolean` = `...`

###### checkInterval?

`number` = `...`

###### maxWaitTime?

`number` = `...`

###### prismaSchemaPath?

`string` = `...`

###### clientOutputPath?

`string` = `...`

###### generateBinaryTargets?

`string`[] = `...`

###### dbParams?

`string` = `...`

#### Returns

`PrismaSchemaGenerator`

## Methods

### generate()

```ts
generate(): Promise<boolean>;
```

Write the schema, run `prisma db pull` then `prisma generate`; true on success.

#### Returns

`Promise`\<`boolean`\>
