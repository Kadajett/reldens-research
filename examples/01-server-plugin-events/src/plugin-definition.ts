/**
 * This plugin, declared as data.
 *
 * The definition is validated by @reldens-tutorials/schemas before the server
 * boots. The schema rules are extracted from the Reldens source (each carries its
 * file:line), so the mistakes Reldens swallows silently - a typo'd event name, a
 * class registered after its lookup already ran - fail here, loudly, instead.
 *
 * Try it: misspell an event below and run `npm run dev`.
 */
import { validateDemoPlugin } from '@reldens-tutorials/schemas';

export const pluginDefinition = validateDemoPlugin({
    name: 'server-plugin-events-demo',
    kind: 'custom-server',
    summary: 'Boots a Reldens server from TypeScript and hooks its lifecycle events.',
    listensTo: [
        {
            event: 'reldens.beforeInitializeManagers',
            purpose: 'register custom classes before RoomsManager reads them'
        },
        {
            event: 'reldens.serverConfigFeaturesReady',
            purpose: 'run setup that needs the game data loaded'
        }
        // TODO: add the events you hook as you write the tutorial. Unknown names
        //  fail validation; set allowCustomEvents: true for game-defined ones.
    ],
    registers: [
        // TODO: declare each customClasses registration here as you add it in
        //  plugin.ts, e.g.:
        //  {bucket: 'server/customClasses/objects', key: 'npc_2', classRef: MyNpc, describedAs: 'healer'}
    ]
});
