/**
 * Item shapes for @reldens/items-system ItemBase (lib/item/type/item-base.js).
 *
 * Two shapes, because there are two moments:
 *  - `itemDataSchema` is what you AUTHOR - the `data` object in a manager's
 *    `itemsModelData` catalog (and what the package's item fixtures hold). It has `key`
 *    but no `manager`: the manager injects that when it builds the instance.
 *  - `itemPropsSchema` is the full object ItemBase's constructor receives - the authored
 *    data plus the required `manager` instance.
 *
 * Every field maps to a `props` read in ItemBase's constructor, with its real default.
 * Boolean-or-number fields (group_id, qty_limit, uses_limit, useTimeOut, execTimeOut)
 * are `false` when unset and a number when configured - that union is exact. `customData`
 * is merged onto the instance (Object.assign), so extra keys are allowed (catchall).
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';
import { itemTypeSchema } from './constants';

/**
 * A modifier as authored on an item (fixtures: `{key, operation, value}`).
 * `operation` is a @reldens/modifiers op name (e.g. 'add', 'multiply'); typed loosely
 * here so this package does not hard-depend on the modifiers vocabulary.
 */
export const modifierConfigSchema = z.object({
    key: z.string(),
    operation: z.string(),
    value: z.number(),
});
export type ModifierConfig = z.infer<typeof modifierConfigSchema>;

/** A DB id that may be absent when no storage is used (ItemBase leaves it null). */
const nullableId = z.union([z.number(), z.string()]).nullish();

/** A limit/flag that is `false` when unset and a number when configured. */
const numberOrFalse = z.union([z.number(), z.literal(false)]);

/** The authored item data (no `manager`): the `data` in itemsModelData and in fixtures. */
export const itemDataSchema = loose({
    /** Unique item-type key; also the inventory index for single-instance items. Required. */
    key: z.string(),
    /** Inventory index for non-single items; auto-generated when omitted. */
    uid: z.string().optional(),
    /** Item instance id for this inventory; null without storage. */
    id: nullableId,
    /** Item type id; null without storage. */
    item_id: nullableId,
    label: z.string().optional(),
    description: z.string().optional(),
    /** One of ItemsConst.TYPES; defaults to ITEM_BASE (10). */
    type: itemTypeSchema.optional(),
    qty: z.number().optional(),
    remaining_uses: z.number().optional(),
    is_active: z.boolean().optional(),
    group_id: numberOrFalse.optional(),
    qty_limit: numberOrFalse.optional(),
    uses_limit: numberOrFalse.optional(),
    /** Remove the item from the inventory when its qty hits zero. Defaults true. */
    autoRemoveItemOnZeroQty: z.boolean().optional(),
    useTimeOut: numberOrFalse.optional(),
    execTimeOut: numberOrFalse.optional(),
    /**
     * Modifiers to apply when the item executes. Authored as an array of
     * `{key, operation, value}` configs (converted to Modifier instances by
     * ItemsDataGenerator) or a map of already-built modifier instances.
     */
    modifiers: z.union([z.array(modifierConfigSchema), z.record(z.string(), zAny)]).optional(),
    /** Extra data merged onto the instance; an object or a JSON string. */
    customData: z.union([z.record(z.string(), zAny), z.string()]).optional(),
});
export type ItemData = z.infer<typeof itemDataSchema>;

/** The full object ItemBase's constructor receives: authored data plus the manager. */
export const itemPropsSchema = itemDataSchema.extend({
    /** The owning ItemsManager instance. Required (opaque here). */
    manager: zInstance,
});
export type ItemProps = z.infer<typeof itemPropsSchema>;
