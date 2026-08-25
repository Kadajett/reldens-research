/**
 * Enums and constant values from @reldens/items-system lib/constants.js (ItemsConst).
 *
 * These are the fixed vocabularies the engine uses: item type numbers, trade actions,
 * quantity operations, and send behaviors. The zod schemas below let you validate a
 * value is one the engine accepts; the plain objects mirror `ItemsConst` so you can
 * reference a name instead of a magic string/number.
 */
import { z } from 'zod';

/** Item type ids (ItemsConst.TYPES). SINGLE* items collapse quantity into one inventory slot. */
export const ITEM_TYPES = {
    ITEM_BASE: 10,
    EQUIPMENT: 1,
    USABLE: 2,
    SINGLE: 3,
    SINGLE_EQUIPMENT: 4,
    SINGLE_USABLE: 5,
} as const;

export const itemTypeSchema = z.union([
    z.literal(10), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5),
]);
export type ItemType = z.infer<typeof itemTypeSchema>;

/** Trade action a user asks the exchange to perform (ItemsConst.TRADE_ACTIONS). */
export const TRADE_ACTIONS = { BUY: 'buy', SELL: 'sell', TRADE: 'trade' } as const;
export const tradeActionSchema = z.enum(['buy', 'sell', 'trade']);
export type TradeAction = z.infer<typeof tradeActionSchema>;

/** Quantity operation for modifyItemQty (ItemsConst SET/INCREASE/DECREASE). */
export const QTY_OPERATIONS = { SET: 'set', INCREASE: 'increase', DECREASE: 'decrease' } as const;
export const qtyOperationSchema = z.enum(['set', 'increase', 'decrease']);
export type QtyOperation = z.infer<typeof qtyOperationSchema>;

/** How the server dispatches an action result (ItemsConst BEHAVIOR_*). */
export const SEND_BEHAVIORS = { SEND: 'send', BROADCAST: 'broadcast', BOTH: 'both' } as const;
export const sendBehaviorSchema = z.enum(['send', 'broadcast', 'both']);
export type SendBehavior = z.infer<typeof sendBehaviorSchema>;

/** The `rinv`-prefixed action codes the client/server messages carry (ItemsConst.ACTION_*). */
export const ACTIONS = {
    ADD: 'rinvA',
    REMOVE: 'rinvR',
    MODIFY_QTY: 'rinvM',
    EQUIP: 'rinvE',
    UNEQUIP: 'rinvU',
    MOD_APPLIED: 'rinvMa',
    MOD_REVERTED: 'rinvMr',
    EXECUTING: 'rinvEx',
    EXECUTED: 'rinvAExd',
    MANAGER_INIT: 'rinvMi',
    SET_ITEMS: 'rinvSi',
    SET_GROUPS: 'rinvSg',
} as const;
export const actionCodeSchema = z.enum([
    'rinvA', 'rinvR', 'rinvM', 'rinvE', 'rinvU', 'rinvMa', 'rinvMr',
    'rinvEx', 'rinvAExd', 'rinvMi', 'rinvSi', 'rinvSg',
]);
export type ActionCode = z.infer<typeof actionCodeSchema>;
