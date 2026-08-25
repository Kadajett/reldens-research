# Type Alias: EventBuildSideBarBeforePayload

```ts
type EventBuildSideBarBeforePayload = {
  adminManager: AdminManager;
  navigationContents: object;
};
```

`reldens.eventBuildSideBarBefore`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, navigationContents` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/contents-builder.js:L69

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
