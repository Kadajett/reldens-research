/**
 * @reldens-community/items-types
 *
 * Zod schemas + inferred TypeScript types for @reldens/items-system, the Reldens items,
 * inventory and trading engine. Hand-written from the package source and drift-tested
 * against the installed version (see test/drift.test.ts). Import a schema to validate a
 * config/operation/message object at runtime, or the inferred type for static typing.
 *
 * Verified against @reldens/items-system 0.49.0.
 */
export * from './zod-floors';
export * from './constants';
export * from './events';
export * from './item';
export * from './inventory';
export * from './group';
export * from './exchange';
export * from './manager';
export * from './messages';
