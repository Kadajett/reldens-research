/**
 * customClasses: replacing a Reldens implementation without forking it.
 *
 * The object passed as `customClasses` to `new ServerManager()` is merged into the
 * configuration tree under `server/customClasses/*`, and Reldens looks classes up out
 * of it by path at runtime. The client side has its own tree at
 * `client/customClasses/*`, populated from a client plugin.
 *
 * The eleven buckets below are every path the platform actually reads - found by
 * grepping every `customClasses` lookup in lib/, not from documentation. The official
 * docs mention two of them.
 *
 * Two shapes of bucket:
 *   - keyed:   the bucket is a prefix and the next segment is a runtime value from the
 *              database (an object's class key, a room's roomClassPath). Any string.
 *   - fixed:   the bucket path is complete and holds a map or a single class.
 */
import { z } from 'zod';
import { withSource } from './provenance';
import { CUSTOM_CLASS_BUCKET_PROVENANCE, CUSTOM_CLASS_BUCKETS } from './generated/custom-classes';

export { CUSTOM_CLASS_BUCKETS, CUSTOM_CLASS_BUCKET_PROVENANCE };

/** Any class. Reldens calls `new Klass(...)` with bucket-specific arguments. */
export const ClassRefSchema = z.custom<new (...args: any[]) => any>(
    (value) => 'function' === typeof value,
    {message: 'Expected a class or constructor function'}
);

/** A bucket keyed by a value that comes from the database. */
const keyedBucket = z.record(z.string().min(1), ClassRefSchema);

export const CustomClassBucketSchema = z.enum(CUSTOM_CLASS_BUCKETS);

export const ServerCustomClassesSchema = withSource(
    z.looseObject({
        objects: withSource(keyedBucket, {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/objects/server/manager.js',
                line: 101,
                note: "config.getWithoutLogs('server/customClasses/objects/'+objectData.object_class_key, false)"
            }],
            describe: 'Server-side object classes, keyed by the `object_class_key` column on the objects row. '
                +'A key with no registered class falls back to the built-in type for that object.'
        }).optional(),

        roomsClass: withSource(keyedBucket, {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/rooms/server/manager.js',
                line: 137,
                note: "config.get('server/customClasses/roomsClass/'+roomModel.roomClassPath)"
            }, {
                file: 'lib/rooms/server/manager.js',
                line: 139,
                note: 'Logger.error + continue when the class is missing'
            }],
            describe: 'Room classes, keyed by the `roomClassPath` column on the rooms row. '
                +'A room naming a class that is not registered here is SKIPPED, not defaulted: '
                +'it logs "Custom room class not found" and never loads.'
        }).optional(),

        sceneDataProcessor: withSource(ClassRefSchema, {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/rooms/server/scene-data-filter.js',
                line: 71,
                note: "config.getWithoutLogs('server/customClasses/sceneDataProcessor', false)"
            }],
            describe: 'A single class that post-processes the scene data sent to clients. '
                +'Not a map - one class for the whole game.'
        }).optional(),

        inventory: z.looseObject({
            items: withSource(keyedBucket, {
                confidence: 'EXTRACTED',
                sources: [
                    {file: 'lib/inventory/server/subscribers/server-subscriber.js', line: 38},
                    {file: 'lib/inventory/server/subscribers/player-subscriber.js', line: 39},
                    {file: 'lib/objects/server/object/type/trader-object.js', line: 43}
                ],
                describe: 'Item classes, keyed by item key. Read in three places, including the trader object.'
            }).optional(),
            groups: withSource(keyedBucket, {
                confidence: 'EXTRACTED',
                sources: [
                    {file: 'lib/inventory/server/subscribers/server-subscriber.js', line: 42},
                    {file: 'lib/inventory/server/group-hot-plug-callbacks.js', line: 60}
                ],
                describe: 'Item group classes, keyed by group key.'
            }).optional()
        }).optional(),

        skills: z.looseObject({
            skillsList: withSource(keyedBucket, {
                confidence: 'EXTRACTED',
                sources: [{file: 'lib/actions/server/data-loader.js', line: 62}],
                describe: 'Skill classes, keyed by skill key.'
            }).optional(),
            classPath: withSource(keyedBucket, {
                confidence: 'EXTRACTED',
                sources: [{file: 'lib/actions/server/data-loader.js', line: 89}],
                describe: 'ClassPath classes, keyed by class path key.'
            }).optional()
        }).optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/game/server/manager.js',
            line: 130,
            note: 'new ConfigManager({events, customClasses: (config.customClasses || {})})'
        }],
        describe: 'The server half of the customClasses tree, mounted at server/customClasses/*.'
    }
);

export const ClientCustomClassesSchema = withSource(
    z.looseObject({
        objects: withSource(z.record(z.string().min(1), ClassRefSchema), {
            confidence: 'EXTRACTED',
            sources: [{
                file: 'lib/objects/client/plugin.js',
                line: 541,
                note: "'client/customClasses/objects/'+animProps.key"
            }],
            describe: 'Client-side object render classes, keyed by the object\'s client key '
                +'(also the name of its sprite folder under assets/).'
        }).optional(),

        inventory: z.looseObject({
            items: withSource(z.record(z.string().min(1), ClassRefSchema), {
                confidence: 'EXTRACTED',
                sources: [{file: 'lib/inventory/client/plugin.js', line: 230}]
            }).optional(),
            groups: withSource(z.record(z.string().min(1), ClassRefSchema), {
                confidence: 'EXTRACTED',
                sources: [{file: 'lib/inventory/client/plugin.js', line: 234}]
            }).optional()
        }).optional(),

        message: z.looseObject({
            listeners: withSource(z.record(z.string().min(1), ClassRefSchema), {
                confidence: 'EXTRACTED',
                sources: [{
                    file: 'lib/game/client/room-events.js',
                    line: 383,
                    note: "config.get('client/customClasses/message/listeners', {})"
                }],
                describe: 'Extra room-message listener classes. This is the supported way to handle '
                    +'custom server broadcasts on the client without patching RoomEvents.'
            }).optional()
        }).optional()
    }),
    {
        confidence: 'EXTRACTED',
        sources: [{
            file: 'lib/game/client/game-manager.js',
            line: 120,
            note: 'plugins[key].setup({gameManager, events}) - plugins write into gameManager.config.client.customClasses'
        }],
        describe: 'The client half of the customClasses tree, mounted at client/customClasses/*. '
            +'Populated from a client plugin, usually on reldens.beforeJoinGame.'
    }
);

/** What you pass as `customClasses` to `new ServerManager()`. */
export const CustomClassesSchema = ServerCustomClassesSchema;

export type ServerCustomClasses = z.infer<typeof ServerCustomClassesSchema>;
export type ClientCustomClasses = z.infer<typeof ClientCustomClassesSchema>;
