# Class: PhysicalAttack

An Attack that applies its damage on a physics-world collision hit rather than immediately.

## Extends

- [`Attack`](Attack.md)

## Constructors

### Constructor

```ts
new PhysicalAttack(props): PhysicalAttack;
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

###### affectedProperty

`string` = `...`

Property path the damage affects (e.g. 'stats/hp'). Required.

###### allowEffectBelowZero?

`boolean` = `...`

###### hitDamage?

`number` = `...`

Damage at 100%.

###### applyDirectDamage?

`boolean` = `...`

Skip the damage calc and apply hitDamage raw.

###### attackProperties?

`string`[] = `...`

###### defenseProperties?

`string`[] = `...`

###### aimProperties?

`string`[] = `...`

###### dodgeProperties?

`string`[] = `...`

###### dodgeFullEnabled?

`boolean` = `...`

###### dodgeOverAimSuccess?

`number` = `...`

###### damageAffected?

`boolean` = `...`

###### criticalAffected?

`boolean` = `...`

###### propertiesTotalOperators?

`Record`\<`string`, `any`\> = `...`

Map of property path -> @reldens/modifiers OPS operator.

###### magnitude

`number` = `...`

Required.

###### objectWidth

`number` = `...`

Required.

###### objectHeight

`number` = `...`

Required.

###### validateTargetOnHit?

`boolean` = `...`

#### Returns

`PhysicalAttack`

#### Overrides

[`Attack`](Attack.md).[`constructor`](Attack.md#constructor)

## Methods

### validate()

```ts
validate(): boolean;
```

Validate readiness, conditions, uses and cast state; fires the VALIDATE events.

#### Returns

`boolean`

#### Inherited from

[`Attack`](Attack.md).[`validate`](Attack.md#validate)

***

### validateConditions()

```ts
validateConditions(): boolean;
```

Run each owner Condition against the owner.

#### Returns

`boolean`

#### Inherited from

[`Attack`](Attack.md).[`validateConditions`](Attack.md#validateconditions)

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

[`Attack`](Attack.md).[`validateRange`](Attack.md#validaterange)

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

[`Attack`](Attack.md).[`isInRange`](Attack.md#isinrange)

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

[`Attack`](Attack.md).[`execute`](Attack.md#execute)

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

[`Attack`](Attack.md).[`applyCriticalValue`](Attack.md#applycriticalvalue)

***

### isCritical()

```ts
isCritical(): boolean;
```

Whether a critical is rolled (against criticalChance).

#### Returns

`boolean`

#### Inherited from

[`Attack`](Attack.md).[`isCritical`](Attack.md#iscritical)

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

[`Attack`](Attack.md).[`applyModifiers`](Attack.md#applymodifiers)

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

[`Attack`](Attack.md).[`fireEvent`](Attack.md#fireevent)

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

[`Attack`](Attack.md).[`listenEvent`](Attack.md#listenevent)

***

### runSkillLogic()

```ts
runSkillLogic(): Promise<boolean>;
```

Validate target/range, then apply damage.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Attack`](Attack.md).[`runSkillLogic`](Attack.md#runskilllogic)

***

### applyDamageTo()

```ts
applyDamageTo(target): Promise<boolean>;
```

Full damage pipeline: dodge check, proportion damage, critical, write property, fire event.

#### Parameters

##### target

`object`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`Attack`](Attack.md).[`applyDamageTo`](Attack.md#applydamageto)

***

### getAffectedPropertyValue()

```ts
getAffectedPropertyValue(target): number;
```

Read the affected property value from a target.

#### Parameters

##### target

`object`

#### Returns

`number`

#### Inherited from

[`Attack`](Attack.md).[`getAffectedPropertyValue`](Attack.md#getaffectedpropertyvalue)

***

### executeOnHit()

```ts
executeOnHit(target): Promise<unknown>;
```

Run the parent Attack logic on collision; fires the physical-attack-hit event.

#### Parameters

##### target

`object`

#### Returns

`Promise`\<`unknown`\>
