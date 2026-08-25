/**
 * Modifier and Condition config from @reldens/modifiers lib/modifier.js and
 * lib/condition.js. These are the two objects a user authors; Calculator and
 * PropertyManager are stateless helpers with no config.
 *
 * A Modifier does not throw on missing fields - it records a `state` (MOD_MISSING_*) and
 * is not READY. This schema requires the four fields a READY modifier needs (key,
 * propertyKey, operation, value), so it validates an *actually usable* modifier.
 * `propertyKey` also accepts the snake_case alias `property_key`. A Condition, by
 * contrast, throws on any missing field, so all four are hard-required.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';
import { opSchema, compareSchema, valueTypeSchema } from './constants';

const stringOrFalse = z.union([z.string(), z.literal(false)]);
const numberOrFalse = z.union([z.number(), z.literal(false)]);
/** A modifier/condition value; coerced to int or string per `type`. */
const modifierValue = z.union([z.number(), z.string()]);

/** `new Modifier(props)`. */
export const modifierSchema = loose({
    /** Unique modifier key. Required for a READY modifier. */
    key: z.string(),
    /** Property path this modifies (e.g. 'stats/hp'). Alias: `property_key`. */
    propertyKey: z.string().optional(),
    property_key: z.string().optional(),
    /** Property to read the base value from; defaults to propertyKey. */
    basePropertyKey: z.string().optional(),
    /** One of ModifierConst.OPS. Required. */
    operation: opSchema,
    /** Coerce value to int (default) or string. */
    type: valueTypeSchema.optional(),
    /** The operation value. Required. */
    value: modifierValue,
    /** Default target; an object or false. */
    target: zAny.optional(),
    minValue: numberOrFalse.optional(),
    maxValue: numberOrFalse.optional(),
    minProperty: stringOrFalse.optional(),
    maxProperty: stringOrFalse.optional(),
    /** Condition instances gating application; default []. */
    conditions: z.array(zAny).optional(),
    /** Condition instances (or false) gating revert. */
    conditionsOnRevert: z.union([z.array(zAny), z.literal(false)]).optional(),
}).refine(
    (m) => 'string' === typeof m.propertyKey || 'string' === typeof m.property_key,
    { message: 'propertyKey (or property_key) is required', path: ['propertyKey'] },
);
export type Modifier = z.infer<typeof modifierSchema>;

/** `new Condition(props)` - throws on any missing field, so all four are required. */
export const conditionSchema = z.object({
    /** Unique condition key. Required. */
    key: z.string(),
    /** Property path to test (e.g. 'stats/level'). Required. */
    propertyKey: z.string(),
    /** Comparison operator; one of ModifierConst.COMPARE. Required. */
    conditional: compareSchema,
    /** Coerce value to int (default) or string. */
    type: valueTypeSchema.optional(),
    /** The value to compare against. Required. */
    value: modifierValue,
});
export type Condition = z.infer<typeof conditionSchema>;
