/**
 * The trading engine: ExchangePlatform, and the requirement/reward configs an exchange
 * runs on. Field-for-field from @reldens/items-system lib/exchange/*.
 *
 * An exchange always has two sides, keyed 'A' and 'B'. You set one up with
 * `initializeExchangeBetween({inventoryA, inventoryB, ...})`, push items with
 * `pushForExchange(itemUid, qty, 'A'|'B')`, both sides confirm, then `finalizeExchange()`.
 *
 * Inventory and collection instances are opaque here (validated as present, not shaped);
 * the requirement/reward CONFIGS are what you author, so those are typed concretely.
 * `requiredQuantity`/`rewardQuantity` use z.coerce.number() because the source wraps
 * them in Number() - a numeric string like '75' is accepted, matching the package.
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';

/** Which side of the exchange a call targets. */
export const exchangeSideSchema = z.enum(['A', 'B']);
export type ExchangeSide = z.infer<typeof exchangeSideSchema>;

/** `new ExchangePlatform(props)`. */
export const exchangePlatformPropsSchema = loose({
    eventsManager: zAny.optional(),
    /** Id of whoever opened the exchange; `false` when unset. */
    exchangeInitializerId: z.union([z.string(), z.number(), z.literal(false)]).optional(),
});
export type ExchangePlatformProps = z.infer<typeof exchangePlatformPropsSchema>;

/** `platform.initializeExchangeBetween(props)` - both inventories are required. */
export const initializeExchangeBetweenSchema = loose({
    /** Side A inventory instance. Required (null throws). */
    inventoryA: zInstance,
    /** Side B inventory instance. Required (null throws). */
    inventoryB: zInstance,
    /** RequirementsCollection instances; default to empty collections. */
    exchangeRequirementsA: zAny.optional(),
    exchangeRequirementsB: zAny.optional(),
    /** RewardsCollection instances; default to empty collections. */
    exchangeRewardsA: zAny.optional(),
    exchangeRewardsB: zAny.optional(),
    /** Side gives its rewards but receives no traded item (e.g. an NPC vendor). */
    dropExchangeA: z.boolean().optional(),
    dropExchangeB: z.boolean().optional(),
    /** Skip decrementing this side's inventory on finalize. */
    avoidExchangeDecreaseA: z.boolean().optional(),
    avoidExchangeDecreaseB: z.boolean().optional(),
});
export type InitializeExchangeBetween = z.infer<typeof initializeExchangeBetweenSchema>;

/** Positional args of `pushForExchange(itemUid, qty, side)`. */
export const pushForExchangeArgsSchema = z.tuple([z.string(), z.number(), exchangeSideSchema]);
/** Positional args of `removeFromExchange(itemUid, side)`. */
export const removeFromExchangeArgsSchema = z.tuple([z.string(), exchangeSideSchema]);

/** A single requirement (`new ExchangeRequirement(props)` / RequirementsCollection.add). */
export const exchangeRequirementSchema = z.object({
    itemUid: z.string().optional(),
    itemKey: z.string().optional(),
    /** The item key the counterparty must provide. Required. */
    requiredItemKey: z.string(),
    /** How many; a numeric string is coerced (source uses Number()). Required. */
    requiredQuantity: z.coerce.number(),
    /** Consume the required item on finalize without it being pushed (e.g. gold). */
    autoRemoveRequirement: z.boolean().optional(),
});
export type ExchangeRequirement = z.infer<typeof exchangeRequirementSchema>;

/** A single reward (`new ExchangeReward(props)` / RewardsCollection.add). */
export const exchangeRewardSchema = z.object({
    itemUid: z.string().optional(),
    itemKey: z.string().optional(),
    /** The item key granted as reward. Required. */
    rewardItemKey: z.string(),
    /** How many; a numeric string is coerced (source uses Number()). Required. */
    rewardQuantity: z.coerce.number(),
    /** When true the reward is drawn from the counterparty (must already exist there). */
    rewardItemIsRequired: z.boolean().optional(),
});
export type ExchangeReward = z.infer<typeof exchangeRewardSchema>;

/** `new RequirementsProcessor(props)` - toggles which index a requirement matches on. */
export const requirementsProcessorPropsSchema = z.object({
    requirementsByItemUid: z.boolean().optional(),
    requirementsByItemKey: z.boolean().optional(),
});

/** `new RewardsProcessor(props)`. */
export const rewardsProcessorPropsSchema = z.object({
    rewardsByItemUid: z.boolean().optional(),
    rewardsByItemKey: z.boolean().optional(),
});
