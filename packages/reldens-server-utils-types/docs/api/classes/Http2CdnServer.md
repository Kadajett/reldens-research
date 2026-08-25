# Class: Http2CdnServer

HTTP/2 secure static-file (CDN) server with SNI, HTTP/1 fallback, CORS and cache headers.

## Constructors

### Constructor

```ts
new Http2CdnServer(): Http2CdnServer;
```

#### Returns

`Http2CdnServer`

## Methods

### create()

```ts
create(): boolean;
```

Validate certs, build the server and wire handlers; false on error.

#### Returns

`boolean`

***

### listen()

```ts
listen(): boolean;
```

Start listening on the configured port.

#### Returns

`boolean`

***

### close()

```ts
close(): Promise<boolean>;
```

Close the server.

#### Returns

`Promise`\<`boolean`\>
