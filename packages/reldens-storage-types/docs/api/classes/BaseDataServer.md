# Class: BaseDataServer

Abstract base for all data servers: holds the connection config and the entity registry,
builds the connection string, and hands out per-entity drivers. The three concrete
servers extend it and implement `connect`/`generateEntities`/`fetchEntitiesFromDatabase`.

## Extended by

- [`ObjectionJsDataServer`](ObjectionJsDataServer.md)
- [`MikroOrmDataServer`](MikroOrmDataServer.md)
- [`PrismaDataServer`](PrismaDataServer.md)

## Constructors

### Constructor

```ts
new BaseDataServer(props): BaseDataServer;
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

DB connection details (host/port/user/password/database + driver extras).

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

DB dialect/driver, e.g. 'mysql', 'mysql2', 'mongodb'. Compared as a free string.

###### poolConfig?

`Record`\<`string`, `any`\> = `...`

Knex pool config, e.g. { min, max }.

###### connectStringOptions?

`string` = `...`

Query string appended after `?` in the connection string.

###### connectString?

`string` = `...`

Prebuilt connection string; auto-built from config when omitted.

###### debug?

`boolean` = `...`

###### multipleStatements?

`boolean` = `...`

###### rawModel?

`any` = `...`

###### name?

`string` \| `false` = `...`

###### rawEntities?

`Record`\<`string`, `any`\> = `...`

Raw entity models by key.

###### entities?

`Record`\<`string`, `any`\> = `...`

###### entitiesConfig?

`Record`\<`string`, `any`\> = `...`

#### Returns

`BaseDataServer`

## Methods

### getEntity()

```ts
getEntity(entityName): BaseDriver;
```

The registered driver for an entity name (the main accessor for a table's driver).

#### Parameters

##### entityName

`string`

#### Returns

[`BaseDriver`](BaseDriver.md)

***

### createConnectionString()

```ts
createConnectionString(): string;
```

Build the `client://user:pass@host:port/db` connection URI from the config.

#### Returns

`string`

***

### connect()

```ts
connect(): Promise<void>;
```

Open the DB connection.

#### Returns

`Promise`\<`void`\>

***

### disconnect()

```ts
disconnect(): Promise<void>;
```

Close the DB connection.

#### Returns

`Promise`\<`void`\>

***

### generateEntities()

```ts
generateEntities(rawEntities): void;
```

Register/build entity drivers from raw entity definitions.

#### Parameters

##### rawEntities

`object`

#### Returns

`void`

***

### fetchEntitiesFromDatabase()

```ts
fetchEntitiesFromDatabase(): Promise<false | object>;
```

Introspect the DB and return a tables map.

#### Returns

`Promise`\<`false` \| `object`\>
