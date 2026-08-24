/**
 * Where the reldens package actually lives.
 *
 * ThemeManager defaults `reldensModulePath` to `<projectRoot>/node_modules/reldens`.
 * In this monorepo npm hoists reldens to the repo root, so that default points at
 * a symlink (created by scripts/link-reldens.mjs) rather than the real folder.
 * Resolving it through Node keeps the server working whether this example is run
 * from the workspace or after being split out into a standalone repo.
 */
import { dirname } from 'node:path';

export function resolveReldensModulePath(): string {
    return dirname(require.resolve('reldens/package.json'));
}
