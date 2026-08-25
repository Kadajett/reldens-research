/**
 * The event-name catalog from @reldens/items-system lib/items-events.js (ItemsEvents).
 *
 * Every name the engine fires, prefixed `reldens.items.`. Use `ITEMS_EVENTS` to listen
 * by name instead of a literal, and `itemsEventNameSchema` to validate a name is one
 * the engine actually emits.
 */
import { z } from 'zod';

const pref = 'reldens.items.';

export const ITEMS_EVENTS = {
    MANAGER_INIT: pref + 'setup',
    LOADED_OWNER_ITEMS: pref + 'loadedOwnerItems',
    SET_ITEMS: pref + 'setItems',
    SET_GROUPS: pref + 'setGroups',
    EQUIP_ITEM: pref + 'equipItem',
    UNEQUIP_ITEM: pref + 'unequipItem',
    ADD_ITEM: pref + 'addItem',
    ADD_ITEM_BEFORE: pref + 'addItemBefore',
    REMOVE_ITEM: pref + 'removeItem',
    MODIFY_ITEM_QTY: pref + 'modifyItemQty',
    EQUIP_BEFORE: pref + 'equipBefore',
    EQUIP: pref + 'equip',
    EXECUTING_ITEM: pref + 'executingItem',
    EXECUTED_ITEM: pref + 'executedItem',
    VALIDATE: pref + 'validate',
    EXCHANGE: {
        INITIALIZED: pref + 'initialized',
        CANCELED: pref + 'canceled',
        INVALID_PUSH: pref + 'invalidPush',
        ITEM_PUSHED: pref + 'itemPushed',
        ITEM_REMOVE: pref + 'itemRemove',
        CONFIRM: pref + 'confirm',
        DISCONFIRM: pref + 'disconfirm',
        BEFORE_FINALIZE: pref + 'beforeFinalize',
        FINALIZED: pref + 'finalized',
    },
} as const;

const flat = [
    ITEMS_EVENTS.MANAGER_INIT, ITEMS_EVENTS.LOADED_OWNER_ITEMS, ITEMS_EVENTS.SET_ITEMS,
    ITEMS_EVENTS.SET_GROUPS, ITEMS_EVENTS.EQUIP_ITEM, ITEMS_EVENTS.UNEQUIP_ITEM,
    ITEMS_EVENTS.ADD_ITEM, ITEMS_EVENTS.ADD_ITEM_BEFORE, ITEMS_EVENTS.REMOVE_ITEM,
    ITEMS_EVENTS.MODIFY_ITEM_QTY, ITEMS_EVENTS.EQUIP_BEFORE, ITEMS_EVENTS.EQUIP,
    ITEMS_EVENTS.EXECUTING_ITEM, ITEMS_EVENTS.EXECUTED_ITEM, ITEMS_EVENTS.VALIDATE,
    ITEMS_EVENTS.EXCHANGE.INITIALIZED, ITEMS_EVENTS.EXCHANGE.CANCELED,
    ITEMS_EVENTS.EXCHANGE.INVALID_PUSH, ITEMS_EVENTS.EXCHANGE.ITEM_PUSHED,
    ITEMS_EVENTS.EXCHANGE.ITEM_REMOVE, ITEMS_EVENTS.EXCHANGE.CONFIRM,
    ITEMS_EVENTS.EXCHANGE.DISCONFIRM, ITEMS_EVENTS.EXCHANGE.BEFORE_FINALIZE,
    ITEMS_EVENTS.EXCHANGE.FINALIZED,
] as const;

/** True for any name the items engine emits (note EQUIP_BEFORE/EQUIP get a dynamic suffix at emit). */
export const itemsEventNameSchema = z.enum(flat);
export type ItemsEventName = z.infer<typeof itemsEventNameSchema>;
