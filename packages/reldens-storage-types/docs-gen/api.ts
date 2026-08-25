/**
 * API reference for @reldens/storage 0.91.0.
 *
 * Hand-written class declarations rendered by TypeDoc. Constructor config types are the
 * zod-inferred types from @reldens-community/storage-types; method signatures are read
 * from the package source. A data server owns a connection and hands out per-entity
 * drivers; every driver honors the {@link BaseDriver} CRUD/query contract. Methods return
 * `false`/`[]`/`0` on failure and stash an error, rather than throwing.
 */
import type {
    BaseDataServerConfig, MikroOrmDataServerConfig, PrismaDataServerConfig,
    PrismaSchemaGeneratorConfig,
} from '../src/index';

/** A persisted record (a row / entity instance). Shape is entity-specific. */
export type Record = object;
/** A where-clause / filter object matching driver fields. */
export type Filters = object;
/** A database id (number or string). */
export type Id = number | string;

/**
 * Abstract base for all data servers: holds the connection config and the entity registry,
 * builds the connection string, and hands out per-entity drivers. The three concrete
 * servers extend it and implement `connect`/`generateEntities`/`fetchEntitiesFromDatabase`.
 */
export declare class BaseDataServer {
    constructor(props: BaseDataServerConfig);
    /** The registered driver for an entity name (the main accessor for a table's driver). */
    getEntity(entityName: string): BaseDriver;
    /** Build the `client://user:pass@host:port/db` connection URI from the config. */
    createConnectionString(): string;
    /** Open the DB connection. */
    connect(): Promise<void>;
    /** Close the DB connection. */
    disconnect(): Promise<void>;
    /** Register/build entity drivers from raw entity definitions. */
    generateEntities(rawEntities: object): void;
    /** Introspect the DB and return a tables map. */
    fetchEntitiesFromDatabase(): Promise<object | false>;
}

/**
 * Abstract per-entity CRUD/query driver. The three concrete drivers (Objection/MikroORM/
 * Prisma) implement this contract; concrete CRUD returns are awaitable. `filters` is a
 * where-clause object, `relations` a list of relation names, `operator` one of
 * GT/GTE/LT/LTE/NE/EQ.
 */
export declare class BaseDriver {
    /** The DB name for this entity. */
    databaseName(): string;
    /** The primary-key field name. */
    id(): string;
    /** The entity name. */
    name(): string;
    /** The table name. */
    tableName(): string;
    /** The column config by name. */
    property(propertyName: string): object;
    /** Insert a row. */
    create(params: object): Record;
    /** Insert a row with nested relations. */
    createWithRelations(params: object, relations: string[]): Record;
    /** Update rows matching filters. */
    update(filters: Filters, updatePatch: object): Record[];
    /** Update rows by a single field condition. */
    updateBy(field: string, fieldValue: unknown, updatePatch: object, operator?: string): Record[];
    /** Update the row with this primary key. */
    updateById(id: Id, params: object): Record;
    /** Insert or update. */
    upsert(params: object, filters: Filters): Record;
    /** Delete rows matching filters. */
    delete(filters: Filters): unknown;
    /** Delete by primary key. */
    deleteById(id: Id): unknown;
    /** Count matching rows. */
    count(filters: Filters): number;
    /** All rows. */
    loadAll(): Record[];
    /** All rows with relations populated. */
    loadAllWithRelations(relations: string[]): Record[];
    /** Rows matching a filter object. */
    load(filters: Filters): Record[];
    /** Rows with relations populated. */
    loadWithRelations(filters: Filters, relations: string[]): Record[];
    /** Rows matching one field condition. */
    loadBy(field: string, fieldValue: unknown, operator?: string): Record[];
    /** A single row by primary key. */
    loadById(id: Id): Record;
    /** Rows for a list of primary keys. */
    loadByIds(ids: Id[]): Record[];
    /** The first row matching filters. */
    loadOne(filters: Filters): Record;
    /** The first row matching one field condition. */
    loadOneBy(field: string, fieldValue: unknown, operator?: string): Record;
    /** Run a raw SQL string. */
    rawQuery(content: string): Promise<unknown>;
    /** Whether a column's configured type is `json`. */
    isJsonField(fieldName: string): boolean;
    /** Apply limit/offset/sortBy/sortDirection query options onto the driver. */
    applyQueryOptions(queryOptions: object): void;
    /** Convenience: apply options, parse relations, then load. */
    loadEntityData(filters: Filters, queryOptions: object, relationsString: string): Promise<Record[]>;
}

/** Objection.js/Knex-backed data server (`name()` -> 'objection-js'). */
export declare class ObjectionJsDataServer extends BaseDataServer {}
/** MikroORM-backed data server (`name()` -> 'mikro-orm'). */
export declare class MikroOrmDataServer extends BaseDataServer {
    constructor(props: MikroOrmDataServerConfig);
}
/** Prisma-backed data server (`name()` -> 'prisma'). */
export declare class PrismaDataServer extends BaseDataServer {
    constructor(props: PrismaDataServerConfig);
}
/** Objection.js implementation of the {@link BaseDriver} contract. */
export declare class ObjectionJsDriver extends BaseDriver {}
/** MikroORM implementation of the {@link BaseDriver} contract (methods are async). */
export declare class MikroOrmDriver extends BaseDriver {}
/** Prisma implementation of the {@link BaseDriver} contract (methods are async). */
export declare class PrismaDriver extends BaseDriver {}

/** Maps SQL/DB column types to JS or Prisma types. Exported as a ready-to-use singleton. */
export declare class TypeMapper {
    /** DB type -> JS type ('int'->'number', 'datetime'->'Date', 'json'->'object', ...). */
    mapDbTypeToJsType(dbType: string): string;
    /** DB type -> Prisma scalar ('int'->'Int', 'datetime'->'DateTime', 'json'->'Json', ...). */
    mapDbTypeToPrismaType(dbType: string): string;
}

/** Generates entity/model/config/translation source files by introspecting a database. */
export declare class EntitiesGenerator {
    /** The full pipeline: connect, introspect, write entity/model/config/translation files. */
    generate(): Promise<boolean>;
    /** Instantiate the correct data server from the connection config. */
    createServer(): BaseDataServer | false;
}

/** Generates a `schema.prisma` and runs Prisma introspection + client generation. */
export declare class PrismaSchemaGenerator {
    constructor(props: PrismaSchemaGeneratorConfig);
    /** Write the schema, run `prisma db pull` then `prisma generate`; true on success. */
    generate(): Promise<boolean>;
}

/** Loads and instantiates a generated PrismaClient. */
export declare class PrismaClientLoader {
    /** Resolve the generated client path and return a new PrismaClient (or null). */
    static load(projectPath: string, customPath: string, connectionData: object): unknown;
}

/** Introspects a MySQL database's schema from information_schema. */
export declare class MySQLTablesProvider {
    /** Return a tables map `{ [table]: { name, columns: {...} } }`, or false. */
    static fetchTables(server: BaseDataServer): Promise<object | false>;
}
