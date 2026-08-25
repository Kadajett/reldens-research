# Class: MikroOrmDataServer

MikroORM-backed data server (`name()` -> 'mikro-orm').

## Extends

- [`BaseDataServer`](BaseDataServer.md)

## Constructors

### Constructor

```ts
new MikroOrmDataServer(props): MikroOrmDataServer;
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

###### entitiesPath?

`string` = `...`

Path passed straight to MikroORM `entities`.

###### warnWhenNoEntities?

`boolean` = `...`

#### Returns

`MikroOrmDataServer`

#### Overrides

[`BaseDataServer`](BaseDataServer.md).[`constructor`](BaseDataServer.md#constructor)

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

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`getEntity`](BaseDataServer.md#getentity)

***

### createConnectionString()

```ts
createConnectionString(): string;
```

Build the `client://user:pass@host:port/db` connection URI from the config.

#### Returns

`string`

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`createConnectionString`](BaseDataServer.md#createconnectionstring)

***

### connect()

```ts
connect(): Promise<void>;
```

Open the DB connection.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`connect`](BaseDataServer.md#connect)

***

### disconnect()

```ts
disconnect(): Promise<void>;
```

Close the DB connection.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`disconnect`](BaseDataServer.md#disconnect)

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

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`generateEntities`](BaseDataServer.md#generateentities)

***

### fetchEntitiesFromDatabase()

```ts
fetchEntitiesFromDatabase(): Promise<false | object>;
```

Introspect the DB and return a tables map.

#### Returns

`Promise`\<`false` \| `object`\>

#### Inherited from

[`BaseDataServer`](BaseDataServer.md).[`fetchEntitiesFromDatabase`](BaseDataServer.md#fetchentitiesfromdatabase)
