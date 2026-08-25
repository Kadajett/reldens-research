# Class: Condition

A comparison gate on a target property. `isValidOn(target)` compares the target's
property value against the configured value using `conditional` (eq/ne/lt/gt/le/ge).

## Constructors

### Constructor

```ts
new Condition(props): Condition;
```

#### Parameters

##### props

###### key

`string` = `...`

Unique condition key. Required.

###### propertyKey

`string` = `...`

Property path to test (e.g. 'stats/level'). Required.

###### conditional

`"eq"` \| `"ne"` \| `"lt"` \| `"gt"` \| `"le"` \| `"ge"` = `compareSchema`

Comparison operator; one of ModifierConst.COMPARE. Required.

###### type?

`"string"` \| `"int"` = `...`

Coerce value to int (default) or string.

###### value

`string` \| `number` = `modifierValue`

The value to compare against. Required.

#### Returns

`Condition`

## Methods

### isValidOn()

```ts
isValidOn(targetObject, overrideVal?): boolean;
```

True when the condition holds for the target (optionally overriding the value).

#### Parameters

##### targetObject

`object`

##### overrideVal?

`string` \| `number`

#### Returns

`boolean`
