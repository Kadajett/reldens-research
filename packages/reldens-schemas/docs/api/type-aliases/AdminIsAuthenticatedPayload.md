# Type Alias: AdminIsAuthenticatedPayload

```ts
type AdminIsAuthenticatedPayload = {
  adminManager: unknown;
  allowContinue: unknown;
  next: unknown;
  req: ExpressRequest;
  res: ExpressResponse;
};
```

`reldens.adminIsAuthenticated`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminManager, allowContinue, next, req, res` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router.js:L207

## Properties

### adminManager

```ts
adminManager: unknown;
```

***

### allowContinue

```ts
allowContinue: unknown;
```

***

### next

```ts
next: unknown;
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
