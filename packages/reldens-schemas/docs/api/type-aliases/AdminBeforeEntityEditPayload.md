# Type Alias: AdminBeforeEntityEditPayload

```ts
type AdminBeforeEntityEditPayload = {
  adminManager: AdminManager;
  driverResource: object;
  entityPath: string;
  req: object;
  res: object;
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
adminManager: AdminManager;
```

***

### driverResource

```ts
driverResource: object;
```

***

### entityPath

```ts
entityPath: string;
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
