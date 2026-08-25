# Class: SchemaValidator

Runtime object-schema validator (extends [ValidatorInterface](ValidatorInterface.md)). Construct with a
schema (a map of property name -> rule with `type`, `required`, `min`/`max`, `pattern`,
`enum`, `custom`, `nested`, `valuesType`).

## Constructors

### Constructor

```ts
new SchemaValidator(schema): SchemaValidator;
```

#### Parameters

##### schema

`object`

#### Returns

`SchemaValidator`

## Methods

### validate()

```ts
validate(obj, schema?): boolean;
```

Validate an object against the schema (or an override schema).

#### Parameters

##### obj

`object`

##### schema?

`object`

#### Returns

`boolean`

***

### isValidSchema()

```ts
isValidSchema(
   obj, 
   schema, 
   objectKey): boolean;
```

Validate a single value against one field rule.

#### Parameters

##### obj

`unknown`

##### schema

`object`

##### objectKey

`string`

#### Returns

`boolean`
