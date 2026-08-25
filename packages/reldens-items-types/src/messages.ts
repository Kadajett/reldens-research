/**
 * Client<->server message payloads, from @reldens/items-system lib/server/sender.js and
 * lib/client/receiver.js. Every message carries an `act` string prefixed `rinv`; the
 * Receiver ignores anything that does not start with that prefix.
 *
 * Outbound item messages carry an `item` whose `idx` is the inventory id plus a per-action
 * whitelist of properties - typed as a loose object here since the property set varies by
 * action. The bulk set-items / set-groups shapes are pinned concretely.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';
import { actionCodeSchema, ACTIONS } from './constants';

const ownerId = z.union([z.string(), z.number()]);

/** Any inbound message the Receiver will process (act must be a `rinv*` code). */
export const inboundItemsMessageSchema = loose({
    act: z.string().refine((v) => v.startsWith('rinv'), 'act must be a rinv* action code'),
});
export type InboundItemsMessage = z.infer<typeof inboundItemsMessageSchema>;

/** A single-item action message (add/remove/equip/…); `item.idx` is the inventory id. */
export const itemActionMessageSchema = loose({
    act: actionCodeSchema,
    owner: ownerId,
    item: loose({ idx: z.union([z.string(), z.number()]) }),
});
export type ItemActionMessage = z.infer<typeof itemActionMessageSchema>;

/** Bulk snapshot of the inventory (ACTION_SET_ITEMS). */
export const setItemsMessageSchema = z.object({
    act: z.literal(ACTIONS.SET_ITEMS),
    owner: ownerId,
    /** Item props by inventory id, each including a `singleInstance` flag. */
    items: z.record(z.string(), zAny),
});
export type SetItemsMessage = z.infer<typeof setItemsMessageSchema>;

/** Bulk snapshot of the groups (ACTION_SET_GROUPS). */
export const setGroupsMessageSchema = z.object({
    act: z.literal(ACTIONS.SET_GROUPS),
    owner: ownerId,
    groups: z.record(z.string(), z.object({
        id: z.union([z.number(), z.string()]),
        key: z.string(),
        label: z.union([z.string(), z.literal(false)]).optional(),
        description: z.union([z.string(), z.literal(false)]).optional(),
        sort: z.union([z.number(), z.literal(false)]).optional(),
    })),
});
export type SetGroupsMessage = z.infer<typeof setGroupsMessageSchema>;
