/**
 * Items and inventory.
 *
 * @reldens/items-system is a standalone package: an ItemsServer owns a manager
 * per player, items are class instances built from the `items_item` rows, and
 * every change is broadcast to the owning client and persisted.
 *
 * On the game server you rarely construct any of this yourself - the platform's
 * items feature does it during player load, and you reach it through
 * `playerSchema.inventory.manager`. What you write here is the logic that uses
 * it, plus any custom item class you want registered.
 */
import { ItemsConst, ItemsEvents } from '@reldens/items-system';
import type { ReldensEventsManager } from 'reldens-events';

export function registerItemsHooks(events: ReldensEventsManager): void {

    // TODO: the items package emits its own events through the same shared manager.
    //  ItemsEvents lists the keys; log them once with `events.debug = 'all'` to see
    //  the payloads before committing to any of them.
    void ItemsEvents;
    void ItemsConst;

}

/**
 * The inventory API you will use most, all on `playerSchema.inventory.manager`:
 *
 *   findItemByKey(key)              first item with that item key, or false
 *   getItemByIdx(idx)               item at an inventory index
 *   addItem(item)                   add an instance
 *   increaseItemQty(uid, qty)
 *   decreaseItemQty(uid, qty)       returns false if it could not
 *   equip(uid) / unequip(uid)
 *   getItems()                      the whole bag
 *
 * TODO: write the helpers this example needs against that API.
 */
