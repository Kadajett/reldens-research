/**
 * API reference for @reldens/utils 0.54.0.
 *
 * Hand-written declarations rendered by TypeDoc. Several exports are ready-to-use
 * singletons (ErrorManager, Logger, EnvVar, PageRangeProvider, `sc`, EventsManagerSingleton),
 * documented here as classes for their method surface; EventsManager, InteractionArea,
 * ValidatorInterface and SchemaValidator are classes you instantiate/extend. The `sc`
 * helper is a large grab-bag - the most-used members are shown.
 */

/** An async/sync event emitter with keyed listeners, leak warnings, and data filtering. */
export declare class EventsManager {
    /** Register an always-on listener. */
    on(type: string | symbol, fn: (...args: unknown[]) => unknown): this | false;
    /** Register a one-shot listener. */
    once(type: string | symbol, fn: (...args: unknown[]) => unknown): this | false;
    /** Async emit: awaits promise-returning listeners in sequence. */
    emit(type: string | symbol, ...args: unknown[]): Promise<boolean>;
    /** Synchronous emit (no awaiting). */
    emitSync(type: string | symbol, ...args: unknown[]): boolean;
    /** Remove one listener (by fn) or all listeners for a type. */
    removeListener(type: string | symbol, fn?: (...args: unknown[]) => unknown): boolean | false;
    /** Remove every listener and cache. */
    removeAllListeners(): void;
    /** Register a listener retrievable/removable by a unique key (optionally grouped). */
    onWithKey(eventName: string, callback: (...args: unknown[]) => unknown, uniqueRemoveKey: string, masterKey?: string): object | false;
    /** Remove a keyed listener. */
    offWithKey(uniqueRemoveKey: string, masterKey?: string): boolean | false;
    /** Remove all listeners grouped under a master key. */
    offByMasterKey(masterKey: string): void | false;
}

/** Singleton error handler: `error(message)` throws, or calls a configured callback. */
export declare class ErrorManager {
    /** Throw (or invoke the configured callback with) the message. */
    error(message: string): unknown;
}

/**
 * Singleton logger with syslog levels (emergency..debug). Each level method is chainable;
 * output is gated by the configured level. Configured from RELDENS_LOG* env vars.
 */
export declare class Logger {
    emergency(...args: unknown[]): this;
    alert(...args: unknown[]): this;
    critical(...args: unknown[]): this;
    error(...args: unknown[]): this;
    warning(...args: unknown[]): this;
    notice(...args: unknown[]): this;
    info(...args: unknown[]): this;
    debug(...args: unknown[]): this;
    /** Set the active log level. */
    setLogLevel(level: number): this;
    /** Mute all output. */
    setForcedDisabled(forced: boolean): this;
}

/**
 * Singleton for typed, safe env-var reads. Every method returns the default when the value
 * is missing or invalid. e.g. `EnvVar.integer(process.env, 'PORT', 8080, 1, 65535)`.
 */
export declare class EnvVar {
    string(obj: object, key: string, defaultValue: string): string;
    nonEmptyString(obj: object, key: string, defaultValue: string): string;
    number(obj: object, key: string, defaultValue: number): number;
    boolean(obj: object, key: string, defaultValue: boolean): boolean;
    array(obj: object, key: string, defaultValue: string[], separator?: string): string[];
    url(obj: object, key: string, defaultValue: string): string;
    json(obj: object, key: string, defaultValue: unknown): unknown;
    integer(obj: object, key: string, defaultValue: number, min?: number, max?: number): number;
    port(obj: object, key: string, defaultValue: number): number;
}

/** Base validator class; extend and override `validate`. */
export declare class ValidatorInterface {
    validate(): boolean;
}

/**
 * Runtime object-schema validator (extends {@link ValidatorInterface}). Construct with a
 * schema (a map of property name -> rule with `type`, `required`, `min`/`max`, `pattern`,
 * `enum`, `custom`, `nested`, `valuesType`).
 */
export declare class SchemaValidator {
    constructor(schema: object);
    /** Validate an object against the schema (or an override schema). */
    validate(obj: object, schema?: object): boolean;
    /** Validate a single value against one field rule. */
    isValidSchema(obj: unknown, schema: object, objectKey: string): boolean;
}

/** A square interaction range around an origin; `isValidInteraction(x,y)` tests a point. */
export declare class InteractionArea {
    /** Set the area size (margin) and origin, computing the limits. */
    setupInteractionArea(margin?: number | false, x?: number | false, y?: number | false): void;
    /** True when the point lies inside the computed limits. */
    isValidInteraction(posX: number, posY: number): boolean;
    /** The stored origin. */
    getPosition(): { x: number; y: number };
}

/** Singleton pagination-range builder. */
export declare class PageRangeProvider {
    /** A windowed page range centered on `page`, with first/last entries. */
    fetch(page: number, totalPages: number, totalDisplayedPages?: number, firstLabel?: string, lastLabel?: string): Array<{ label: string | number; value: number }>;
}

/**
 * `sc` (Shortcuts): a singleton grab-bag of pure helpers used throughout Reldens. Only the
 * most-used members are shown; there are many more string/array/date/security helpers.
 */
export declare class Shortcuts {
    /** Own-property check (prop may be an array; value must not be undefined). */
    hasOwn(obj: object, prop: string | string[]): boolean;
    /** `hasOwn(obj, prop) ? obj[prop] : defaultReturn`. */
    get(obj: object, prop: string, defaultReturn: unknown): unknown;
    /** obj is an object and `obj[property]` is a function. */
    isObjectFunction(obj: object, property: string): boolean;
    /** Parse a JSON string, or return the default on error. */
    toJson(jsonString: string, defaultReturn?: unknown): unknown;
    /** Deep clone via stringify/parse. */
    deepJsonClone(obj: unknown): unknown;
    /** An alphanumeric random string. */
    randomChars(length: number): string;
    /** An inclusive random integer. */
    randomInteger(min: number, max: number): number;
    /** Epoch milliseconds. */
    getTime(): number;
    /** camelCase / PascalCase / kebab-case. */
    camelCase(str: string): string;
    /** Validate an input string by category (email, username, ipv4, ...). */
    validateInput(input: string, type: string): boolean;
}
