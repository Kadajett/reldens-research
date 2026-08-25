# Type Alias: DynamicFormRequestHandlerBeforeSavePayload

```ts
type DynamicFormRequestHandlerBeforeSavePayload = {
  formConfig: unknown;
  formKey: unknown;
  preparedValues: unknown;
  req: ExpressRequest;
  res: ExpressResponse;
};
```

`reldens.dynamicFormRequestHandler.beforeSave`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `formConfig, formKey, preparedValues, req, res`
- Emitted at: lib/dynamic-form-request-handler.js:L51

## Properties

### formConfig

```ts
formConfig: unknown;
```

***

### formKey

```ts
formKey: unknown;
```

***

### preparedValues

```ts
preparedValues: unknown;
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
