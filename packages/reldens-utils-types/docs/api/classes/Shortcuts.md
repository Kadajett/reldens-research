# Class: Shortcuts

`sc` (Shortcuts): a singleton grab-bag of pure helpers used throughout Reldens. Only the
most-used members are shown; there are many more string/array/date/security helpers.

## Constructors

### Constructor

```ts
new Shortcuts(): Shortcuts;
```

#### Returns

`Shortcuts`

## Methods

### hasOwn()

```ts
hasOwn(obj, prop): boolean;
```

Own-property check (prop may be an array; value must not be undefined).

#### Parameters

##### obj

`object`

##### prop

`string` \| `string`[]

#### Returns

`boolean`

***

### get()

```ts
get(
   obj, 
   prop, 
   defaultReturn): unknown;
```

`hasOwn(obj, prop) ? obj[prop] : defaultReturn`.

#### Parameters

##### obj

`object`

##### prop

`string`

##### defaultReturn

`unknown`

#### Returns

`unknown`

***

### isObjectFunction()

```ts
isObjectFunction(obj, property): boolean;
```

obj is an object and `obj[property]` is a function.

#### Parameters

##### obj

`object`

##### property

`string`

#### Returns

`boolean`

***

### toJson()

```ts
toJson(jsonString, defaultReturn?): unknown;
```

Parse a JSON string, or return the default on error.

#### Parameters

##### jsonString

`string`

##### defaultReturn?

`unknown`

#### Returns

`unknown`

***

### deepJsonClone()

```ts
deepJsonClone(obj): unknown;
```

Deep clone via stringify/parse.

#### Parameters

##### obj

`unknown`

#### Returns

`unknown`

***

### randomChars()

```ts
randomChars(length): string;
```

An alphanumeric random string.

#### Parameters

##### length

`number`

#### Returns

`string`

***

### randomInteger()

```ts
randomInteger(min, max): number;
```

An inclusive random integer.

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`

***

### getTime()

```ts
getTime(): number;
```

Epoch milliseconds.

#### Returns

`number`

***

### camelCase()

```ts
camelCase(str): string;
```

camelCase / PascalCase / kebab-case.

#### Parameters

##### str

`string`

#### Returns

`string`

***

### validateInput()

```ts
validateInput(input, type): boolean;
```

Validate an input string by category (email, username, ipv4, ...).

#### Parameters

##### input

`string`

##### type

`string`

#### Returns

`boolean`
