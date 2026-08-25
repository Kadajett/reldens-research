# Class: LevelsSet

Manages an owner's level progression: holds levels, tracks current level/experience,
applies level modifiers, and awards experience with automatic level-up/down. The real
config is passed to `init()`, not the constructor.

## Extended by

- [`ClassPath`](ClassPath.md)

## Constructors

### Constructor

```ts
new LevelsSet(): LevelsSet;
```

#### Returns

`LevelsSet`

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

***

### init()

```ts
init(props): Promise<false | void>;
```

Configure levels, autofill, current level/exp and experience order; fires INIT events.

#### Parameters

##### props

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

***

### levelUp()

```ts
levelUp(): Promise<false | void>;
```

Increment the level, apply its modifiers, fire LEVEL_UP.

#### Returns

`Promise`\<`false` \| `void`\>

***

### levelDown()

```ts
levelDown(): Promise<false | void>;
```

Revert modifiers, decrement the level, fire LEVEL_DOWN.

#### Returns

`Promise`\<`false` \| `void`\>

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

***

### getNextLevelExperience()

```ts
getNextLevelExperience(): number;
```

Required experience for the next reachable level.

#### Returns

`number`

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
