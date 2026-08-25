# Type Alias: DynamicFormRequestHandlerBeforeValidationPayload

```ts
type DynamicFormRequestHandlerBeforeValidationPayload = {
  formKey: string;
  req: object;
  res: object;
  submittedValues: object;
};
```

`reldens.dynamicFormRequestHandler.beforeValidation`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `formKey, req, res, submittedValues`
- Emitted at: lib/dynamic-form-request-handler.js:L37

## Properties

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

### res

```ts
res: object;
```

***

### submittedValues

```ts
submittedValues: object;
```
