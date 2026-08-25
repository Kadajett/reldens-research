/**
 * ItemsManager and its setup, from @reldens/items-system lib/manager.js. ItemsManager
 * extends Inventory, so it also accepts every Inventory prop (see inventoryPropsSchema).
 *
 * `owner` is the only hard requirement (a game entity carrying the id named by
 * `ownerIdProperty`, default 'id'). `itemsModelData` is the catalog the manager builds
 * item instances from: each entry is `{ class, data }` where `data` is item props.
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';
import { itemDataSchema } from './item';
import { itemsMapSchema, groupsMapSchema } from './inventory';

/** One catalog entry in `itemsModelData`, keyed by item key. */
export const itemsModelDataEntrySchema = z.object({
    /** Item class reference with a static isSingleInstance(). Required. */
    class: zInstance,
    /** The authored item data the instance is built from (no manager). Required. */
    data: itemDataSchema,
});
export type ItemsModelDataEntry = z.infer<typeof itemsModelDataEntrySchema>;

/** A class-reference map (`itemClasses` / `groupClasses`), or `false` when unused. */
const classMapOrFalse = z.union([z.record(z.string(), zAny), z.literal(false)]);

/** `new ItemsManager(props)` (also accepts Inventory props via the catchall). */
export const itemsManagerPropsSchema = loose({
    /** The owning game entity; must carry the id property. Required. */
    owner: zInstance,
    /** Item classes by key, or false. */
    itemClasses: classMapOrFalse.optional(),
    /** Group classes by key, or false. */
    groupClasses: classMapOrFalse.optional(),
    /** Catalog of `{ [key]: { class, data } }`, or false. */
    itemsModelData: z.union([z.record(z.string(), itemsModelDataEntrySchema), z.literal(false)]).optional(),
    /** Property name on `owner` holding its id. Defaults to 'id'. */
    ownerIdProperty: z.string().optional(),
    eventsPrefix: z.string().optional(),
});
export type ItemsManagerProps = z.infer<typeof itemsManagerPropsSchema>;

/** `manager.setup(props)` - both keys optional. */
export const managerSetupSchema = z.object({
    items: itemsMapSchema.optional(),
    groups: groupsMapSchema.optional(),
});
export type ManagerSetup = z.infer<typeof managerSetupSchema>;

/**
 * `new ItemsServer(props)` - ItemsManager props plus an optional `client` (needs send()
 * and broadcast()) that, when present, wires a Sender for outbound messages.
 */
export const itemsServerPropsSchema = loose({
    owner: zInstance,
    client: zAny.optional(),
});
export type ItemsServerProps = z.infer<typeof itemsServerPropsSchema>;
