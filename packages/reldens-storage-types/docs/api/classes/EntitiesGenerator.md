# Class: EntitiesGenerator

Generates entity/model/config/translation source files by introspecting a database.

## Constructors

### Constructor

```ts
new EntitiesGenerator(): EntitiesGenerator;
```

#### Returns

`EntitiesGenerator`

## Methods

### generate()

```ts
generate(): Promise<boolean>;
```

The full pipeline: connect, introspect, write entity/model/config/translation files.

#### Returns

`Promise`\<`boolean`\>

***

### createServer()

```ts
createServer(): false | BaseDataServer;
```

Instantiate the correct data server from the connection config.

#### Returns

`false` \| [`BaseDataServer`](BaseDataServer.md)
