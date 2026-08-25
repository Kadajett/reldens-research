/**
 * API reference for @reldens/modifiers 0.34.0.
 *
 * Hand-written class declarations rendered by TypeDoc. Constructor parameter types are the
 * zod-inferred config types from @reldens-community/modifiers-types; method signatures are
 * read from the package source. This package computes and applies numeric/string changes
 * ("modifiers") to a target object's properties, gated by comparison "conditions".
 */
import type { Modifier as ModifierConfig, Condition as ConditionConfig, Op } from '../src/index';

/** Resolves and mutates dotted/slash property paths on a target ('stats/hp'). */
export declare class PropertyManager {
    /** Read the value at a property path on an owner object. */
    getPropertyValue(propertyOwner: object, propertyString: string): unknown;
    /** Write a value at a property path on an owner object. */
    setOwnerProperty(propertyOwner: object, propertyString: string, value: unknown): unknown;
    /** Create the path if missing, then set the value. */
    manageOwnerProperty(propertyOwner: object, propertyString: string, value: unknown): unknown;
}

/** Pure arithmetic for a modifier operation; no state. */
export declare class Calculator {
    /**
     * Apply an operation to a value (or reverse it when `revert` is true). `operation` is
     * one of ModifierConst.OPS (INC/DEC/MUL/DIV/INC_P/DEC_P/...).
     */
    calculateNewValue(originalValue: number, operation: Op, operationValue: number, revert?: boolean): number;
}

/**
 * A single value change applied to a target property. Construct it with a config object,
 * then `apply()`/`revert()` it against a target (or the target set in the config).
 */
export declare class Modifier {
    constructor(props: ModifierConfig);
    /** Apply the modifier to `target` (or the configured target). */
    apply(target?: object, useBasePropertyToGetValue?: boolean, applyOnBaseProperty?: boolean): unknown;
    /** Reverse a previously applied modifier. */
    revert(target?: object, useBasePropertyToGetValue?: boolean, applyOnBaseProperty?: boolean): unknown;
    /** Apply or revert; the shared implementation behind apply()/revert(). */
    execute(target?: object, revert?: boolean, useBasePropertyToGetValue?: boolean, applyOnBaseProperty?: boolean): unknown;
    /** Whether every attached Condition passes for the target. */
    validateConditions(target: object): boolean;
    /** Compute the new value this modifier would produce, without writing it. */
    getModifiedValue(revert?: boolean, useBasePropertyToGetValue?: boolean): number | string;
    /** The modifier's readiness/applied state (ModifierConst.MOD_*). */
    readonly state: string;
}

/**
 * A comparison gate on a target property. `isValidOn(target)` compares the target's
 * property value against the configured value using `conditional` (eq/ne/lt/gt/le/ge).
 */
export declare class Condition {
    constructor(props: ConditionConfig);
    /** True when the condition holds for the target (optionally overriding the value). */
    isValidOn(targetObject: object, overrideVal?: number | string): boolean;
}
