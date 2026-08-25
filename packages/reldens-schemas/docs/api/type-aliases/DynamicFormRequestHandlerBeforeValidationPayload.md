# Type Alias: DynamicFormRequestHandlerBeforeValidationPayload

```ts
type DynamicFormRequestHandlerBeforeValidationPayload = {
  formKey: unknown;
  req: ExpressRequest;
  res: ExpressResponse;
  submittedValues: unknown;
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
formKey: unknown;
```

***

### req

```ts
req: ExpressRequest;
```

***

### res

```ts
res: ExpressResponse;
```

***

### submittedValues

```ts
submittedValues: unknown;
```
