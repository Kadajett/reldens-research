# Type Alias: AdminAfterEntitySavePayload

```ts
type AdminAfterEntitySavePayload = {
  adminManager: AdminManager;
  driverResource: object;
  entityData: object;
  entityPath: string;
  req: object;
  res: object;
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
adminManager: AdminManager;
```

***

### driverResource

```ts
driverResource: object;
```

***

### entityData

```ts
entityData: object;
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
