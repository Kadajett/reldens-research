/**
 * ItemGroup config, from @reldens/items-system lib/item/group.js. ItemGroup extends
 * Inventory, so it also accepts every Inventory prop.
 *
 * `id` and `key` are hard-required (missing either throws). Note the group stores
 * `items_limit`/`limit_per_item` as descriptive fields; the actual quantity enforcement
 * reads Inventory's `itemsLimit`/`limitPerItem`, so pass those too if you want limits
 * enforced (the catchall allows them).
 */
import { z } from 'zod';
import { loose } from './zod-floors';

export const itemGroupPropsSchema = loose({
    /** Group id. Required. */
    id: z.union([z.number(), z.string()]),
    /** Group key. Required. */
    key: z.string(),
    label: z.string().optional(),
    description: z.string().optional(),
    files_name: z.string().optional(),
    sort: z.number().optional(),
    /** Descriptive only; enforcement uses Inventory's itemsLimit. */
    items_limit: z.number().optional(),
    /** Descriptive only; enforcement uses Inventory's limitPerItem. */
    limit_per_item: z.number().optional(),
    eventsPrefix: z.string().optional(),
});
export type ItemGroupProps = z.infer<typeof itemGroupPropsSchema>;
