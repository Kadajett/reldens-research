# Class: FileHandler

Singleton wrapper around Node's `fs`/`path`; every method validates the path and returns
`false`/`[]`/`null` on failure instead of throwing. Only the most-used members are shown.

## Constructors

### Constructor

```ts
new FileHandler(): FileHandler;
```

#### Returns

`FileHandler`

## Methods

### exists()

```ts
exists(fullPath): boolean;
```

Whether a path exists (after validation).

#### Parameters

##### fullPath

`string`

#### Returns

`boolean`

***

### readFile()

```ts
readFile(filePath): string | false;
```

Validated read with the instance encoding.

#### Parameters

##### filePath

`string`

#### Returns

`string` \| `false`

***

### fetchFileJson()

```ts
fetchFileJson(filePath): false | object;
```

Read + JSON.parse.

#### Parameters

##### filePath

`string`

#### Returns

`false` \| `object`

***

### writeFile()

```ts
writeFile(fileName, content): boolean;
```

Write a file.

#### Parameters

##### fileName

`string`

##### content

`string`

#### Returns

`boolean`

***

### updateFileContents()

```ts
updateFileContents(filePath, contents): Promise<boolean>;
```

Async write (opens `w+`).

#### Parameters

##### filePath

`string`

##### contents

`string`

#### Returns

`Promise`\<`boolean`\>

***

### remove()

```ts
remove(fullPath): boolean;
```

Recursive/force delete (array paths are joined).

#### Parameters

##### fullPath

`string` \| `string`[]

#### Returns

`boolean`

***

### createFolder()

```ts
createFolder(folderPath): boolean;
```

Recursive mkdir; true if it already exists.

#### Parameters

##### folderPath

`string`

#### Returns

`boolean`

***

### readFolder()

```ts
readFolder(folder, options?): string[];
```

List a folder's entries.

#### Parameters

##### folder

`string`

##### options?

`object`

#### Returns

`string`[]

***

### getFilesInFolder()

```ts
getFilesInFolder(dirPath, extensions?): string[];
```

Files in a folder filtered by extension list.

#### Parameters

##### dirPath

`string`

##### extensions?

`string`[]

#### Returns

`string`[]

***

### copyFile()

```ts
copyFile(from, to): boolean;
```

Copy a file (array paths joined).

#### Parameters

##### from

`string` \| `string`[]

##### to

`string` \| `string`[]

#### Returns

`boolean`

***

### isValidPath()

```ts
isValidPath(filePath): boolean;
```

Length + dangerous-pattern path check.

#### Parameters

##### filePath

`string`

#### Returns

`boolean`
