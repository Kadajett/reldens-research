# Class: EventsManager

An async/sync event emitter with keyed listeners, leak warnings, and data filtering.

## Constructors

### Constructor

```ts
new EventsManager(): EventsManager;
```

#### Returns

`EventsManager`

## Methods

### on()

```ts
on(type, fn): false | EventsManager;
```

Register an always-on listener.

#### Parameters

##### type

`string` \| `symbol`

##### fn

(...`args`) => `unknown`

#### Returns

`false` \| `EventsManager`

***

### once()

```ts
once(type, fn): false | EventsManager;
```

Register a one-shot listener.

#### Parameters

##### type

`string` \| `symbol`

##### fn

(...`args`) => `unknown`

#### Returns

`false` \| `EventsManager`

***

### emit()

```ts
emit(type, ...args): Promise<boolean>;
```

Async emit: awaits promise-returning listeners in sequence.

#### Parameters

##### type

`string` \| `symbol`

##### args

...`unknown`[]

#### Returns

`Promise`\<`boolean`\>

***

### emitSync()

```ts
emitSync(type, ...args): boolean;
```

Synchronous emit (no awaiting).

#### Parameters

##### type

`string` \| `symbol`

##### args

...`unknown`[]

#### Returns

`boolean`

***

### removeListener()

```ts
removeListener(type, fn?): boolean;
```

Remove one listener (by fn) or all listeners for a type.

#### Parameters

##### type

`string` \| `symbol`

##### fn?

(...`args`) => `unknown`

#### Returns

`boolean`

***

### removeAllListeners()

```ts
removeAllListeners(): void;
```

Remove every listener and cache.

#### Returns

`void`

***

### onWithKey()

```ts
onWithKey(
   eventName, 
   callback, 
   uniqueRemoveKey, 
   masterKey?): false | object;
```

Register a listener retrievable/removable by a unique key (optionally grouped).

#### Parameters

##### eventName

`string`

##### callback

(...`args`) => `unknown`

##### uniqueRemoveKey

`string`

##### masterKey?

`string`

#### Returns

`false` \| `object`

***

### offWithKey()

```ts
offWithKey(uniqueRemoveKey, masterKey?): boolean;
```

Remove a keyed listener.

#### Parameters

##### uniqueRemoveKey

`string`

##### masterKey?

`string`

#### Returns

`boolean`

***

### offByMasterKey()

```ts
offByMasterKey(masterKey): false | void;
```

Remove all listeners grouped under a master key.

#### Parameters

##### masterKey

`string`

#### Returns

`false` \| `void`
