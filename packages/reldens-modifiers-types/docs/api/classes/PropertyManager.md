# Class: PropertyManager

Resolves and mutates dotted/slash property paths on a target ('stats/hp').

## Constructors

### Constructor

```ts
new PropertyManager(): PropertyManager;
```

#### Returns

`PropertyManager`

## Methods

### getPropertyValue()

```ts
getPropertyValue(propertyOwner, propertyString): unknown;
```

Read the value at a property path on an owner object.

#### Parameters

##### propertyOwner

`object`

##### propertyString

`string`

#### Returns

`unknown`

***

### setOwnerProperty()

```ts
setOwnerProperty(
   propertyOwner, 
   propertyString, 
   value): unknown;
```

Write a value at a property path on an owner object.

#### Parameters

##### propertyOwner

`object`

##### propertyString

`string`

##### value

`unknown`

#### Returns

`unknown`

***

### manageOwnerProperty()

```ts
manageOwnerProperty(
   propertyOwner, 
   propertyString, 
   value): unknown;
```

Create the path if missing, then set the value.

#### Parameters

##### propertyOwner

`object`

##### propertyString

`string`

##### value

`unknown`

#### Returns

`unknown`
