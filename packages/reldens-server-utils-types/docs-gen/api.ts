/**
 * API reference for @reldens/server-utils 0.46.0.
 *
 * Hand-written declarations rendered by TypeDoc. FileHandler and Encryptor are ready-to-use
 * singletons (documented as classes for their methods); AppServerFactory, UploaderFactory
 * and Http2CdnServer are classes you instantiate; ServerDefaultConfigurations and
 * ServerFactoryUtils expose only static members. Methods return `false`/`[]`/`null` on
 * failure and stash a structured error on the instance, rather than throwing.
 */
import type { UploaderFactoryProps, AppServerConfig } from '../src/index';

/** Express app + HTTP/HTTPS(/HTTP2) server factory with security, CORS, compression, rate limiting. */
export declare class AppServerFactory {
    /** Build and configure the app + server from config; returns `{ app, appServer, http2CdnServer }`. */
    createAppServer(appServerConfig?: AppServerConfig): { app: unknown; appServer: unknown; http2CdnServer: unknown } | false;
    /** Start listening (defaults to the configured port). */
    listen(port?: number): boolean;
    /** Close the CDN then the app server. */
    close(): Promise<boolean | unknown>;
    /** Mount express.static at the root. */
    serveStatics(app: unknown, statics: string): Promise<true>;
    /** Mount static files under a path prefix. */
    serveStaticsPath(app: unknown, staticsPath: string, statics: string): Promise<true>;
    /** Register a rate-limited home route serving content from a callback. */
    enableServeHome(app: unknown, homePageLoadCallback: (req: unknown) => Promise<string>): Promise<void>;
    /** Add a virtual-host / SNI domain. */
    addDomain(domainConfig: { hostname: string; [k: string]: unknown }): boolean;
    /** Enable a Content-Security-Policy on the app. */
    enableCSP(cspOptions: object): unknown;
}

/** Produces an Express middleware for secure multipart uploads (sanitization, MIME sniffing, limits). */
export declare class UploaderFactory {
    constructor(props: UploaderFactoryProps);
    /** Build the upload middleware. `buckets` maps field -> dir, `allowedFileTypes` field -> type key. */
    createUploader(fields: Array<{ name: string; maxCount?: number }>, buckets: object, allowedFileTypes: object): ((req: unknown, res: unknown, next: unknown) => void) | false;
    /** Content-validate every uploaded file, removing bad ones. */
    validateAllUploadedFiles(req: unknown, allowedFileTypes: object): Promise<boolean>;
    /** Length, dangerous-extension and dangerous-char checks on a filename. */
    validateFilenameSecurity(filename: string): boolean;
}

/**
 * Password hashing (PBKDF2), symmetric encryption (AES-256-GCM), tokens/TOTP, hashing and
 * HMAC with timing-safe comparison. Exported as a ready-to-use singleton.
 */
export declare class Encryptor {
    /** PBKDF2 hash; returns `"saltHex:hashHex"`. */
    encryptPassword(password: string): string | false;
    /** Re-derive and compare against a stored `"salt:hash"`. */
    validatePassword(password: string, storedPassword: string): boolean;
    /** 32 random bytes as hex. */
    generateSecretKey(): string;
    /** AES-256-GCM; returns `"iv:authTag:ciphertext"`. */
    encryptData(data: string, key: string): string | false;
    /** Reverse encryptData. */
    decryptData(encryptedData: string, key: string): string | false;
    /** A base64url random token. */
    generateSecureToken(length?: number): string | false;
    /** Hex digest (sha256/sha512/md5). */
    hashData(data: string | Buffer, algorithm?: string): string | false;
    /** Timing-safe HMAC check. */
    verifyHMAC(data: string, secret: string, signature: string, algorithm?: string): boolean;
}

/** HTTP/2 secure static-file (CDN) server with SNI, HTTP/1 fallback, CORS and cache headers. */
export declare class Http2CdnServer {
    /** Validate certs, build the server and wire handlers; false on error. */
    create(): boolean;
    /** Start listening on the configured port. */
    listen(): boolean;
    /** Close the server. */
    close(): Promise<boolean>;
}

/**
 * Singleton wrapper around Node's `fs`/`path`; every method validates the path and returns
 * `false`/`[]`/`null` on failure instead of throwing. Only the most-used members are shown.
 */
export declare class FileHandler {
    /** Whether a path exists (after validation). */
    exists(fullPath: string): boolean;
    /** Validated read with the instance encoding. */
    readFile(filePath: string): string | false;
    /** Read + JSON.parse. */
    fetchFileJson(filePath: string): object | false;
    /** Write a file. */
    writeFile(fileName: string, content: string): boolean;
    /** Async write (opens `w+`). */
    updateFileContents(filePath: string, contents: string): Promise<boolean>;
    /** Recursive/force delete (array paths are joined). */
    remove(fullPath: string | string[]): boolean;
    /** Recursive mkdir; true if it already exists. */
    createFolder(folderPath: string): boolean;
    /** List a folder's entries. */
    readFolder(folder: string, options?: object): string[];
    /** Files in a folder filtered by extension list. */
    getFilesInFolder(dirPath: string, extensions?: string[]): string[];
    /** Copy a file (array paths joined). */
    copyFile(from: string | string[], to: string | string[]): boolean;
    /** Length + dangerous-pattern path check. */
    isValidPath(filePath: string): boolean;
}

/** Static defaults: MIME-type and cache-max-age maps keyed by file extension. */
export declare class ServerDefaultConfigurations {
    /** Extension -> MIME type. */
    static get mimeTypes(): Record<string, string>;
    /** Extension -> Cache-Control max-age (seconds). */
    static get cacheConfig(): Record<string, number>;
}

/** Static helpers for cache lookup, CORS origin validation, and URL cleanup. */
export declare class ServerFactoryUtils {
    /** The max-age whose extension the path ends with, or false. */
    static getCacheConfigForPath(path: string, cacheConfig: object): number | false;
    /** '*' if allow-all, the origin if it matches, else false. */
    static validateOrigin(origin: string, corsOrigins: Array<string | RegExp>, corsAllowAll: boolean): string | false;
    /** The part before `?`. */
    static stripQueryString(url: string): string;
}
