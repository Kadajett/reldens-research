/**
 * Optional: verify the item catalog against the @reldens-community/items-types zod schemas.
 *
 * This file is the opt-in layer. The demo in ../src never imports it, so deleting
 * this folder does not change how the game runs. Run it with `npm run verify`
 * during development to catch a malformed catalog before it reaches the engine.
 *
 * `import type { ItemData }` gives you editor types with no runtime cost; the
 * `itemDataSchema.parse` call is the runtime check. Both are additive.
 */
import { itemDataSchema, type ItemData } from '@reldens-community/items-types';
import { itemsCatalog } from '../src/items-catalog';

function verifyCatalog(): ItemData[] {
    return itemsCatalog.map((entry, index) => {
        const result = itemDataSchema.safeParse(entry);
        if (!result.success) {
            const key = (entry as { key?: string }).key ?? `#${index}`;
            throw new Error(`Item "${key}" is invalid:\n${result.error.message}`);
        }
        return result.data;
    });
}

const validated = verifyCatalog();
console.log(`Catalog OK: ${validated.length} items passed itemDataSchema.`);
for (const item of validated) {
    console.log(`  ${item.key} (type ${item.type ?? 'default'})`);
}
