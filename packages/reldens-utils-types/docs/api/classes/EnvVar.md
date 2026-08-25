# Class: EnvVar

Singleton for typed, safe env-var reads. Every method returns the default when the value
is missing or invalid. e.g. `EnvVar.integer(process.env, 'PORT', 8080, 1, 65535)`.

## Constructors

### Constructor

```ts
new EnvVar(): EnvVar;
```

#### Returns

`EnvVar`

## Methods

### string()

```ts
string(
   obj, 
   key, 
   defaultValue): string;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`string`

#### Returns

`string`

***

### nonEmptyString()

```ts
nonEmptyString(
   obj, 
   key, 
   defaultValue): string;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`string`

#### Returns

`string`

***

### number()

```ts
number(
   obj, 
   key, 
   defaultValue): number;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`number`

#### Returns

`number`

***

### boolean()

```ts
boolean(
   obj, 
   key, 
   defaultValue): boolean;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`boolean`

#### Returns

`boolean`

***

### array()

```ts
array(
   obj, 
   key, 
   defaultValue, 
   separator?): string[];
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`string`[]

##### separator?

`string`

#### Returns

`string`[]

***

### url()

```ts
url(
   obj, 
   key, 
   defaultValue): string;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`string`

#### Returns

`string`

***

### json()

```ts
json(
   obj, 
   key, 
   defaultValue): unknown;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`unknown`

#### Returns

`unknown`

***

### integer()

```ts
integer(
   obj, 
   key, 
   defaultValue, 
   min?, 
   max?): number;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`number`

##### min?

`number`

##### max?

`number`

#### Returns

`number`

***

### port()

```ts
port(
   obj, 
   key, 
   defaultValue): number;
```

#### Parameters

##### obj

`object`

##### key

`string`

##### defaultValue

`number`

#### Returns

`number`
