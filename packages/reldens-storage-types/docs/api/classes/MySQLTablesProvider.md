# Class: MySQLTablesProvider

Introspects a MySQL database's schema from information_schema.

## Constructors

### Constructor

```ts
new MySQLTablesProvider(): MySQLTablesProvider;
```

#### Returns

`MySQLTablesProvider`

## Methods

### fetchTables()

```ts
static fetchTables(server): Promise<false | object>;
```

Return a tables map `{ [table]: { name, columns: {...} } }`, or false.

#### Parameters

##### server

[`BaseDataServer`](BaseDataServer.md)

#### Returns

`Promise`\<`false` \| `object`\>
