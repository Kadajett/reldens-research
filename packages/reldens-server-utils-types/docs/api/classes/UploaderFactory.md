# Class: UploaderFactory

Produces an Express middleware for secure multipart uploads (sanitization, MIME sniffing, limits).

## Constructors

### Constructor

```ts
new UploaderFactory(props): UploaderFactory;
```

#### Parameters

##### props

###### mimeTypes?

`Record`\<`string`, `string`[]\> = `...`

fileType -> allowed MIME types.

###### maxFileSize?

`number` = `...`

Max file size in bytes (default 20MB).

###### fileLimit?

`number` = `...`

Max file count; 0 = unlimited.

###### allowedExtensions?

`Record`\<`string`, `string`[]\> = `...`

fileType -> allowed extensions.

###### applySecureFileNames?

`boolean` = `...`

###### processErrorResponse?

`any` = `...`

`(status, message, req, res) => any`, or false.

###### dangerousExtensions?

`string`[] = `...`

###### maxFilenameLength?

`number` = `...`

#### Returns

`UploaderFactory`

## Methods

### createUploader()

```ts
createUploader(
   fields, 
   buckets, 
   allowedFileTypes): false | ((req, res, next) => void);
```

Build the upload middleware. `buckets` maps field -> dir, `allowedFileTypes` field -> type key.

#### Parameters

##### fields

`object`[]

##### buckets

`object`

##### allowedFileTypes

`object`

#### Returns

`false` \| ((`req`, `res`, `next`) => `void`)

***

### validateAllUploadedFiles()

```ts
validateAllUploadedFiles(req, allowedFileTypes): Promise<boolean>;
```

Content-validate every uploaded file, removing bad ones.

#### Parameters

##### req

`unknown`

##### allowedFileTypes

`object`

#### Returns

`Promise`\<`boolean`\>

***

### validateFilenameSecurity()

```ts
validateFilenameSecurity(filename): boolean;
```

Length, dangerous-extension and dangerous-char checks on a filename.

#### Parameters

##### filename

`string`

#### Returns

`boolean`
