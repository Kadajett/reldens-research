/**
 * Environment configuration.
 *
 * 85 RELDENS_* variables: every one read by reldens or one of its @reldens/*
 * siblings, plus the ones the installer writes into .env. The generated provenance
 * table records which package reads each variable and whether it appears in the
 * install template.
 *
 * Reldens itself never validates any of these - a typo'd value is silently coerced
 * or ignored. `ReldensEnvSchema.parse(process.env)` is the check the platform does
 * not do.
 *
 * Booleans in Reldens env are the strings '1'/'0', compared with `'1' === value` or
 * `1 === Number(value)`. `envFlag` models exactly that, defaulting the same way the
 * read site does.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';
import { withSource } from './provenance';
import { RELDENS_ENV_VARS, RELDENS_ENV_PROVENANCE, type ReldensEnvVar } from './generated/env';

export { RELDENS_ENV_VARS, RELDENS_ENV_PROVENANCE };
export type { ReldensEnvVar };

/** '1' or '0', the way every Reldens flag is spelled. */
export const envFlag = () => z.enum(['1', '0']);
const port = () => z.coerce.number().int().min(1).max(65535);

export const StorageDriverSchema = withSource(
    z.enum(['objection-js', 'mikro-orm', 'prisma']),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'bin/commander.js',
            line: 133,
            note: "process.env.RELDENS_STORAGE_DRIVER || 'objection-js'"
        }],
        describe: 'The three storage drivers @reldens/storage ships. CLI default is objection-js; '
            +'the installer\'s default selection is prisma.'
    }
);

/**
 * The subset with game-breaking consequences when wrong, fully typed. The rest of
 * the 85 pass through as optional strings via the catchall, so parsing process.env
 * never fails on a variable this schema has no opinion about.
 */
export const ReldensEnvSchema = withSource(
    loose({
        RELDENS_APP_HOST: z.string().optional(),
        RELDENS_APP_PORT: port().optional(),
        RELDENS_PUBLIC_URL: z.string().optional(),
        RELDENS_LOG_LEVEL: z.coerce.number().int().min(0).max(8).optional(),

        RELDENS_STORAGE_DRIVER: StorageDriverSchema.optional(),
        RELDENS_DB_CLIENT: z.string().optional(),
        RELDENS_DB_HOST: z.string().optional(),
        RELDENS_DB_PORT: port().optional(),
        RELDENS_DB_NAME: z.string().optional(),
        RELDENS_DB_USER: z.string().optional(),
        RELDENS_DB_PASSWORD: z.string().optional(),
        RELDENS_DB_URL: z.string().optional(),

        RELDENS_HOT_PLUG: envFlag().optional(),
        RELDENS_ALLOW_RUN_BUNDLER: envFlag().optional(),
        RELDENS_ALLOW_BUILD_CLIENT: envFlag().optional(),
        RELDENS_ALLOW_BUILD_CSS: envFlag().optional(),
        RELDENS_FORCE_RESET_DIST_ON_BUNDLE: envFlag().optional(),
        RELDENS_FORCE_COPY_ASSETS_ON_BUNDLE: envFlag().optional(),

        RELDENS_EXPRESS_SERVE_HOME: envFlag().optional(),
        RELDENS_EXPRESS_SERVE_STATICS: envFlag().optional(),
        RELDENS_EXPRESS_USE_HTTPS: envFlag().optional(),

        RELDENS_MONITOR: envFlag().optional(),
        RELDENS_MONITOR_AUTH: envFlag().optional(),

        RELDENS_MAILER_ENABLE: envFlag().optional(),
        RELDENS_FIREBASE_ENABLE: envFlag().optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/server/manager.js', line: 0, note: 'fetchConfigServerFromEnvironmentVariables()'},
            {file: 'lib/game/server/install-templates/.env.dist', line: 1, note: 'the installer template'}
        ],
        describe: 'Validation for process.env that Reldens itself never performs. '
            +'Unlisted RELDENS_* variables pass through untyped; see RELDENS_ENV_PROVENANCE for all 85.'
    }
);

export type ReldensEnv = z.infer<typeof ReldensEnvSchema>;

/** True when this variable is known to reldens or its siblings. */
export function isKnownEnvVar(name: string): name is ReldensEnvVar {
    return Object.hasOwn(RELDENS_ENV_PROVENANCE, name);
}
