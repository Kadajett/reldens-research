/**
 * Storage-setup config from @reldens/storage lib/base-data-server.js and the per-driver
 * data servers. `client` (the dialect) sits at the top level; the DB connection details
 * live in the nested `config`. The connection is loose because for objection + 'mysql2'
 * it legitimately accepts ~60 extra mysql2 keys (anything outside the whitelist is dropped
 * for mysql2, passed through for other clients).
 *
 * host defaults to 'localhost' and port to 3306 when falsy; user/database are effectively
 * required for a working connection (the package warns rather than throws).
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';

/** The nested `config` connection object. */
export const connectionConfigSchema = loose({
    host: z.string().optional(),
    port: z.number().optional(),
    user: z.string().optional(),
    password: z.string().optional(),
    database: z.string().optional(),
});
export type ConnectionConfig = z.infer<typeof connectionConfigSchema>;

/** `new BaseDataServer(props)` - the shared DataServer config every driver accepts. */
export const baseDataServerConfigSchema = loose({
    /** DB connection details (host/port/user/password/database + driver extras). */
    config: connectionConfigSchema.optional(),
    /** DB dialect/driver, e.g. 'mysql', 'mysql2', 'mongodb'. Compared as a free string. */
    client: z.string().optional(),
    /** Knex pool config, e.g. { min, max }. */
    poolConfig: z.record(z.string(), zAny).optional(),
    /** Query string appended after `?` in the connection string. */
    connectStringOptions: z.string().optional(),
    /** Prebuilt connection string; auto-built from config when omitted. */
    connectString: z.string().optional(),
    debug: z.boolean().optional(),
    multipleStatements: z.boolean().optional(),
    rawModel: z.union([zAny, z.literal(false)]).optional(),
    name: z.union([z.string(), z.literal(false)]).optional(),
    /** Raw entity models by key. */
    rawEntities: z.record(z.string(), zAny).optional(),
    entities: z.record(z.string(), zAny).optional(),
    entitiesConfig: z.record(z.string(), zAny).optional(),
});
export type BaseDataServerConfig = z.infer<typeof baseDataServerConfigSchema>;

/** `new ObjectionJsDataServer(props)` - BaseDataServer config, no extra fields. */
export const objectionDataServerConfigSchema = baseDataServerConfigSchema;

/** `new MikroOrmDataServer(props)` - BaseDataServer config plus MikroORM extras. */
export const mikroOrmDataServerConfigSchema = baseDataServerConfigSchema.extend({
    /** Path passed straight to MikroORM `entities`. */
    entitiesPath: z.string().optional(),
    warnWhenNoEntities: z.boolean().optional(),
});
export type MikroOrmDataServerConfig = z.infer<typeof mikroOrmDataServerConfigSchema>;

/** `new PrismaDataServer(props)` - BaseDataServer config plus Prisma extras. */
export const prismaDataServerConfigSchema = baseDataServerConfigSchema.extend({
    /** A PrismaClient instance; auto-created from a generated client when absent. */
    prismaClient: z.union([zAny, z.literal(false)]).optional(),
    projectRoot: z.union([z.string(), z.literal(false)]).optional(),
});
export type PrismaDataServerConfig = z.infer<typeof prismaDataServerConfigSchema>;

/** `new PrismaSchemaGenerator(props)` - schema/CLI generation config. */
export const prismaSchemaGeneratorConfigSchema = loose({
    /** Connection config used to build the datasource URL. Required for a URL. */
    config: connectionConfigSchema.optional(),
    client: z.string().optional(),
    debug: z.boolean().optional(),
    dataProxy: z.boolean().optional(),
    checkInterval: z.number().optional(),
    maxWaitTime: z.number().optional(),
    prismaSchemaPath: z.string().optional(),
    clientOutputPath: z.string().optional(),
    generateBinaryTargets: z.array(z.string()).optional(),
    dbParams: z.string().optional(),
});
export type PrismaSchemaGeneratorConfig = z.infer<typeof prismaSchemaGeneratorConfigSchema>;
