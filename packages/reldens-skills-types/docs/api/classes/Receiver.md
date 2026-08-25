# Class: Receiver

Client-side dispatcher: maps skill action constants to `on*` handler names and routes
incoming messages to them. Extend it and override the `on*` hooks you need.

## Constructors

### Constructor

```ts
new Receiver(): Receiver;
```

#### Returns

`Receiver`

## Methods

### setDefaultMethods()

```ts
setDefaultMethods(): void;
```

Populate the default action -> on* handler-name map.

#### Returns

`void`

***

### processMessage()

```ts
processMessage(message): false | void;
```

Validate a message's action prefix and dispatch it to its handler.

#### Parameters

##### message

###### act

`string`

#### Returns

`false` \| `void`

***

### isValidMessage()

```ts
isValidMessage(message): boolean;
```

True when `act` begins with the skills action prefix (`rski.`).

#### Parameters

##### message

###### act

`string`

#### Returns

`boolean`
