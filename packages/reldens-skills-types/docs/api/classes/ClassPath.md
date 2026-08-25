# Class: ClassPath

A LevelsSet that also manages a labeled class path and the skills a character owns,
unlocking/removing skills as levels change. Config is passed to `init()`.

## Extends

- [`LevelsSet`](LevelsSet.md)

## Constructors

### Constructor

```ts
new ClassPath(): ClassPath;
```

#### Returns

`ClassPath`

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`constructor`](LevelsSet.md#constructor)

## Methods

### setOwner()

```ts
setOwner(props): false | void;
```

Assign the owner (must expose getPosition()).

#### Parameters

##### props

###### owner

`object`

###### ownerIdProperty?

`string`

#### Returns

`false` \| `void`

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`setOwner`](LevelsSet.md#setowner)

***

### levelUp()

```ts
levelUp(): Promise<false | void>;
```

Increment the level, apply its modifiers, fire LEVEL_UP.

#### Returns

`Promise`\<`false` \| `void`\>

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`levelUp`](LevelsSet.md#levelup)

***

### levelDown()

```ts
levelDown(): Promise<false | void>;
```

Revert modifiers, decrement the level, fire LEVEL_DOWN.

#### Returns

`Promise`\<`false` \| `void`\>

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`levelDown`](LevelsSet.md#leveldown)

***

### addExperience()

```ts
addExperience(amount): Promise<void>;
```

Add experience, triggering level-ups; fires LEVEL_EXPERIENCE_ADDED.

#### Parameters

##### amount

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`addExperience`](LevelsSet.md#addexperience)

***

### getNextLevelExperience()

```ts
getNextLevelExperience(): number;
```

Required experience for the next reachable level.

#### Returns

`number`

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`getNextLevelExperience`](LevelsSet.md#getnextlevelexperience)

***

### getLevelInstance()

```ts
getLevelInstance(level): false | Level;
```

The Level instance for a level number, or false.

#### Parameters

##### level

`number`

#### Returns

`false` \| [`Level`](Level.md)

#### Inherited from

[`LevelsSet`](LevelsSet.md).[`getLevelInstance`](LevelsSet.md#getlevelinstance)

***

### init()

```ts
init(props): Promise<false | void>;
```

Configure the class path (super.init + key/label/skillsByLevel); fires INIT_CLASS_PATH_END.

#### Parameters

##### props

###### key

`string` = `...`

Class-path code. Required.

###### label?

`string` = `...`

###### labelsByLevel?

`false` \| `Record`\<`string`, `string`\> = `...`

Map of level number -> display label, or false.

###### currentLabel?

`string` = `...`

###### skillsByLevel?

`false` \| `Record`\<`string`, `any`[]\> = `...`

Map of level number -> array of Skill instances, or false.

###### currentSkills?

`false` \| `Record`\<`string`, `any`\> = `...`

Map of skill key -> Skill instance, or false (auto-built from skillsByLevel).

###### affectedProperty?

`string` \| `false` = `...`

###### levels

`Record`\<`string`, `any`\> = `...`

Map of level number -> Level instance. Required (empty is rejected).

###### autoFillRanges?

`boolean` = `...`

###### autoFillExperienceMultiplier?

`number` = `...`

###### currentLevel?

`number` = `...`

###### currentExp?

`number` = `...`

###### setRequiredExperienceLimit?

`boolean` = `...`

###### ownerIdProperty?

`string` = `...`

###### increaseLevelsWithExperience?

`boolean` = `...`

###### levelsByExperience?

`string`[] = `...`

Level keys ordered by experience; defaults to the sorted level keys.

#### Returns

`Promise`\<`false` \| `void`\>

#### Overrides

[`LevelsSet`](LevelsSet.md).[`init`](LevelsSet.md#init)

***

### addSkills()

```ts
addSkills(skills): Promise<void>;
```

Merge skills into currentSkills by key; fires ADD_SKILLS events.

#### Parameters

##### skills

`Record`\<`string`, [`Skill`](Skill.md)\> \| [`Skill`](Skill.md)[]

#### Returns

`Promise`\<`void`\>

***

### removeSkills()

```ts
removeSkills(skills): Promise<void>;
```

Remove skills by key or instance; fires REMOVE_SKILLS events.

#### Parameters

##### skills

  \| `Record`\<`string`, [`Skill`](Skill.md)\>
  \| (`string` \| [`Skill`](Skill.md))[]

#### Returns

`Promise`\<`void`\>

***

### setOwnerSkills()

```ts
setOwnerSkills(skills): Promise<void>;
```

Set current skills, or rebuild them from skillsByLevel up to the current level.

#### Parameters

##### skills

`false` \| `Record`\<`string`, [`Skill`](Skill.md)\>

#### Returns

`Promise`\<`void`\>

***

### getCurrentLabel()

```ts
getCurrentLabel(): string;
```

The current display label for the level.

#### Returns

`string`
