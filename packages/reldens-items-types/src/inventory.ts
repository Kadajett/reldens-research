/**
 * Inventory construction and its quantity operations, from @reldens/items-system
 * lib/item/inventory.js. The constructor reads only the fields below; the tests pass
 * extra keys (key, owner_id) that the base Inventory ignores - the catchall allows them.
 *
 * `limitPerItem`/`itemsLimit` default to -1 (disabled) and only enforce when >= 0.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';
import { qtyOperationSchema } from './constants';

/** `new Inventory(props)`. */
export const inventoryPropsSchema = loose({
    eventsManager: zAny.optional(),
    /** Max quantity per item; -1 disables. */
    limitPerItem: z.number().optional(),
    /** Max number of distinct items; -1 disables. */
    itemsLimit: z.number().optional(),
    applyModifiersAuto: z.boolean().optional(),
    revertModifiersAuto: z.boolean().optional(),
    eventsPrefix: z.string().optional(),
});
export type InventoryProps = z.infer<typeof inventoryPropsSchema>;

/** Positional args of `modifyItemQty(operation, key, qty)`. */
export const modifyItemQtyArgsSchema = z.tuple([qtyOperationSchema, z.string(), z.number()]);

/**
 * A map of item instances keyed by inventory id, as passed to `setItems(items)` /
 * `manager.setup({items})`. Values are item instances (opaque here).
 */
export const itemsMapSchema = z.record(z.string(), zAny);

/**
 * A map of group instances/configs keyed by group key, as passed to `setGroups(groups)` /
 * `manager.setup({groups})`.
 */
export const groupsMapSchema = z.record(z.string(), zAny);
