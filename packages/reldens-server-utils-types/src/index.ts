/**
 * @reldens-community/server-utils-types
 *
 * Zod schemas + inferred types for the config objects of @reldens/server-utils - the
 * Express app-server factory, the uploader factory, and the encryptor. The full class API
 * is in the TypeDoc reference (docs/api). These configs are large and open (framework
 * options pass through), so the schemas pin the documented fields and keep a catchall.
 * Verified against @reldens/server-utils 0.46.0.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';

export * from './zod-floors';

/** `new UploaderFactory(props)` - multipart upload security config. */
export const uploaderFactoryPropsSchema = loose({
    /** fileType -> allowed MIME types. */
    mimeTypes: z.record(z.string(), z.array(z.string())).optional(),
    /** Max file size in bytes (default 20MB). */
    maxFileSize: z.number().optional(),
    /** Max file count; 0 = unlimited. */
    fileLimit: z.number().optional(),
    /** fileType -> allowed extensions. */
    allowedExtensions: z.record(z.string(), z.array(z.string())).optional(),
    applySecureFileNames: z.boolean().optional(),
    /** `(status, message, req, res) => any`, or false. */
    processErrorResponse: z.union([zAny, z.literal(false)]).optional(),
    dangerousExtensions: z.array(z.string()).optional(),
    maxFilenameLength: z.number().optional(),
});
export type UploaderFactoryProps = z.infer<typeof uploaderFactoryPropsSchema>;

/**
 * `AppServerFactory.createAppServer(config)` - the documented subset of the ~70-field app
 * server config. Extra framework options pass through the catchall.
 */
export const appServerConfigSchema = loose({
    port: z.number().optional(),
    autoListen: z.boolean().optional(),
    useHttps: z.boolean().optional(),
    keyPath: z.string().optional(),
    certPath: z.string().optional(),
    httpsChain: z.string().optional(),
    passphrase: z.string().optional(),
    useCors: z.boolean().optional(),
    /** '*', a RegExp, or a list of origins. */
    corsOrigin: zAny.optional(),
    jsonLimit: z.string().optional(),
    urlencodedLimit: z.string().optional(),
    maxRequestSize: z.string().optional(),
    useHelmet: z.boolean().optional(),
    useCompression: z.boolean().optional(),
    globalRateLimit: z.number().optional(),
    windowMs: z.number().optional(),
    maxRequests: z.number().optional(),
    trustedProxy: z.string().optional(),
    useVirtualHosts: z.boolean().optional(),
    /** Virtual-host domains: `{ hostname, aliases?, keyPath?, certPath? }`. */
    domains: z.array(loose({ hostname: z.string() })).optional(),
    http2CdnEnabled: z.boolean().optional(),
    http2CdnPort: z.number().optional(),
});
export type AppServerConfig = z.infer<typeof appServerConfigSchema>;

/** The Encryptor's configurable parameters (set on the singleton instance). */
export const encryptorConfigSchema = z.object({
    /** PBKDF2 iterations (default 100000). */
    iterations: z.number().optional(),
    keylen: z.number().optional(),
    digest: z.string().optional(),
    saltLength: z.number().optional(),
    /** Cipher algorithm (default 'aes-256-gcm'). */
    algorithm: z.string().optional(),
    ivLength: z.number().optional(),
});
export type EncryptorConfig = z.infer<typeof encryptorConfigSchema>;
