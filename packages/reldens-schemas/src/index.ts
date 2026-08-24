/**
 * @reldens-tutorials/schemas
 *
 * Zod schemas for the Reldens public API, generated from and verified against the
 * installed package.
 *
 * How to read this package:
 *   - src/generated/*  data extracted from reldens@4.0.0-beta.39.x by the audit
 *                      pipeline in research/. Never edited by hand.
 *   - src/*            the schemas, each field annotated with the file:line in the
 *                      reldens source it was read from and whether the shape is
 *                      EXTRACTED (literal in the source) or INFERRED (derived from
 *                      usage).
 *   - test/            re-reads the installed package and fails when anything
 *                      drifted, so "the schema matches reldens" is a test result,
 *                      not a claim.
 */

export * from './provenance';
export * from './server-manager';
export * from './custom-classes';
export * from './plugins';
export * from './events';
export * from './protocol';
export * from './env';
export * from './room-state';
export * from './demo-plugins';
export * from './event-payload-schemas';
export * from './server-message-schemas';

export { RELDENS_CONSTANTS } from './generated/constants';
export { RELDENS_CONFIG_PATHS, RELDENS_CONFIG_PATH_SITES, type ReldensConfigPath } from './generated/config-paths';
export { RELDENS_EXPORTS, RELDENS_DEMONSTRATED_IMPORT_PATHS, RELDENS_SUBCLASS_COUNTS, type ReldensExport } from './generated/exports';
export { GENERATION_META } from './generated/meta';
