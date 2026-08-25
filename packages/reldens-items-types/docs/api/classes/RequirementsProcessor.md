# Class: RequirementsProcessor

Validates and applies exchange requirements against the two inventories.

## Constructors

### Constructor

```ts
new RequirementsProcessor(props?): RequirementsProcessor;
```

#### Parameters

##### props?

###### requirementsByItemUid?

`boolean`

###### requirementsByItemKey?

`boolean`

#### Returns

`RequirementsProcessor`

## Methods

### validateRequirements()

```ts
validateRequirements(inventoryKeyFrom, exchange): boolean;
```

Validate that every staged item's requirements are met on the opposite inventory.

#### Parameters

##### inventoryKeyFrom

`"A"` \| `"B"`

##### exchange

[`ExchangePlatform`](ExchangePlatform.md)

#### Returns

`boolean`
