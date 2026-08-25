# Type Alias: AdminBeforeEntityLoadPayload

```ts
type AdminBeforeEntityLoadPayload = {
  adminManager: AdminManager;
  driverResource: object;
  entityId: string;
};
```

`reldens.adminBeforeEntityLoad`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, driverResource, entityId` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router-contents.js:L490

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

### entityId

```ts
entityId: string;
```
