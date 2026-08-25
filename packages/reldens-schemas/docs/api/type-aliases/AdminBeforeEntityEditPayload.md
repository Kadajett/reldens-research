# Type Alias: AdminBeforeEntityEditPayload

```ts
type AdminBeforeEntityEditPayload = {
  adminManager: unknown;
  driverResource: unknown;
  entityPath: unknown;
  req: ExpressRequest;
  res: ExpressResponse;
};
```

`reldens.adminBeforeEntityEdit`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, driverResource, entityPath, req, res` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router.js:L128

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
