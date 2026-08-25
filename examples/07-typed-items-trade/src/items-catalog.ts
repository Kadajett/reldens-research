/**
 * The item catalog: plain data you author.
 *
 * This is the "content" a game defines. It is ordinary data with no validation
 * library attached, so you can copy this file into any project that has
 * @reldens/items-system and nothing else. `type` uses ItemsConst.TYPES names
 * instead of magic numbers; SINGLE items collapse quantity into one slot
 * (good for stackables like gold), the others get one instance each.
 */
import { ItemsConst } from '@reldens/items-system';

const { EQUIPMENT, USABLE, SINGLE } = ItemsConst.TYPES;

export const itemsCatalog = [
    { id: 1, key: 'iron_sword', type: EQUIPMENT, label: 'Iron Sword', description: 'A dependable blade.' },
    { id: 2, key: 'health_potion', type: USABLE, label: 'Health Potion', uses_limit: 1 },
    { id: 3, key: 'gold', type: SINGLE, label: 'Gold Coin', qty_limit: -1 },
];
