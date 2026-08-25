# Class: GroupsDataGenerator

Static helper: maps group DB models into the structure the manager consumes.

## Constructors

### Constructor

```ts
new GroupsDataGenerator(): GroupsDataGenerator;
```

#### Returns

`GroupsDataGenerator`

## Methods

### groupsListMappedData()

```ts
static groupsListMappedData(inventoryClasses, groupModelsList): object;
```

Map group models to `{ groupList, groupBaseData, groupModels }`.

#### Parameters

##### inventoryClasses

`object`

##### groupModelsList

`object`[]

#### Returns

`object`
