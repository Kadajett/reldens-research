/**
 * `new ServerManager(config)`.
 *
 * The config object is not validated by Reldens and is read in two places: the
 * ServerManager constructor itself, and the ThemeManager it builds from the same
 * object. Between them they read exactly five keys plus `customPlugin` and
 * `customClasses`; everything else on the object is ignored, which is why the schema
 * is loose about extra keys and strict about the ones that matter.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { CustomClassesSchema } from './custom-classes';

/** A class, not an instance. Reldens does `new customPluginClass()` then `.setup({events})`. */
export const PluginConstructorSchema = withSource(
    z.custom<new () => {setup: (props: any) => unknown}>(
        (value) => 'function' === typeof value && 'function' === typeof (value as any)?.prototype?.setup,
        {message: 'Expected a class with a setup() method on its prototype'}
    ),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/server/manager.js', line: 115, note: "sc.get(config, 'customPlugin', false)"},
            {file: 'lib/game/server/manager.js', line: 119, note: 'new customPluginClass()'},
            {file: 'lib/game/server/manager.js', line: 121, note: 'this.customPlugin.setup({events})'}
        ],
        describe: 'Custom server plugin class. Instantiated with no arguments, then setup({events}) is called.'
    }
);

export const ServerManagerConfigSchema = withSource(
    z.looseObject({
        projectRoot: withSource(z.string().min(1), {
            confidence: 'EXTRACTED',
            sources: [
                {file: 'lib/game/server/theme-manager.js', line: 88, note: 'ErrorManager.error when absent'},
                {file: 'lib/game/server/manager.js', line: 131, note: "sc.get(config, 'projectRoot', './')"}
            ],
            describe: 'Absolute path to the project root. Required: ThemeManager throws without it, '
                +'even though ServerManager itself would default it to "./".'
        }),

        projectThemeName: withSource(z.string().min(1).default('default'), {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/game/server/theme-manager.js',
                line: 119,
                note: "sc.get(props, 'projectThemeName', GameConst.STRUCTURE.DEFAULT)"
            }],
            describe: 'Folder name under theme/. Defaults to "default".'
        }).optional(),

        reldensModulePath: withSource(z.string().min(1), {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/game/server/theme-manager.js',
                line: 122,
                note: "sc.get(props, 'reldensModulePath', <projectRoot>/node_modules/reldens)"
            }],
            describe: 'Where the reldens package lives. The default assumes a flat node_modules under '
                +'projectRoot, which is wrong under npm/pnpm/yarn hoisting - pass '
                +"dirname(require.resolve('reldens/package.json')) instead."
        }).optional(),

        jsSourceMaps: withSource(z.boolean().default(false), {
            confidence: 'EXTRACTED',
            sources: [{file: 'lib/game/server/theme-manager.js', line: 102, note: "sc.get(props, 'jsSourceMaps', false)"}],
            describe: 'Emit JS source maps from the Parcel client build.'
        }).optional(),

        cssSourceMaps: withSource(z.boolean().default(false), {
            confidence: 'EXTRACTED',
            sources: [{file: 'lib/game/server/theme-manager.js', line: 104, note: "sc.get(props, 'cssSourceMaps', false)"}],
            describe: 'Emit CSS source maps from the SCSS build.'
        }).optional(),

        customPlugin: PluginConstructorSchema.optional(),

        customClasses: CustomClassesSchema.optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/game/server/manager.js', line: 82, note: 'constructor(config, eventsManager, dataServerDriver)'},
            {file: 'lib/game/server/manager.js', line: 89, note: 'new ThemeManager(config) - same object'}
        ],
        describe: 'Config object for new ServerManager(config). Extra keys are ignored by Reldens, '
            +'so unknown keys pass through rather than failing.'
    }
);

export type ServerManagerConfig = z.infer<typeof ServerManagerConfigSchema>;
