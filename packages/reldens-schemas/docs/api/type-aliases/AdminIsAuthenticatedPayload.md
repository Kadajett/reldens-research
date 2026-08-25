# Type Alias: AdminIsAuthenticatedPayload

```ts
type AdminIsAuthenticatedPayload = {
  adminManager: AdminManager;
  allowContinue: {
     callback: null;
     result: boolean;
  };
  next: object;
  req: object;
  res: object;
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
adminManager: AdminManager;
```

***

### allowContinue

```ts
allowContinue: {
  callback: null;
  result: boolean;
};
```

#### callback

```ts
callback: null;
```

#### result

```ts
result: boolean;
```

***

### next

```ts
next: object;
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
