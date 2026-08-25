/**
 * Using the custom item class.
 *
 * The only new step versus the trade demo is registration: pass a `{ key: Class }`
 * map to ItemsDataGenerator so `fire_rune` builds a Runestone instead of a plain
 * ItemSingle. Everything else - createItemInstance, addItem - is unchanged.
 */
import { ItemsManager, ItemsDataGenerator, type OwnerLike } from '@reldens/items-system';
import { itemsCatalog } from './items-catalog';
import { Runestone, runestoneModel } from './runestone';

export async function runCustomTypeDemo(): Promise<void> {
    const catalog = [...itemsCatalog, runestoneModel];

    // Register the custom class for its key; other keys fall back to their built-in class.
    const itemsModelData = ItemsDataGenerator.itemsListMappedData(
        { [runestoneModel.key]: Runestone },
        structuredClone(catalog),
    );

    const owner: OwnerLike = { id: 1, name: 'Mage' };
    const manager = new ItemsManager({ owner, itemsModelData });
    await manager.setup({});

    const created = manager.createItemInstance(runestoneModel.key);
    if (created === false || Array.isArray(created)) {
        throw new Error('Expected a single Runestone instance.');
    }
    // The manager built this from the registered class, so it is a Runestone at runtime.
    const rune = created as unknown as Runestone;
    await manager.addItem(rune);

    console.log('Custom item type:');
    console.log('  built a', rune.constructor.name, '->', rune.summary());
    console.log('  element:', rune.element, 'power:', rune.power);
}
