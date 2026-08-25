# Class: Modifier

A single value change applied to a target property. Construct it with a config object,
then `apply()`/`revert()` it against a target (or the target set in the config).

## Constructors

### Constructor

```ts
new Modifier(props): Modifier;
```

#### Parameters

##### props

###### key

`string` = `...`

Unique modifier key. Required for a READY modifier.

###### propertyKey?

`string` = `...`

Property path this modifies (e.g. 'stats/hp'). Alias: `property_key`.

###### property_key?

`string` = `...`

###### basePropertyKey?

`string` = `...`

Property to read the base value from; defaults to propertyKey.

###### operation

`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` = `opSchema`

One of ModifierConst.OPS. Required.

###### type?

`"string"` \| `"int"` = `...`

Coerce value to int (default) or string.

###### value

`string` \| `number` = `modifierValue`

The operation value. Required.

###### target?

`any` = `...`

Default target; an object or false.

###### minValue?

`number` \| `false` = `...`

###### maxValue?

`number` \| `false` = `...`

###### minProperty?

`string` \| `false` = `...`

###### maxProperty?

`string` \| `false` = `...`

###### conditions?

`any`[] = `...`

Condition instances gating application; default [].

###### conditionsOnRevert?

`false` \| `any`[] = `...`

Condition instances (or false) gating revert.

#### Returns

`Modifier`

## Properties

### state

```ts
readonly state: string;
```

The modifier's readiness/applied state (ModifierConst.MOD_*).

## Methods

### apply()

```ts
apply(
   target?, 
   useBasePropertyToGetValue?, 
   applyOnBaseProperty?): unknown;
```

Apply the modifier to `target` (or the configured target).

#### Parameters

##### target?

`object`

##### useBasePropertyToGetValue?

`boolean`

##### applyOnBaseProperty?

`boolean`

#### Returns

`unknown`

***

### revert()

```ts
revert(
   target?, 
   useBasePropertyToGetValue?, 
   applyOnBaseProperty?): unknown;
```

Reverse a previously applied modifier.

#### Parameters

##### target?

`object`

##### useBasePropertyToGetValue?

`boolean`

##### applyOnBaseProperty?

`boolean`

#### Returns

`unknown`

***

### execute()

```ts
execute(
   target?, 
   revert?, 
   useBasePropertyToGetValue?, 
   applyOnBaseProperty?): unknown;
```

Apply or revert; the shared implementation behind apply()/revert().

#### Parameters

##### target?

`object`

##### revert?

`boolean`

##### useBasePropertyToGetValue?

`boolean`

##### applyOnBaseProperty?

`boolean`

#### Returns

`unknown`

***

### validateConditions()

```ts
validateConditions(target): boolean;
```

Whether every attached Condition passes for the target.

#### Parameters

##### target

`object`

#### Returns

`boolean`

***

### getModifiedValue()

```ts
getModifiedValue(revert?, useBasePropertyToGetValue?): string | number;
```

Compute the new value this modifier would produce, without writing it.

#### Parameters

##### revert?

`boolean`

##### useBasePropertyToGetValue?

`boolean`

#### Returns

`string` \| `number`
