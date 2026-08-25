/**
 * API reference for @reldens/skills 0.48.0.
 *
 * Hand-written class declarations rendered by TypeDoc. Constructor parameter types are the
 * zod-inferred config types from @reldens-community/skills-types; method signatures are
 * read from the package source. The engine runs skills (attacks/effects, physical or not),
 * tracks levels and experience, and manages a character's class-path skills.
 *
 * The `target`/owner objects are game entities exposing `getPosition()`; a target is the
 * entity a skill acts on. Modifier/Condition values are @reldens/modifiers instances.
 */
import type {
    SkillProps, AttackProps, PhysicalAttackProps, EffectProps, PhysicalEffectProps,
    LevelProps, LevelsSetInit, ClassPathInit, SkillsServerProps,
} from '../src/index';

/** A game entity a skill targets or is owned by (exposes getPosition()). */
export type Target = object;
/** A @reldens/modifiers Modifier instance. */
export type Modifier = object;

/**
 * The base skill: validates conditions/range, runs an execute lifecycle with event hooks,
 * and applies modifiers to a target. Subclasses override `runSkillLogic()`.
 */
export declare class Skill {
    constructor(props: SkillProps);
    /** Validate readiness, conditions, uses and cast state; fires the VALIDATE events. */
    validate(): boolean;
    /** Run each owner Condition against the owner. */
    validateConditions(): boolean;
    /** Compare owner vs target positions using the configured range properties. */
    validateRange(target: Target): boolean;
    /** Range check via InteractionArea; range 0 means infinite. */
    isInRange(ownerPosition: { x: number; y: number }, targetPosition: { x: number; y: number }): boolean;
    /** Main entry point: fire before/after events, apply owner effects, run logic, count uses. */
    execute(target: Target): Promise<boolean>;
    /** Roll a critical and apply the multiplier/fixed value to a value. */
    applyCriticalValue(normalValue: number): number;
    /** Whether a critical is rolled (against criticalChance). */
    isCritical(): boolean;
    /** Apply a list of modifiers to a target (optionally skipping critical). */
    applyModifiers(modifiersObjectList: Modifier[], target: Target, avoidCritical?: boolean): void;
    /** Override hook; base returns true. */
    runSkillLogic(): Promise<boolean>;
    /** Fire a namespaced event through the events manager. */
    fireEvent(eventName: string, ...args: unknown[]): Promise<unknown>;
    /** Subscribe to a namespaced event. */
    listenEvent(eventName: string, callback: (...args: unknown[]) => unknown, removeKey?: string, masterKey?: string): unknown;
}

/** A Skill that calculates and applies damage, factoring attack/defense, aim/dodge and criticals. */
export declare class Attack extends Skill {
    constructor(props: AttackProps);
    /** Validate target/range, then apply damage. */
    runSkillLogic(): Promise<boolean>;
    /** Full damage pipeline: dodge check, proportion damage, critical, write property, fire event. */
    applyDamageTo(target: Target): Promise<boolean>;
    /** Read the affected property value from a target. */
    getAffectedPropertyValue(target: Target): number;
}

/** A Skill that applies its `targetEffects` modifiers (with critical chance) to the target. */
export declare class Effect extends Skill {
    constructor(props: EffectProps);
    /** Validate target/range, then apply the target effects. */
    runSkillLogic(): Promise<boolean>;
}

/** An Attack that applies its damage on a physics-world collision hit rather than immediately. */
export declare class PhysicalAttack extends Attack {
    constructor(props: PhysicalAttackProps);
    /** Run the parent Attack logic on collision; fires the physical-attack-hit event. */
    executeOnHit(target: Target): Promise<unknown>;
}

/** An Effect that applies its effects on a physics-world collision hit. */
export declare class PhysicalEffect extends Effect {
    constructor(props: PhysicalEffectProps);
    /** Run the parent Effect logic on collision; fires the physical-effect-hit event. */
    executeOnHit(target: Target): Promise<unknown>;
}

/** A single level: its integer `key`, `modifiers`, `label` and `requiredExperience`. */
export declare class Level {
    constructor(props: LevelProps);
}

/**
 * Manages an owner's level progression: holds levels, tracks current level/experience,
 * applies level modifiers, and awards experience with automatic level-up/down. The real
 * config is passed to `init()`, not the constructor.
 */
export declare class LevelsSet {
    /** Assign the owner (must expose getPosition()). */
    setOwner(props: { owner: Target; ownerIdProperty?: string }): void | false;
    /** Configure levels, autofill, current level/exp and experience order; fires INIT events. */
    init(props: LevelsSetInit): Promise<void | false>;
    /** Increment the level, apply its modifiers, fire LEVEL_UP. */
    levelUp(): Promise<void | false>;
    /** Revert modifiers, decrement the level, fire LEVEL_DOWN. */
    levelDown(): Promise<void | false>;
    /** Add experience, triggering level-ups; fires LEVEL_EXPERIENCE_ADDED. */
    addExperience(amount: number): Promise<void>;
    /** Required experience for the next reachable level. */
    getNextLevelExperience(): number;
    /** The Level instance for a level number, or false. */
    getLevelInstance(level: number): Level | false;
}

/**
 * A LevelsSet that also manages a labeled class path and the skills a character owns,
 * unlocking/removing skills as levels change. Config is passed to `init()`.
 */
export declare class ClassPath extends LevelsSet {
    /** Configure the class path (super.init + key/label/skillsByLevel); fires INIT_CLASS_PATH_END. */
    init(props: ClassPathInit): Promise<void | false>;
    /** Merge skills into currentSkills by key; fires ADD_SKILLS events. */
    addSkills(skills: Record<string, Skill> | Skill[]): Promise<void>;
    /** Remove skills by key or instance; fires REMOVE_SKILLS events. */
    removeSkills(skills: Record<string, Skill> | (string | Skill)[]): Promise<void>;
    /** Set current skills, or rebuild them from skillsByLevel up to the current level. */
    setOwnerSkills(skills: Record<string, Skill> | false): Promise<void>;
    /** The current display label for the level. */
    getCurrentLabel(): string;
}

/**
 * Client-side dispatcher: maps skill action constants to `on*` handler names and routes
 * incoming messages to them. Extend it and override the `on*` hooks you need.
 */
export declare class Receiver {
    /** Populate the default action -> on* handler-name map. */
    setDefaultMethods(): void;
    /** Validate a message's action prefix and dispatch it to its handler. */
    processMessage(message: { act: string; [k: string]: unknown }): void | false;
    /** True when `act` begins with the skills action prefix (`rski.`). */
    isValidMessage(message: { act: string }): boolean;
}

/**
 * Server-side wiring: builds a {@link ClassPath} for the owner and, when a `client` is
 * given, attaches a Sender to broadcast skill/level action data. Work happens in setup.
 */
export declare class SkillsServer {
    constructor(props: SkillsServerProps);
    /** Validate the owner, create/reuse a ClassPath, attach a Sender when a client is present. */
    setupServer(props: SkillsServerProps): false | undefined;
    readonly classPath: ClassPath;
}
