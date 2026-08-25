# Type Alias: AdminBeforeFieldRenderPayload

```ts
type AdminBeforeFieldRenderPayload = {
  adminContentsRender: object;
  adminFilesContents: object;
  adminManager: AdminManager;
  driverResource: object;
  loadedEntity: object;
  property: object;
  propertyKey: string;
  renderedEditProperties: object;
  req: object;
  templateData: object;
};
```

`reldens.adminBeforeFieldRender`
- Zone: cms
- Dispatch: emit (awaited)
- Payload: one object with keys `adminContentsRender, adminFilesContents, adminManager, driverResource, loadedEntity, property, propertyKey, renderedEditProperties, req, templateData` (site adds spread/computed keys)
- Emitted at: lib/admin-manager/router-contents.js:L266

## Properties

### adminContentsRender

```ts
adminContentsRender: object;
```

***

### adminFilesContents

```ts
adminFilesContents: object;
```

***

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

### loadedEntity

```ts
loadedEntity: object;
```

***

### property

```ts
property: object;
```

***

### propertyKey

```ts
propertyKey: string;
```

***

### renderedEditProperties

```ts
renderedEditProperties: object;
```

***

### req

```ts
req: object;
```

***

### templateData

```ts
templateData: object;
```
