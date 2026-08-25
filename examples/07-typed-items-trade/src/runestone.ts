/**
 * Extending the item system: a custom item class.
 *
 * @reldens/items-system has six built-in types. To add behavior it does not cover,
 * subclass one of the item classes and register it per item key (see custom-type-demo.ts).
 * A Runestone is a stackable SINGLE item that carries two authored fields the base
 * classes know nothing about - `element` and `power` - and a method that uses them.
 *
 * This is engine code: it imports @reldens/items-system only.
 */
import { ItemSingle } from '@reldens/items-system';

/** The elements a runestone can carry. Reused by the optional schema. */
export const RUNE_ELEMENTS = ['fire', 'water', 'earth', 'air'] as const;
export type RuneElement = (typeof RUNE_ELEMENTS)[number];

export class Runestone extends ItemSingle {
    element: RuneElement;
    power: number;

    constructor(props: { key: string; element: RuneElement; power: number; [key: string]: unknown }) {
        super(props);
        this.element = props.element;
        this.power = props.power;
    }

    /** Behavior the base classes cannot express. */
    summary(): string {
        return `${this.label} (${this.element} +${this.power})`;
    }
}

/** The catalog entry for the runestone: plain data with the two extra fields. */
export const runestoneModel = {
    id: 4,
    key: 'fire_rune',
    type: 3, // ItemsConst.TYPES.SINGLE
    label: 'Fire Rune',
    element: 'fire' as RuneElement,
    power: 5,
    qty_limit: -1,
};
