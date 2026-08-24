/**
 * The client plugin, declared as data and validated against the extracted rules.
 *
 * The client-side rule this enforces: client/customClasses/* registrations require a
 * reldens.beforeJoinGame listener, because the scene preloader reads the tree right
 * after the join (lib/objects/client/plugin.js:541).
 */
import { validateDemoPlugin } from '@reldens-tutorials/schemas';
import { TutorialNpc } from './objects/tutorial-npc';

export const pluginDefinition = validateDemoPlugin({
    name: 'client-plugin-phaser-demo',
    kind: 'custom-client',
    summary: 'Custom client plugin, Phaser scene and UI customisation.',
    listensTo: [
        {event: 'reldens.beforeJoinGame', purpose: 'register client render classes'},
        // afterSceneDynamicCreate is emitSync - it fires inside scene creation. The
        // schema rejects this listener if it is marked slow.
        {event: 'reldens.afterSceneDynamicCreate', purpose: 'add sprites and layers to the room scene'},
        {event: 'reldens.afterInitEngineAndStartGame', purpose: 'touch the DOM UI around the canvas'}
    ],
    registers: [
        {
            bucket: 'client/customClasses/objects',
            key: 'people_town_1',
            classRef: TutorialNpc,
            describedAs: 'AnimationEngine subclass - key is the objects row client_key / sprite folder name'
        }
    ]
});
