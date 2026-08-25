# Class: ErrorManager

Singleton error handler: `error(message)` throws, or calls a configured callback.

## Constructors

### Constructor

```ts
new ErrorManager(): ErrorManager;
```

#### Returns

`ErrorManager`

## Methods

### error()

```ts
error(message): unknown;
```

Throw (or invoke the configured callback with) the message.

#### Parameters

##### message

`string`

#### Returns

`unknown`
