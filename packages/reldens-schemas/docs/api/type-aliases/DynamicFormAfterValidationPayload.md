# Type Alias: DynamicFormAfterValidationPayload

```ts
type DynamicFormAfterValidationPayload = {
  formConfig: object;
  formKey: string;
  req: object;
  submittedValues: object;
  validationResult: {
     isValid: boolean;
  };
};
```

`reldens.dynamicForm.afterValidation`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `formConfig, formKey, req, submittedValues, validationResult`
- Emitted at: lib/dynamic-form.js:L64

## Properties

### formConfig

```ts
formConfig: object;
```

***

### formKey

```ts
formKey: string;
```

***

### req

```ts
req: object;
```

***

### submittedValues

```ts
submittedValues: object;
```

***

### validationResult

```ts
validationResult: {
  isValid: boolean;
};
```

#### isValid

```ts
isValid: boolean;
```
