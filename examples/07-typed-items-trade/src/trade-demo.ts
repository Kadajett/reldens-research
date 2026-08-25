/**
 * Adding items to inventories and running a trade between them.
 *
 * This is the copyable part: it imports @reldens/items-system only. No zod, no
 * types package at runtime. The flow is: build an inventory for two players,
 * add items to each, then move a sword from A to B in exchange for gold.
 */
import {
    ItemsManager, ExchangePlatform, ItemsDataGenerator,
    type OwnerLike, type ItemInstance,
} from '@reldens/items-system';
import { itemsCatalog } from './items-catalog';

/** A player is any object with an id; the manager reads `owner.id` by default. */
function makePlayer(id: number, name: string): OwnerLike {
    return { id, name };
}

/** Build a ready inventory (an ItemsManager) that knows the whole catalog. */
async function buildInventory(owner: OwnerLike): Promise<ItemsManager> {
    // ItemsDataGenerator turns the plain catalog into the {class, data} map the manager needs.
    // Each manager gets the full catalog so it can build the counterparty's items during a trade.
    const itemsModelData = ItemsDataGenerator.itemsListMappedData({}, structuredClone(itemsCatalog));
    const manager = new ItemsManager({ owner, itemsModelData });
    await manager.setup({});
    return manager;
}

/** Create one catalog item by key and add it to the inventory; returns the stored instance. */
async function give(manager: ItemsManager, key: string, qty?: number): Promise<ItemInstance> {
    const created = manager.createItemInstance(key, qty);
    if (created === false || Array.isArray(created)) {
        throw new Error(`Could not create a single instance of "${key}".`);
    }
    const added = await manager.addItem(created);
    if (added === false) {
        throw new Error(`Could not add "${key}" to the inventory.`);
    }
    return added;
}

/** A readable snapshot of what an inventory holds. */
function contents(manager: ItemsManager): string {
    const held = Object.values(manager.items).map((item) => `${item.key} x${item.qty}`);
    return held.length ? held.join(', ') : '(empty)';
}

export async function runTradeDemo(): Promise<void> {
    const alice = await buildInventory(makePlayer(1, 'Alice'));
    const bob = await buildInventory(makePlayer(2, 'Bob'));

    // Alice starts with a sword, Bob with a stack of gold.
    const sword = await give(alice, 'iron_sword');
    await give(bob, 'gold', 100);

    console.log('Before trade:');
    console.log('  Alice:', contents(alice));
    console.log('  Bob:  ', contents(bob));

    // Trade: Alice's sword for 50 of Bob's gold.
    const exchange = new ExchangePlatform();
    exchange.initializeExchangeBetween({ inventoryA: alice, inventoryB: bob });
    await exchange.pushForExchange(sword.uid, 1, 'A');
    await exchange.pushForExchange('gold', 50, 'B');
    await exchange.confirmExchange('A');
    await exchange.confirmExchange('B');

    const finalized = await exchange.finalizeExchange();
    if (!finalized) {
        throw new Error(`Trade failed: ${exchange.lastError.message}`);
    }

    console.log('After trade:');
    console.log('  Alice:', contents(alice));
    console.log('  Bob:  ', contents(bob));
}
