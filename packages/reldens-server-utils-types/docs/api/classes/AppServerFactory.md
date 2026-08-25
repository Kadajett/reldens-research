# Class: AppServerFactory

Express app + HTTP/HTTPS(/HTTP2) server factory with security, CORS, compression, rate limiting.

## Constructors

### Constructor

```ts
new AppServerFactory(): AppServerFactory;
```

#### Returns

`AppServerFactory`

## Methods

### createAppServer()

```ts
createAppServer(appServerConfig?): 
  | false
  | {
  app: unknown;
  appServer: unknown;
  http2CdnServer: unknown;
};
```

Build and configure the app + server from config; returns `{ app, appServer, http2CdnServer }`.

#### Parameters

##### appServerConfig?

###### port?

`number` = `...`

###### autoListen?

`boolean` = `...`

###### useHttps?

`boolean` = `...`

###### keyPath?

`string` = `...`

###### certPath?

`string` = `...`

###### httpsChain?

`string` = `...`

###### passphrase?

`string` = `...`

###### useCors?

`boolean` = `...`

###### corsOrigin?

`any` = `...`

'*', a RegExp, or a list of origins.

###### jsonLimit?

`string` = `...`

###### urlencodedLimit?

`string` = `...`

###### maxRequestSize?

`string` = `...`

###### useHelmet?

`boolean` = `...`

###### useCompression?

`boolean` = `...`

###### globalRateLimit?

`number` = `...`

###### windowMs?

`number` = `...`

###### maxRequests?

`number` = `...`

###### trustedProxy?

`string` = `...`

###### useVirtualHosts?

`boolean` = `...`

###### domains?

`object`[] = `...`

Virtual-host domains: `{ hostname, aliases?, keyPath?, certPath? }`.

###### http2CdnEnabled?

`boolean` = `...`

###### http2CdnPort?

`number` = `...`

#### Returns

  \| `false`
  \| \{
  `app`: `unknown`;
  `appServer`: `unknown`;
  `http2CdnServer`: `unknown`;
\}

***

### listen()

```ts
listen(port?): boolean;
```

Start listening (defaults to the configured port).

#### Parameters

##### port?

`number`

#### Returns

`boolean`

***

### close()

```ts
close(): Promise<unknown>;
```

Close the CDN then the app server.

#### Returns

`Promise`\<`unknown`\>

***

### serveStatics()

```ts
serveStatics(app, statics): Promise<true>;
```

Mount express.static at the root.

#### Parameters

##### app

`unknown`

##### statics

`string`

#### Returns

`Promise`\<`true`\>

***

### serveStaticsPath()

```ts
serveStaticsPath(
   app, 
   staticsPath, 
statics): Promise<true>;
```

Mount static files under a path prefix.

#### Parameters

##### app

`unknown`

##### staticsPath

`string`

##### statics

`string`

#### Returns

`Promise`\<`true`\>

***

### enableServeHome()

```ts
enableServeHome(app, homePageLoadCallback): Promise<void>;
```

Register a rate-limited home route serving content from a callback.

#### Parameters

##### app

`unknown`

##### homePageLoadCallback

(`req`) => `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

***

### addDomain()

```ts
addDomain(domainConfig): boolean;
```

Add a virtual-host / SNI domain.

#### Parameters

##### domainConfig

###### hostname

`string`

#### Returns

`boolean`

***

### enableCSP()

```ts
enableCSP(cspOptions): unknown;
```

Enable a Content-Security-Policy on the app.

#### Parameters

##### cspOptions

`object`

#### Returns

`unknown`
