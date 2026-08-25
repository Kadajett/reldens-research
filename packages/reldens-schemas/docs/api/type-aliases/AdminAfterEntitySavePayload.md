# Type Alias: AdminAfterEntitySavePayload

```ts
type AdminAfterEntitySavePayload = {
  adminManager: unknown;
  driverResource: unknown;
  entityData: unknown;
  entityPath: unknown;
  req: ExpressRequest;
  res: ExpressResponse;
};
```

`reldens.adminAfterEntitySave`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, driverResource, entityData, entityPath, req, res` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router-contents.js:L351

## Properties

### adminManager

```ts
adminManager: unknown;
```

***

### driverResource

```ts
driverResource: unknown;
```

***

### entityData

```ts
entityData: unknown;
```

***

### entityPath

```ts
entityPath: unknown;
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
