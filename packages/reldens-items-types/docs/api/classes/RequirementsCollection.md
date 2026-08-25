# Class: RequirementsCollection

A queryable list of [ExchangeRequirement](ExchangeRequirement.md)s.

## Constructors

### Constructor

```ts
new RequirementsCollection(props?): RequirementsCollection;
```

#### Parameters

##### props?

###### requirements?

[`ExchangeRequirement`](ExchangeRequirement.md)[]

#### Returns

`RequirementsCollection`

## Methods

### count()

```ts
count(): number;
```

Number of requirements.

#### Returns

`number`

***

### add()

```ts
add(
   itemUid, 
   itemKey, 
   requiredItemKey, 
   requiredQuantity, 
   autoRemoveRequirement): void;
```

Construct and append a new requirement.

#### Parameters

##### itemUid

`string`

##### itemKey

`string`

##### requiredItemKey

`string`

##### requiredQuantity

`number`

##### autoRemoveRequirement

`boolean`

#### Returns

`void`

***

### remove()

```ts
remove(itemUid): void;
```

Remove the first requirement matching `itemUid`.

#### Parameters

##### itemUid

`string`

#### Returns

`void`

***

### fetchAllBy()

```ts
fetchAllBy(propertyName, propertyValue): ExchangeRequirement[];
```

All requirements whose property matches.

#### Parameters

##### propertyName

`string`

##### propertyValue

`unknown`

#### Returns

[`ExchangeRequirement`](ExchangeRequirement.md)[]
