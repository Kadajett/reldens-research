# Class: PrismaClientLoader

Loads and instantiates a generated PrismaClient.

## Constructors

### Constructor

```ts
new PrismaClientLoader(): PrismaClientLoader;
```

#### Returns

`PrismaClientLoader`

## Methods

### load()

```ts
static load(
   projectPath, 
   customPath, 
   connectionData): unknown;
```

Resolve the generated client path and return a new PrismaClient (or null).

#### Parameters

##### projectPath

`string`

##### customPath

`string`

##### connectionData

`object`

#### Returns

`unknown`
