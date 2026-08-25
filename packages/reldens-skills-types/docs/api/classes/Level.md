# Class: Level

A single level: its integer `key`, `modifiers`, `label` and `requiredExperience`.

## Constructors

### Constructor

```ts
new Level(props): Level;
```

#### Parameters

##### props

###### key

`number` = `...`

Integer level number. Required.

###### modifiers?

`any`[] = `...`

Modifiers applied at this level; @reldens/modifiers Modifier instances.

###### label?

`string` = `...`

###### requiredExperience?

`number` = `...`

XP required to reach this level; the alias `required_experience` is also read.

###### required_experience?

`number` = `...`

#### Returns

`Level`
