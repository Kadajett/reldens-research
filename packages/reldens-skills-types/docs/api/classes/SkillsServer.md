# Class: SkillsServer

Server-side wiring: builds a [ClassPath](ClassPath.md) for the owner and, when a `client` is
given, attaches a Sender to broadcast skill/level action data. Work happens in setup.

## Constructors

### Constructor

```ts
new SkillsServer(props): SkillsServer;
```

#### Parameters

##### props

###### owner?

`any` = `zInstance`

###### client?

`any` = `...`

Client with send() and broadcast(); optional.

#### Returns

`SkillsServer`

## Properties

### classPath

```ts
readonly classPath: ClassPath;
```

## Methods

### setupServer()

```ts
setupServer(props): false | undefined;
```

Validate the owner, create/reuse a ClassPath, attach a Sender when a client is present.

#### Parameters

##### props

###### owner?

`any` = `zInstance`

###### client?

`any` = `...`

Client with send() and broadcast(); optional.

#### Returns

`false` \| `undefined`
