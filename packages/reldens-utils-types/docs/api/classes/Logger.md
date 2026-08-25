# Class: Logger

Singleton logger with syslog levels (emergency..debug). Each level method is chainable;
output is gated by the configured level. Configured from RELDENS_LOG* env vars.

## Constructors

### Constructor

```ts
new Logger(): Logger;
```

#### Returns

`Logger`

## Methods

### emergency()

```ts
emergency(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### alert()

```ts
alert(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### critical()

```ts
critical(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### error()

```ts
error(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### warning()

```ts
warning(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### notice()

```ts
notice(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### info()

```ts
info(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### debug()

```ts
debug(...args): this;
```

#### Parameters

##### args

...`unknown`[]

#### Returns

`this`

***

### setLogLevel()

```ts
setLogLevel(level): this;
```

Set the active log level.

#### Parameters

##### level

`number`

#### Returns

`this`

***

### setForcedDisabled()

```ts
setForcedDisabled(forced): this;
```

Mute all output.

#### Parameters

##### forced

`boolean`

#### Returns

`this`
