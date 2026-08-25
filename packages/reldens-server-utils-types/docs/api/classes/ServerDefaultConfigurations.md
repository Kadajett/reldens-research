# Class: ServerDefaultConfigurations

Static defaults: MIME-type and cache-max-age maps keyed by file extension.

## Constructors

### Constructor

```ts
new ServerDefaultConfigurations(): ServerDefaultConfigurations;
```

#### Returns

`ServerDefaultConfigurations`

## Accessors

### mimeTypes

#### Get Signature

```ts
get static mimeTypes(): Record<string, string>;
```

Extension -> MIME type.

##### Returns

`Record`\<`string`, `string`\>

***

### cacheConfig

#### Get Signature

```ts
get static cacheConfig(): Record<string, number>;
```

Extension -> Cache-Control max-age (seconds).

##### Returns

`Record`\<`string`, `number`\>
