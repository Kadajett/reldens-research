# Type Alias: AdminSideBarBeforeRenderPayload

```ts
type AdminSideBarBeforeRenderPayload = {
  adminManager: AdminManager;
  navigationContents: object;
  navigationView: string;
};
```

`reldens.adminSideBarBeforeRender`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, navigationContents, navigationView` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/contents-builder.js:L106

## Properties

### adminManager

```ts
adminManager: AdminManager;
```

***

### navigationContents

```ts
navigationContents: object;
```

***

### navigationView

```ts
navigationView: string;
```
