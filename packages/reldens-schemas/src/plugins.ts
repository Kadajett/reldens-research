/**
 * Plugins.
 *
 * "Plugin" means four different things in Reldens, with four different setup
 * signatures. Confusing them is the most common way a plugin silently receives
 * `undefined` for something it expected. All four call sites, verified:
 *
 *   | kind                  | setup receives                                              | call site                          |
 *   |-----------------------|-------------------------------------------------------------|------------------------------------|
 *   | custom server plugin  | {events}                                                    | lib/game/server/manager.js:121     |
 *   | custom client plugin  | {gameManager, events}                                       | lib/game/client/game-manager.js:120|
 *   | server feature plugin | {events, dataServer, config, featuresManager, themeManager} | lib/features/server/manager.js:82  |
 *   | client feature plugin | {gameManager, events}                                       | lib/features/client/manager.js:58  |
 *
 * The custom server plugin - the one a game project passes as `customPlugin` - gets
 * ONLY `events`. Not the config, not the data server. Everything else has to be
 * reached through an event payload, which is why registration happens on
 * `reldens.beforeInitializeManagers` rather than in `setup` itself.
 */
import { z } from 'zod';
import { zAny, loose } from './zod-floors';
import { withSource } from './provenance';

/** The shared events manager. Structural, because the real class is untyped CommonJS. */
export const EventsManagerSchema = withSource(
    z.custom<{
        on: (name: string, callback: (...args: any[]) => any, removeKey?: string, masterKey?: string) => any;
        emit: (name: string, ...args: any[]) => Promise<any>;
        emitSync: (name: string, ...args: any[]) => any;
    }>(
        (value) => Boolean(value)
            && 'function' === typeof (value as any).on
            && 'function' === typeof (value as any).emit,
        {message: 'Expected an EventsManager with on() and emit()'}
    ),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/game/server/manager.js',
            line: 87,
            note: 'this.events = eventsManager || EventsManagerSingleton'
        }],
        describe: '@reldens/utils EventsManagerSingleton. The server and the client share one instance.'
    }
);

export const CustomServerPluginSetupPropsSchema = withSource(
    z.strictObject({events: EventsManagerSchema}),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/game/server/manager.js',
            line: 121,
            note: 'this.customPlugin.setup({events: this.events})'
        }],
        describe: 'Everything a custom server plugin is given. Note the strict object: this really is '
            +'the whole payload - no config, no dataServer, no serverManager.'
    }
);

export const CustomClientPluginSetupPropsSchema = withSource(
    z.strictObject({
        gameManager: z.custom<Record<string, any>>((value) => Boolean(value) && 'object' === typeof value),
        events: EventsManagerSchema
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/game/client/game-manager.js',
            line: 120,
            note: 'this.plugins[customPluginKey].setup({gameManager: this, events: this.events})'
        }],
        describe: 'Everything a custom client plugin is given. `gameManager.config.client.customClasses` '
            +'is the client customClasses tree.'
    }
);

export const ServerFeaturePluginSetupPropsSchema = withSource(
    loose({
        events: EventsManagerSchema,
        dataServer: z.union([z.custom<Record<string, any>>((v) => Boolean(v) && 'object' === typeof v), z.literal(false)]),
        config: z.custom<Record<string, any>>((value) => Boolean(value) && 'object' === typeof value),
        featuresManager: z.union([z.custom<Record<string, any>>((v) => Boolean(v) && 'object' === typeof v), z.literal(false)]),
        themeManager: z.union([z.custom<Record<string, any>>((v) => Boolean(v) && 'object' === typeof v), z.literal(false)]),
        requiredProperties: z.array(z.string()).optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/features/server/setup-server-properties.js', line: 28, note: 'events'},
            {file: 'lib/features/server/setup-server-properties.js', line: 30, note: 'dataServer, defaults to false'},
            {file: 'lib/features/server/setup-server-properties.js', line: 32, note: 'config, defaults to {}'},
            {file: 'lib/features/server/setup-server-properties.js', line: 34, note: 'featuresManager, defaults to false'},
            {file: 'lib/features/server/setup-server-properties.js', line: 36, note: 'themeManager, defaults to false'},
            {file: 'lib/features/server/manager.js', line: 82, note: 'await featureEntity.package.setup(setupServerProperties)'}
        ],
        describe: 'What one of the 29 built-in server feature plugins receives. The falsy defaults are real: '
            +'each of these is `false`, not undefined, when unavailable.'
    }
);

export const ClientFeaturePluginSetupPropsSchema = withSource(
    z.strictObject({
        gameManager: z.custom<Record<string, any>>((value) => Boolean(value) && 'object' === typeof value),
        events: EventsManagerSchema
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/features/client/manager.js',
            line: 58,
            note: 'setup({gameManager: this.gameManager, events: this.events})'
        }]
    }
);

export const PluginKindSchema = z.enum([
    'custom-server',
    'custom-client',
    'server-feature',
    'client-feature'
]);

export type PluginKind = z.infer<typeof PluginKindSchema>;

/** The setup props schema for a given plugin kind. */
export const SETUP_PROPS_BY_KIND = {
    'custom-server': CustomServerPluginSetupPropsSchema,
    'custom-client': CustomClientPluginSetupPropsSchema,
    'server-feature': ServerFeaturePluginSetupPropsSchema,
    'client-feature': ClientFeaturePluginSetupPropsSchema
} as const satisfies Record<PluginKind, z.ZodType>;

/**
 * The PluginInterface contract itself: a class whose instances have `setup`.
 *
 * The base class's own `setup` logs an error and returns false, so a subclass that
 * does not override it is a silent no-op with one log line.
 */
export const PluginInstanceSchema = withSource(
    z.custom<{setup: (props: any) => unknown}>(
        (value) => Boolean(value) && 'function' === typeof (value as any).setup,
        {message: 'Expected a plugin instance with a setup() method'}
    ),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/features/plugin-interface.js', line: 24, note: 'async setup(props)'},
            {file: 'lib/features/plugin-interface.js', line: 26, note: "Logger.error('Setup plugin not implemented.')"},
            {file: 'lib/features/server/manager.js', line: 81, note: "if('function' === typeof featureEntity.package.setup)"}
        ],
        describe: 'PluginInterface subclasses. Reldens duck-types this: it checks for a setup function, '
            +'it does not check instanceof, so extending PluginInterface is a convention rather than '
            +'a requirement.'
    }
);
