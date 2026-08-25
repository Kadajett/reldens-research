/**
 * Storage enums, inlined across @reldens/storage (there is no constants file).
 *
 * The driver key selects a DataServer; the logical property `type` and the TypeMapper
 * db-type vocabulary describe generated-entity columns; the Prisma providers and MikroORM
 * relation kinds are the smaller per-driver enums. `client` (the DB dialect) has no closed
 * set - it varies by driver - so it is a helper enum, not a strict validator.
 */
import { z } from 'zod';

/** Driver selection (DriversMap keys in index.js). */
export const STORAGE_DRIVERS = { OBJECTION: 'objection-js', MIKRO_ORM: 'mikro-orm', PRISMA: 'prisma' } as const;
export const storageDriverSchema = z.enum(['objection-js', 'mikro-orm', 'prisma']);
export type StorageDriver = z.infer<typeof storageDriverSchema>;

/**
 * Known DB clients/dialects seen across drivers. NOT exhaustive or driver-checked - the
 * source compares `client` as a free string (knex dialects for objection, mysql/mongodb
 * for mikro, providers for prisma). Use for reference; the config accepts any string.
 */
export const knownDbClientSchema = z.enum(['mysql', 'mysql2', 'pg', 'postgres', 'postgresql', 'mongodb']);
export type KnownDbClient = z.infer<typeof knownDbClientSchema>;

/** Prisma datasource providers (prisma-schema-generator getDatasourceProvider). */
export const prismaProviderSchema = z.enum(['postgresql', 'mongodb', 'mysql']);
export type PrismaProvider = z.infer<typeof prismaProviderSchema>;

/** MikroORM relation kinds. */
export const mikroRelationKindSchema = z.enum(['m:1', '1:m', 'm:n']);
export type MikroRelationKind = z.infer<typeof mikroRelationKindSchema>;

/**
 * The logical `type` on a generated entity property. Open by design (the generator emits
 * 'textarea' for json but BaseDriver.isJsonField keys off 'json', and varchar emits no
 * type), so this is a `.catch`-free union widened to string via the helper below.
 */
export const KNOWN_PROPERTY_TYPES = ['reference', 'datetime', 'textarea', 'boolean', 'number', 'json'] as const;
export const knownPropertyTypeSchema = z.enum(KNOWN_PROPERTY_TYPES);
export type KnownPropertyType = z.infer<typeof knownPropertyTypeSchema>;

/** The db-type vocabulary TypeMapper recognizes (lowercased DATA_TYPE keys). */
export const DB_TYPES = [
    'int', 'integer', 'tinyint', 'smallint', 'mediumint', 'bigint', 'decimal', 'float', 'double',
    'varchar', 'char', 'text', 'tinytext', 'mediumtext', 'longtext', 'date', 'datetime', 'timestamp',
    'time', 'year', 'boolean', 'bool', 'bit', 'json', 'binary', 'varbinary', 'blob', 'tinyblob',
    'mediumblob', 'longblob',
] as const;
export const dbTypeSchema = z.enum(DB_TYPES);
export type DbType = z.infer<typeof dbTypeSchema>;
