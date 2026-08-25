# Type Alias: AdminAfterEntityDeletePayload

```ts
type AdminAfterEntityDeletePayload = {
  adminManager: AdminManager;
  driverResource: object;
  idProperty: string;
  ids: number[];
};
```

`reldens.adminAfterEntityDelete`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, driverResource, idProperty, ids` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router-contents.js:L305

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

### idProperty

```ts
idProperty: string;
```

***

### ids

```ts
ids: number[];
```
