# Type Alias: ObjectBodyChangePayload

```ts
type ObjectBodyChangePayload = {
  body: PhysicalBody;
  changes: unknown;
  key: string;
};
```

`reldens.objectBodyChange`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `body, changes, key`
- Emitted at: lib/objects/client/plugin.js:L205

## Properties

### body

```ts
body: PhysicalBody;
```

***

### changes

```ts
changes: unknown;
```

***

### key

```ts
key: string;
```
