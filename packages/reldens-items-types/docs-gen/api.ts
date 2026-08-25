/**
 * API reference for @reldens/items-system 0.49.0.
 *
 * Hand-written class declarations rendered by TypeDoc. Constructor parameter types are
 * the zod-inferred types from this package (@reldens-community/items-types); method
 * signatures are read from the package source. A recurring convention: methods return
 * `false` on failure (and set `lastError`) and the item / `true` / a value on success.
 *
 * This documents the runtime classes @reldens/items-system exports. The engine adds,
 * uses and trades items across two inventories; individual item content is game data,
 * not part of this API.
 */
import type {
    ItemProps, ItemData, ItemGroupProps, ItemsManagerProps, ItemsServerProps, ManagerSetup,
    InitializeExchangeBetween, ExchangePlatformProps, ExchangeSide, QtyOperation, ItemType,
} from '../src/index';

/** A modifier instance (see @reldens/modifiers). Opaque in this reference. */
export type Modifier = object;
/** An events manager instance (see @reldens/utils EventsManager). */
export type EventsManager = object;

/**
 * The base class for every item. Holds the core properties (`key`, `uid`, `id`, `qty`,
 * `modifiers`, ...), applies and reverts its modifiers, and proxies events to its manager.
 */
export declare class ItemBase {
    constructor(props: ItemProps);
    /** Base items are not single-instance; subclasses override. */
    static isSingleInstance(): boolean;
    /** The inventory index key: `key` for single-instance items, else `uid`. */
    getInventoryId(): string;
    /** Apply all of the item's modifiers to its target. */
    applyModifiers(): Promise<false | void>;
    /** Revert all of the item's modifiers from its target. */
    revertModifiers(): Promise<false | void>;
    /** Whether `this.type` equals the given item type id. */
    isType(type: ItemType): boolean;
    /** Fire an event through the item's manager. */
    fireEvent(eventName: string, ...args: unknown[]): Promise<unknown>;
    /** Register a keyed listener through the item's manager. */
    listenEvent(eventName: string, callback: (...args: unknown[]) => unknown, removeKey?: string, masterKey?: string): unknown;
}

/** Equippable item (type EQUIPMENT). Equipping/unequipping applies/reverts its modifiers. */
export declare class ItemEquipment extends ItemBase {
    /** Mark equipped, fire EQUIP_ITEM, then apply modifiers unless `applyMods` is false. */
    equip(applyMods?: boolean): Promise<false | void>;
    /** Mark unequipped, fire UNEQUIP_ITEM, then revert modifiers unless `revertMods` is false. */
    unequip(revertMods?: boolean): Promise<false | void>;
}

/** Consumable item (type USABLE) with a `use()` action and use/exec timers. */
export declare class ItemUsable extends ItemBase {
    /** Use the item against an optional target; honors use and exec timeouts, then executes. */
    use(target?: object | false): Promise<false | void>;
    /** Apply modifiers, decrement uses, and remove/deduct qty when uses run out. */
    executeItem(): Promise<unknown>;
}

/** Single-instance (stackable) item (type SINGLE): stored under `key`, qty grouped in one slot. */
export declare class ItemSingle extends ItemBase {
    static isSingleInstance(): boolean;
}

/** Stackable equippable item (type SINGLE_EQUIPMENT). */
export declare class ItemSingleEquipment extends ItemEquipment {}

/** Stackable consumable item (type SINGLE_USABLE). */
export declare class ItemSingleUsable extends ItemUsable {}

/**
 * The core inventory: holds items, enforces limits and locking, mutates quantities, and
 * drives the events system. Base class for {@link ItemsManager} and {@link ItemGroup}.
 */
export declare class Inventory {
    /** Validate an item instance (exists, has getInventoryId() and a key); fires VALIDATE. */
    validate(item: ItemBase): Promise<boolean>;
    /** The first stored item whose `key` matches, or false. */
    findItemByKey(itemKey: string): ItemBase | false;
    /** All stored items whose given property equals the value. */
    findItemsByPropertyValue(propertyKey: string, propertyValue: unknown): ItemBase[];
    /** Add an item after validation/limit/lock checks; single items increase qty instead. */
    addItem(item: ItemBase): Promise<ItemBase | false>;
    /** Add each item in turn; false at the first failure, else true. */
    addItems(itemsArray: ItemBase[]): Promise<boolean>;
    /** Store an item by its inventory id, bypassing validation; false if locked. */
    setItem(item: ItemBase): Promise<false | void>;
    /** Remove the item at inventory-id `key`; false if locked or not found. */
    removeItem(key: string): Promise<boolean>;
    /** Set an item's qty. */
    setItemQty(key: string, qty: number): Promise<boolean>;
    /** Increase an item's qty. */
    increaseItemQty(key: string, qty: number): Promise<boolean>;
    /** Decrease an item's qty (floored at 0; may auto-remove at 0). */
    decreaseItemQty(key: string, qty: number): Promise<boolean>;
    /** Core qty mutator; `op` is a SET/INCREASE/DECREASE operation. */
    modifyItemQty(op: QtyOperation, key: string, qty: number): Promise<boolean>;
    /** Replace the whole items map (keyed by inventory id) and fire SET_ITEMS. */
    setItems(items: Record<string, ItemBase>): Promise<false | unknown>;
    /** Replace the groups map and fire SET_GROUPS. */
    setGroups(groups: Record<string, ItemGroup>): Promise<unknown>;
    /** Emit a prefixed event through the events manager. */
    fireEvent(eventName: string, ...args: unknown[]): Promise<unknown>;
    /** Register a keyed listener for a prefixed event. */
    listenEvent(eventName: string, callback: (...args: unknown[]) => unknown, removeKey?: string, masterKey?: string): unknown;
}

/**
 * A categorized sub-inventory (e.g. a bag) with its own id, key, label, sort and limits.
 * All behavior is inherited from {@link Inventory}; `id` and `key` are required.
 */
export declare class ItemGroup extends Inventory {
    constructor(props: ItemGroupProps);
}

/**
 * An {@link Inventory} bound to an owner: resolves the owner id, namespaces event keys,
 * and creates item instances from `itemsModelData`. This is the object most server code
 * holds.
 */
export declare class ItemsManager extends Inventory {
    constructor(props: ItemsManagerProps);
    /** The owner's id, read from `owner[ownerIdProperty]`. */
    getOwnerId(): string | number;
    /** The owner's event-key prefix. */
    getOwnerEventKey(): string;
    /** A unique event key for the owner, optionally suffixed. */
    getOwnerUniqueEventKey(suffix: string): string;
    /** Initialize: fire MANAGER_INIT, then setItems/setGroups when provided. */
    setup(props: ManagerSetup): Promise<false | void>;
    /** Build one item instance (or an array for non-single items with qty > 1) from the catalog. */
    createItemInstance(key: string, qty?: number): ItemBase | ItemBase[] | false;
}

/**
 * Server-side wrapper grouping an {@link ItemsManager} (`manager`) with a `Sender`
 * (`client`). Most work is done through `server.manager`.
 */
export declare class ItemsServer {
    constructor(props: ItemsServerProps);
    /** Create the Sender from `props.client`; false if errored or no client. */
    createClient(props: object): unknown;
    readonly manager: ItemsManager;
}

/**
 * Client-side counterpart to the server Sender. Extend it and override the `on*` hooks.
 * Parses server messages and replays each action against a client-side {@link ItemsManager}.
 */
export declare class Receiver {
    /** Populate the default action-constant -> handler-method map. */
    setDefaultActions(): void;
    /** Validate a message's action prefix, look up its handler, and invoke it. */
    processMessage(message: object): false | void;
    /** Rebuild all items from `message.items` and call manager.setItems. */
    onSetItems(message: object): Promise<unknown>;
    /** Rebuild groups from `message.groups` and call manager.setGroups. */
    onSetGroups(message: object): Promise<unknown>;
    /** Build one item from `message.item` and add it. */
    onAddItem(message: object): void;
    /** Remove the referenced item. */
    onRemoveItem(message: object): void;
    /** Set the referenced item's qty. */
    onSetQty(message: object): void;
    /** Resolve the item class for a key, falling back to the class for the type id. */
    getItemClass(key: string, typeId: number): unknown;
    /** Resolve the group class for a key, defaulting to ItemGroup. */
    getGroupClass(key: string): unknown;
}

/**
 * The trading engine between two inventories keyed `'A'` and `'B'`. It locks both
 * inventories, stages items per side, requires both sides to confirm, validates
 * requirements and rewards, then transfers on finalize.
 */
export declare class ExchangePlatform {
    constructor(props?: ExchangePlatformProps);
    /** Start an exchange: set and lock both inventories, install requirement/reward collections. */
    initializeExchangeBetween(props: InitializeExchangeBetween): void;
    /** Stage an item+qty for a side (blocked once either side has confirmed). */
    pushForExchange(itemUid: string, qty: number, inventoryKey: ExchangeSide): Promise<boolean>;
    /** Remove a staged item for a side. */
    removeFromExchange(itemUid: string, inventoryKey: ExchangeSide): Promise<boolean>;
    /** Mark a side confirmed. */
    confirmExchange(inventoryKey: ExchangeSide): Promise<void>;
    /** Clear a side's confirmation. */
    disconfirmExchange(inventoryKey: ExchangeSide): Promise<void>;
    /** Complete the trade: requires both confirmations, re-validates, then transfers both ways. */
    finalizeExchange(): Promise<boolean>;
    /** Unlock inventories and reset all exchange state. */
    cancelExchange(): void;
    /** The other side's key. */
    oppositeKey(inventoryKey: ExchangeSide): ExchangeSide;
}

/** One exchange requirement (which required item, how many, whether auto-removed). */
export declare class ExchangeRequirement {
    constructor(props: { itemUid?: string; itemKey?: string; requiredItemKey: string; requiredQuantity: number; autoRemoveRequirement?: boolean });
}

/** A queryable list of {@link ExchangeRequirement}s. */
export declare class RequirementsCollection {
    constructor(props?: { requirements?: ExchangeRequirement[] });
    /** Number of requirements. */
    count(): number;
    /** Construct and append a new requirement. */
    add(itemUid: string, itemKey: string, requiredItemKey: string, requiredQuantity: number, autoRemoveRequirement: boolean): void;
    /** Remove the first requirement matching `itemUid`. */
    remove(itemUid: string): void;
    /** All requirements whose property matches. */
    fetchAllBy(propertyName: string, propertyValue: unknown): ExchangeRequirement[];
}

/** Validates and applies exchange requirements against the two inventories. */
export declare class RequirementsProcessor {
    constructor(props?: { requirementsByItemUid?: boolean; requirementsByItemKey?: boolean });
    /** Validate that every staged item's requirements are met on the opposite inventory. */
    validateRequirements(inventoryKeyFrom: ExchangeSide, exchange: ExchangePlatform): boolean;
}

/** One exchange reward (which reward item, how many, whether it must already exist). */
export declare class ExchangeReward {
    constructor(props: { itemUid?: string; itemKey?: string; rewardItemKey: string; rewardQuantity: number; rewardItemIsRequired?: boolean });
}

/** A queryable list of {@link ExchangeReward}s. */
export declare class RewardsCollection {
    constructor(props?: { rewards?: ExchangeReward[] });
    /** Number of rewards. */
    count(): number;
    /** Construct and append a new reward. */
    add(itemUid: string, itemKey: string, rewardItemKey: string, rewardQuantity: number, rewardItemIsRequired: boolean): void;
    /** Remove the first reward matching `itemUid`. */
    remove(itemUid: string): void;
    /** All rewards whose property matches. */
    fetchAllBy(propertyName: string, propertyValue: unknown): ExchangeReward[];
}

/** Validates and applies exchange rewards. */
export declare class RewardsProcessor {
    constructor(props?: { rewardsByItemUid?: boolean; rewardsByItemKey?: boolean });
    /** Validate that required rewards exist with sufficient quantity on the opposite inventory. */
    validateRewards(inventoryKeyFrom: ExchangeSide, exchange: ExchangePlatform): boolean;
}

/**
 * Static helper: maps a list of item DB models into the `{ [key]: { class, data } }`
 * catalog the manager consumes, and builds Modifier instances from model relations.
 */
export declare class ItemsDataGenerator {
    /** Map item models to `{ class, data }` catalog entries (data is {@link ItemData}). */
    static itemsListMappedData(inventoryClasses: object, itemsModelsList: object[]): Record<string, { class: unknown; data: ItemData }>;
    /** Build Modifier instances keyed by id from an item model's modifier relations. */
    static generateItemModifiers(itemModel: object): Record<string, Modifier>;
}

/** Static helper: maps group DB models into the structure the manager consumes. */
export declare class GroupsDataGenerator {
    /** Map group models to `{ groupList, groupBaseData, groupModels }`. */
    static groupsListMappedData(inventoryClasses: object, groupModelsList: object[]): object;
}

/** Minimal database-model wrapper bridging ORM entities to the item system. */
export declare class ModelEntity {
    constructor(props: { id?: number | string | null; key?: string; type?: number });
}

/** Structured error stored on `lastError` across the system. */
export declare class ItemsError {
    constructor(message?: string, code?: string, data?: object, withError?: boolean);
    readonly message: string;
    readonly code: string;
}
