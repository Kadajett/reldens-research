/**
 * @reldens-community/utils-types
 *
 * Zod schemas + inferred types for the small config surfaces of @reldens/utils - the
 * SchemaValidator rule shape and the Logger level vocabulary - plus the shared floors.
 * The full class API is in the TypeDoc reference (docs/api). Most of @reldens/utils is
 * behavior (events, logging, the `sc` helper) rather than authored data, so the zod here
 * is intentionally small. Verified against @reldens/utils 0.54.0.
 */
import { z } from 'zod';
import { zAny } from './zod-floors';

export * from './zod-floors';

/** Logger syslog-style levels (name -> number), from @reldens/utils Logger. */
export const LOG_LEVELS = {
    none: 0, emergency: 1, alert: 2, critical: 3, error: 4,
    warning: 5, notice: 6, info: 7, debug: 8,
} as const;
export const logLevelNameSchema = z.enum([
    'none', 'emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug',
]);
export type LogLevelName = z.infer<typeof logLevelNameSchema>;

/** The field types a SchemaValidator rule accepts. */
export const schemaFieldTypeSchema = z.enum(['string', 'number', 'int', 'float', 'boolean', 'object', 'array']);
export type SchemaFieldType = z.infer<typeof schemaFieldTypeSchema>;

/**
 * One property rule in a SchemaValidator schema. `nested` is another schema (a map of
 * rules) for `type: 'object'`; `pattern`/`custom` are a RegExp / predicate (opaque here).
 */
export const schemaRuleSchema = z.object({
    type: schemaFieldTypeSchema,
    required: z.boolean().optional(),
    min: z.number().optional(),
    max: z.number().optional(),
    /** A RegExp tested against string values. */
    pattern: zAny.optional(),
    /** Allowed values. */
    enum: z.array(zAny).optional(),
    /** A predicate `(value) => boolean`. */
    custom: zAny.optional(),
    /** A sub-schema (map of rules) for object types. */
    nested: zAny.optional(),
    /** Element type for array types. */
    valuesType: z.string().optional(),
});
export type SchemaRule = z.infer<typeof schemaRuleSchema>;

/** A full SchemaValidator schema: a map of property name -> rule. */
export const validatorSchemaSchema = z.record(z.string(), schemaRuleSchema);
export type ValidatorSchema = z.infer<typeof validatorSchemaSchema>;

/** The input-validation categories `sc.validateInput` recognizes. */
export const inputValidationTypeSchema = z.enum([
    'email', 'username', 'strongPassword', 'alphanumeric', 'numeric', 'hexColor', 'ipv4',
]);
export type InputValidationType = z.infer<typeof inputValidationTypeSchema>;
