/**
 * Extending the schema to match the extended engine.
 *
 * The base `itemDataSchema` is a loose object: it accepts the two extra runestone
 * fields through its catchall, but does not type or validate them. Extend it and
 * those fields become required and checked, while every base item field carries over.
 *
 * `.extend` keeps the catchall, so a runestone can still hold further custom keys.
 * The inferred `Runestone` type is the base item plus `element` and `power`.
 */
import { z } from 'zod';
import { itemDataSchema } from '@reldens-community/items-types';
import { RUNE_ELEMENTS } from '../src/runestone';

export const runestoneSchema = itemDataSchema.extend({
    element: z.enum(RUNE_ELEMENTS),
    power: z.number().int().positive(),
});

export type Runestone = z.infer<typeof runestoneSchema>;
