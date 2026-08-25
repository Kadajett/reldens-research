# Class: Effect

A Skill that applies its `targetEffects` modifiers (with critical chance) to the target.

## Extends

- [`Skill`](Skill.md)

## Extended by

- [`PhysicalEffect`](PhysicalEffect.md)

## Constructors

### Constructor

```ts
new Effect(props): Effect;
```

#### Parameters

##### props

###### key

`string` = `...`

Unique skill key. Required.

###### owner?

`any` = `zInstance`

The owning entity; must expose getPosition(). Required (mutated by the engine).

###### ownerIdProperty?

`string` = `...`

###### customData?

`any` = `...`

Free-form data attached to the skill; `false` when unset.

###### autoValidation?

`boolean` = `...`

###### skillDelay?

`number` = `...`

Cooldown between activations, ms. This is the cooldown mechanism (there is no coolDown prop).

###### castTime?

`number` = `...`

Cast time, ms.

###### usesLimit?

`number` = `...`

Total uses cap; 0 = unlimited.

###### canActivate?

`boolean` = `...`

###### range?

`number` = `...`

Range; 0 = infinite.

###### groups?

`any`[] = `...`

###### rangeAutomaticValidation?

`boolean` = `...`

###### rangePropertyX?

`string` \| `false` = `...`

###### rangePropertyY?

`string` \| `false` = `...`

###### rangeTargetPropertyX?

`string` \| `false` = `...`

###### rangeTargetPropertyY?

`string` \| `false` = `...`

###### allowSelfTarget?

`boolean` = `...`

###### target?

`any` = `...`

Default target; an entity or `false` (can also be passed to execute()).

###### events?

`any` = `...`

###### ownerConditions?

`any`[] = `...`

Conditions gating the skill; @reldens/modifiers Condition instances.

###### ownerEffects?

`any`[] = `...`

Modifiers applied to the owner; @reldens/modifiers Modifier instances.

###### criticalChance?

`number` = `...`

Critical hit chance, 0-100.

###### criticalMultiplier?

`number` = `...`

###### criticalFixedValue?

`number` = `...`

###### targetEffects

`any`[] = `...`

Modifiers applied to the target; @reldens/modifiers Modifier instances. Required.

#### Returns

`Effect`

#### Overrides

[`Skill`](Skill.md).[`constructor`](Skill.md#constructor)

## Methods

### validate()

```ts
validate(): boolean;
```

Validate readiness, conditions, uses and cast state; fires the VALIDATE events.

#### Returns

`boolean`

#### Inherited from

[`Skill`](Skill.md).[`validate`](Skill.md#validate)

***

### validateConditions()

```ts
validateConditions(): boolean;
```

Run each owner Condition against the owner.

#### Returns

`boolean`

#### Inherited from

[`Skill`](Skill.md).[`validateConditions`](Skill.md#validateconditions)

***

### validateRange()

```ts
validateRange(target): boolean;
```

Compare owner vs target positions using the configured range properties.

#### Parameters

##### target

`object`

#### Returns

`boolean`

#### Inherited from

[`Skill`](Skill.md).[`validateRange`](Skill.md#validaterange)

***

### isInRange()

```ts
isInRange(ownerPosition, targetPosition): boolean;
```

Range check via InteractionArea; range 0 means infinite.

#### Parameters

##### ownerPosition

###### x

`number`

###### y

`number`

##### targetPosition

###### x

`number`

###### y

`number`

#### Returns

`boolean`

#### Inherited from

[`Skill`](Skill.md).[`isInRange`](Skill.md#isinrange)

***

### execute()

```ts
execute(target): Promise<boolean>;
```

Main entry point: fire before/after events, apply owner effects, run logic, count uses.

#### Parameters

##### target

`object`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Skill`](Skill.md).[`execute`](Skill.md#execute)

***

### applyCriticalValue()

```ts
applyCriticalValue(normalValue): number;
```

Roll a critical and apply the multiplier/fixed value to a value.

#### Parameters

##### normalValue

`number`

#### Returns

`number`

#### Inherited from

[`Skill`](Skill.md).[`applyCriticalValue`](Skill.md#applycriticalvalue)

***

### isCritical()

```ts
isCritical(): boolean;
```

Whether a critical is rolled (against criticalChance).

#### Returns

`boolean`

#### Inherited from

[`Skill`](Skill.md).[`isCritical`](Skill.md#iscritical)

***

### applyModifiers()

```ts
applyModifiers(
   modifiersObjectList, 
   target, 
   avoidCritical?): void;
```

Apply a list of modifiers to a target (optionally skipping critical).

#### Parameters

##### modifiersObjectList

`object`[]

##### target

`object`

##### avoidCritical?

`boolean`

#### Returns

`void`

#### Inherited from

[`Skill`](Skill.md).[`applyModifiers`](Skill.md#applymodifiers)

***

### fireEvent()

```ts
fireEvent(eventName, ...args): Promise<unknown>;
```

Fire a namespaced event through the events manager.

#### Parameters

##### eventName

`string`

##### args

...`unknown`[]

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`Skill`](Skill.md).[`fireEvent`](Skill.md#fireevent)

***

### listenEvent()

```ts
listenEvent(
   eventName, 
   callback, 
   removeKey?, 
   masterKey?): unknown;
```

Subscribe to a namespaced event.

#### Parameters

##### eventName

`string`

##### callback

(...`args`) => `unknown`

##### removeKey?

`string`

##### masterKey?

`string`

#### Returns

`unknown`

#### Inherited from

[`Skill`](Skill.md).[`listenEvent`](Skill.md#listenevent)

***

### runSkillLogic()

```ts
runSkillLogic(): Promise<boolean>;
```

Validate target/range, then apply the target effects.

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`Skill`](Skill.md).[`runSkillLogic`](Skill.md#runskilllogic)
