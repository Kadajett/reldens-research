# Class: Calculator

Pure arithmetic for a modifier operation; no state.

## Constructors

### Constructor

```ts
new Calculator(): Calculator;
```

#### Returns

`Calculator`

## Methods

### calculateNewValue()

```ts
calculateNewValue(
   originalValue, 
   operation, 
   operationValue, 
   revert?): number;
```

Apply an operation to a value (or reverse it when `revert` is true). `operation` is
one of ModifierConst.OPS (INC/DEC/MUL/DIV/INC_P/DEC_P/...).

#### Parameters

##### originalValue

`number`

##### operation

`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9`

##### operationValue

`number`

##### revert?

`boolean`

#### Returns

`number`
