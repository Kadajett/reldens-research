/**
 * Minimal ambient declaration for the parts of @reldens/items-system this example uses.
 *
 * The package is untyped CommonJS. These declarations cover only the trade flow below;
 * every shape keeps an index-signature escape hatch so a missing member still compiles.
 */
declare module '@reldens/items-system' {
    export interface OwnerLike { id: number | string; [key: string]: unknown }

    export interface ItemModel { key: string; type?: number; [key: string]: unknown }

    export interface ItemInstance { key: string; uid: string; qty: number; [key: string]: unknown }

    export interface ItemsModelDataEntry { class: unknown; data: ItemModel }
    export type ItemsModelData = Record<string, ItemsModelDataEntry>;

    export class ItemsManager {
        constructor(props: { owner: OwnerLike; itemsModelData?: ItemsModelData; [key: string]: unknown });
        items: Record<string, ItemInstance>;
        setup(props?: { items?: Record<string, ItemInstance>; groups?: unknown }): Promise<unknown>;
        createItemInstance(key: string, qty?: number): ItemInstance | ItemInstance[] | false;
        addItem(item: ItemInstance): Promise<ItemInstance | false>;
        findItemByKey(key: string): ItemInstance | false;
        getOwnerId(): string | number;
    }

    export class ExchangePlatform {
        constructor(props?: { [key: string]: unknown });
        lastError: { message: string; [key: string]: unknown };
        initializeExchangeBetween(props: { inventoryA: ItemsManager; inventoryB: ItemsManager; [key: string]: unknown }): void;
        pushForExchange(itemUid: string, qty: number, inventoryKey: 'A' | 'B'): Promise<boolean>;
        confirmExchange(inventoryKey: 'A' | 'B'): Promise<void>;
        finalizeExchange(): Promise<boolean>;
    }

    export class ItemsDataGenerator {
        static itemsListMappedData(
            inventoryClasses: Record<string, unknown>,
            itemsModelsList: ItemModel[]
        ): ItemsModelData;
    }

    export const ItemsConst: {
        TYPES: {
            ITEM_BASE: number; EQUIPMENT: number; USABLE: number;
            SINGLE: number; SINGLE_EQUIPMENT: number; SINGLE_USABLE: number;
        };
        [key: string]: unknown;
    };
}
