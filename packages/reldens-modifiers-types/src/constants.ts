/**
 * Enums and constants from @reldens/modifiers lib/constants.js (ModifierConst).
 *
 * OPS are the arithmetic operations a modifier applies; COMPARE are the comparison
 * operators a condition uses (each name is also a method on Condition); TYPES coerce a
 * modifier/condition value to int or string. The `MOD_*` codes are modifier states.
 */
import { z } from 'zod';

/** Modifier operations (ModifierConst.OPS). */
export const OPS = {
    INC: 1, DEC: 2, DIV: 3, MUL: 4, INC_P: 5, DEC_P: 6, SET: 7, SET_N: 9, METHOD: 8,
} as const;
export const opSchema = z.union([
    z.literal(1), z.literal(2), z.literal(3), z.literal(4),
    z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9),
]);
export type Op = z.infer<typeof opSchema>;

/** Comparison operators for conditions (ModifierConst.COMPARE); also Condition method names. */
export const COMPARE = { EQ: 'eq', NE: 'ne', LT: 'lt', GT: 'gt', LE: 'le', GE: 'ge' } as const;
export const compareSchema = z.enum(['eq', 'ne', 'lt', 'gt', 'le', 'ge']);
export type Compare = z.infer<typeof compareSchema>;

/** Value coercion types (ModifierConst.TYPES). */
export const VALUE_TYPES = { INT: 'int', STRING: 'string' } as const;
export const valueTypeSchema = z.enum(['int', 'string']);
export type ValueType = z.infer<typeof valueTypeSchema>;

/** Modifier state codes (ModifierConst.MOD_*), reported on `modifier.state`. */
export const MOD_STATES = {
    MISSING_KEY: 'mk', MISSING_PROPERTY_KEY: 'mpk', MISSING_OPERATION: 'mo', MISSING_VALUE: 'mv',
    READY: 'mre', APPLIED: 'ma', REVERTED: 'mr', UNDEFINED_TARGET: 'mut',
    INVALID_CONDITIONS: 'mic', MISSING_CONDITION_INSTANCE: 'mmci', MODIFIER_ERROR: 'me',
} as const;
