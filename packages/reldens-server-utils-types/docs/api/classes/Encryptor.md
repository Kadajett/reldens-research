# Class: Encryptor

Password hashing (PBKDF2), symmetric encryption (AES-256-GCM), tokens/TOTP, hashing and
HMAC with timing-safe comparison. Exported as a ready-to-use singleton.

## Constructors

### Constructor

```ts
new Encryptor(): Encryptor;
```

#### Returns

`Encryptor`

## Methods

### encryptPassword()

```ts
encryptPassword(password): string | false;
```

PBKDF2 hash; returns `"saltHex:hashHex"`.

#### Parameters

##### password

`string`

#### Returns

`string` \| `false`

***

### validatePassword()

```ts
validatePassword(password, storedPassword): boolean;
```

Re-derive and compare against a stored `"salt:hash"`.

#### Parameters

##### password

`string`

##### storedPassword

`string`

#### Returns

`boolean`

***

### generateSecretKey()

```ts
generateSecretKey(): string;
```

32 random bytes as hex.

#### Returns

`string`

***

### encryptData()

```ts
encryptData(data, key): string | false;
```

AES-256-GCM; returns `"iv:authTag:ciphertext"`.

#### Parameters

##### data

`string`

##### key

`string`

#### Returns

`string` \| `false`

***

### decryptData()

```ts
decryptData(encryptedData, key): string | false;
```

Reverse encryptData.

#### Parameters

##### encryptedData

`string`

##### key

`string`

#### Returns

`string` \| `false`

***

### generateSecureToken()

```ts
generateSecureToken(length?): string | false;
```

A base64url random token.

#### Parameters

##### length?

`number`

#### Returns

`string` \| `false`

***

### hashData()

```ts
hashData(data, algorithm?): string | false;
```

Hex digest (sha256/sha512/md5).

#### Parameters

##### data

`string` \| `Buffer`\<`ArrayBufferLike`\>

##### algorithm?

`string`

#### Returns

`string` \| `false`

***

### verifyHMAC()

```ts
verifyHMAC(
   data, 
   secret, 
   signature, 
   algorithm?): boolean;
```

Timing-safe HMAC check.

#### Parameters

##### data

`string`

##### secret

`string`

##### signature

`string`

##### algorithm?

`string`

#### Returns

`boolean`
