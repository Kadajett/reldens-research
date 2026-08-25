# Class: ServerFactoryUtils

Static helpers for cache lookup, CORS origin validation, and URL cleanup.

## Constructors

### Constructor

```ts
new ServerFactoryUtils(): ServerFactoryUtils;
```

#### Returns

`ServerFactoryUtils`

## Methods

### getCacheConfigForPath()

```ts
static getCacheConfigForPath(path, cacheConfig): number | false;
```

The max-age whose extension the path ends with, or false.

#### Parameters

##### path

`string`

##### cacheConfig

`object`

#### Returns

`number` \| `false`

***

### validateOrigin()

```ts
static validateOrigin(
   origin, 
   corsOrigins, 
   corsAllowAll): string | false;
```

'*' if allow-all, the origin if it matches, else false.

#### Parameters

##### origin

`string`

##### corsOrigins

(`string` \| `RegExp`)[]

##### corsAllowAll

`boolean`

#### Returns

`string` \| `false`

***

### stripQueryString()

```ts
static stripQueryString(url): string;
```

The part before `?`.

#### Parameters

##### url

`string`

#### Returns

`string`
