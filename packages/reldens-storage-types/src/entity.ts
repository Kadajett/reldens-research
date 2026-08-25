/**
 * Generated-entity property definitions from @reldens/storage
 * lib/generators/entities-generation.js and the entity-properties fixtures.
 *
 * `EntityProperties.propertiesConfig()` returns the admin/entity config; `properties` maps
 * a column name to a property definition. These shapes are convention-only in the package
 * (no runtime validation), so both stay loose - `propertiesConfig` spreads arbitrary
 * extra props, and a property definition can carry driver-specific extras.
 */
import { z } from 'zod';
import { loose } from './zod-floors';

/** One enum option on a property whose dbType is `enum`. */
export const availableValueSchema = z.object({
    value: z.number(),
    label: z.string(),
});

/** One column's definition (the value in `properties[colName]`). */
export const entityPropertyDefSchema = loose({
    /** Primary key column. */
    isId: z.boolean().optional(),
    /** Logical type: 'reference' | 'datetime' | 'textarea' | 'boolean' | 'number' | 'json' (open). */
    type: z.string().optional(),
    /** Referenced table name; present only for `type: 'reference'`. */
    reference: z.string().optional(),
    /** Relation key (usually `related_`-prefixed); references only. */
    alias: z.string().optional(),
    /** Not nullable and no default. */
    isRequired: z.boolean().optional(),
    /** Options for an enum column. */
    availableValues: z.array(availableValueSchema).optional(),
    /** Raw lowercased MySQL DATA_TYPE (e.g. 'int', 'varchar', 'json'). */
    dbType: z.string().optional(),
});
export type EntityPropertyDef = z.infer<typeof entityPropertyDefSchema>;

/** `EntityProperties.propertiesConfig()` return shape (plus arbitrary extraProps). */
export const propertiesConfigSchema = loose({
    showProperties: z.array(z.string()).optional(),
    editProperties: z.array(z.string()).optional(),
    listProperties: z.array(z.string()).optional(),
    filterProperties: z.array(z.string()).optional(),
    /** Column name -> property definition. */
    properties: z.record(z.string(), entityPropertyDefSchema).optional(),
    titleProperty: z.string().optional(),
});
export type PropertiesConfig = z.infer<typeof propertiesConfigSchema>;
