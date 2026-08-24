/**
 * Plugin definitions for the tutorial demos.
 *
 * Each tutorial example declares what it plugs into Reldens as data - which events it
 * listens to, which customClasses buckets it fills, which env vars it needs - and
 * these schemas validate that declaration BEFORE the server boots.
 *
 * The point: Reldens fails silently on almost every registration mistake. A typo'd
 * event name is a listener that never fires; an unknown customClasses bucket is
 * ignored; a room class registered after `reldens.beforeInitializeManagers` is
 * invisible. Validating the definition up front turns each of those silences into an
 * error with the file:line of the rule it violated.
 *
 * The refinement rules encode real platform behaviour, each with its source:
 *
 *   1. roomsClass entries require registration on reldens.beforeInitializeManagers
 *      (lib/rooms/server/manager.js:137 reads the bucket right after that event fires).
 *   2. Client object classes require registration on reldens.beforeJoinGame
 *      (lib/objects/client/plugin.js:541 reads them at preload).
 *   3. A listener on an emitSync event is flagged when marked `slow`
 *      (42 events are emitted inside a tick; see RELDENS_EVENT_PROVENANCE).
 *   4. Unknown event names fail unless `allowCustomEvents` is set.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { isKnownEvent, isSyncEvent } from './events';
import { RELDENS_EVENT_NAMES } from './generated/events';
import { CustomClassBucketSchema, ClassRefSchema } from './custom-classes';
import { RELDENS_ENV_VARS } from './generated/env';
import { PluginKindSchema } from './plugins';

export const EventListenerDefSchema = z.strictObject({
    /** A known reldens.* name, or any string when allowCustomEvents is set on the plugin. */
    event: z.string().min(1),
    /** What the listener does - used for docs generation. */
    purpose: z.string().min(1),
    /**
     * Set when the handler does I/O or heavy work. Combined with the event's
     * provenance to reject slow handlers on emitSync events.
     */
    slow: z.boolean().default(false),
    /** Optional removeKey passed to events.on for later offByKey. */
    removeKey: z.string().optional()
});

export const CustomClassRegistrationSchema = z.strictObject({
    /** One of the eleven buckets Reldens actually reads. */
    bucket: CustomClassBucketSchema,
    /**
     * The runtime key inside the bucket: an object_class_key, a roomClassPath, an
     * item key. Omit for single-class buckets (sceneDataProcessor).
     */
    key: z.string().min(1).optional(),
    /** The class being registered. */
    classRef: ClassRefSchema,
    /** Where the class comes from, for docs. */
    describedAs: z.string().min(1)
});

export const DemoPluginDefinitionSchema = withSource(
    z.strictObject({
        name: z.string().regex(/^[a-z0-9-]+$/, 'kebab-case name'),
        kind: PluginKindSchema,
        summary: z.string().min(1),

        listensTo: z.array(EventListenerDefSchema).default([]),
        registers: z.array(CustomClassRegistrationSchema).default([]),

        /** RELDENS_* variables the demo needs set. Must be variables the platform knows. */
        requiresEnv: z.array(z.enum(RELDENS_ENV_VARS)).default([]),

        /** Permit event names outside the extracted 231. */
        allowCustomEvents: z.boolean().default(false)
    })
        .check((ctx) => {
            const def = ctx.value;

            // Rule 4: unknown event names are typos until declared otherwise.
            for(const [index, listener] of def.listensTo.entries()){
                if(!isKnownEvent(listener.event) && !def.allowCustomEvents){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['listensTo', index, 'event'],
                        message: `"${listener.event}" is not one of the ${RELDENS_EVENT_NAMES.length} extracted reldens.* events. `
                            +'A typo here is a listener that never fires and never errors. '
                            +'Set allowCustomEvents: true if this is a game-defined event.',
                        input: listener.event
                    });
                }

                // Rule 3: slow handlers on sync events stall the tick.
                if(listener.slow && isSyncEvent(listener.event)){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['listensTo', index, 'slow'],
                        message: `"${listener.event}" is emitted with emitSync - the listener runs inside `
                            +'the caller\'s tick and is not awaited. A slow handler here slows the room '
                            +'for every player in it. Move the work to an async event or defer it.',
                        input: listener.event
                    });
                }
            }

            const listened = new Set(def.listensTo.map((l) => l.event));
            for(const [index, reg] of def.registers.entries()){
                const isServerSide = 'custom-server' === def.kind || 'server-feature' === def.kind;

                // Buckets are side-specific.
                const bucketSide = reg.bucket.startsWith('server/') ? 'server' : 'client';
                if(isServerSide && 'client' === bucketSide){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index, 'bucket'],
                        message: `A ${def.kind} plugin cannot fill ${reg.bucket}: that tree lives on `
                            +'gameManager.config.client and is only reachable from a client plugin.',
                        input: reg.bucket
                    });
                }
                if(!isServerSide && 'server' === bucketSide){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index, 'bucket'],
                        message: `A ${def.kind} plugin cannot fill ${reg.bucket}: that tree is read on the `
                            +'server and a client plugin never touches it.',
                        input: reg.bucket
                    });
                }

                // Rule 1: server registrations need the beforeInitializeManagers hook.
                if(isServerSide && 'server' === bucketSide && !listened.has('reldens.beforeInitializeManagers')){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index],
                        message: `Registering into ${reg.bucket} requires a listener on `
                            +'reldens.beforeInitializeManagers: RoomsManager and the feature loaders read '
                            +'server/customClasses/* immediately after that event '
                            +'(lib/rooms/server/manager.js:137). Registered later, the class is invisible '
                            +'and a room naming it is skipped with "Custom room class not found".',
                        input: reg.bucket
                    });
                }

                // Rule 2: client registrations need the beforeJoinGame hook.
                if(!isServerSide && 'client' === bucketSide && !listened.has('reldens.beforeJoinGame')){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index],
                        message: `Registering into ${reg.bucket} requires a listener on `
                            +'reldens.beforeJoinGame: the scene preloader reads client/customClasses/* '
                            +'right after the join (lib/objects/client/plugin.js:541).',
                        input: reg.bucket
                    });
                }

                // Keyed buckets need a key; the single-class bucket must not have one.
                const singleClassBuckets = new Set(['server/customClasses/sceneDataProcessor']);
                if(singleClassBuckets.has(reg.bucket) && undefined !== reg.key){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index, 'key'],
                        message: reg.bucket+' holds a single class, not a map - remove the key '
                            +'(lib/rooms/server/scene-data-filter.js:71).',
                        input: reg.key
                    });
                }
                if(!singleClassBuckets.has(reg.bucket) && undefined === reg.key){
                    ctx.issues.push({
                        code: 'custom',
                        path: ['registers', index, 'key'],
                        message: reg.bucket+' is keyed by a database value (object_class_key, roomClassPath, '
                            +'item key) - a registration without a key can never be looked up.',
                        input: undefined
                    });
                }
            }
        }),
    {
        confidence: 'EXTRACTED',
        sources: [
            {file: 'lib/rooms/server/manager.js', line: 137, note: 'rule 1 - roomsClass lookup timing'},
            {file: 'lib/objects/client/plugin.js', line: 541, note: 'rule 2 - client objects lookup timing'},
            {file: 'lib/game/server/manager.js', line: 121, note: 'plugin setup payloads'},
            {file: 'lib/features/plugin-interface.js', line: 24, note: 'the setup() contract'}
        ],
        describe: 'A tutorial demo plugin, declared as data and validated against the extracted platform '
            +'rules before the server boots.'
    }
);

export type DemoPluginDefinition = z.infer<typeof DemoPluginDefinitionSchema>;
export type EventListenerDef = z.infer<typeof EventListenerDefSchema>;
export type CustomClassRegistration = z.infer<typeof CustomClassRegistrationSchema>;

/** Parse-or-throw with the plugin name in the error, for use at demo boot. */
export function validateDemoPlugin(definition: unknown): DemoPluginDefinition {
    const result = DemoPluginDefinitionSchema.safeParse(definition);
    if(!result.success){
        const name = ('object' === typeof definition && null !== definition && 'name' in definition)
            ? String((definition as {name: unknown}).name)
            : '<unnamed>';
        throw new Error(
            'Invalid demo plugin definition "'+name+'":\n'
            +result.error.issues.map((issue) => '  - '+issue.path.join('.')+': '+issue.message).join('\n')
        );
    }
    return result.data;
}
