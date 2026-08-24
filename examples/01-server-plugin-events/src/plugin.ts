/**
 * The server plugin.
 *
 * Reldens instantiates this class once (`new ServerPlugin()`) and immediately
 * calls `setup({events})`. That is the whole contract: from `setup` you attach
 * listeners to the shared events manager, and everything else the platform does
 * happens through those listeners.
 *
 * Listeners registered here run for every room, every player and every request,
 * so keep them cheap and keep them pure where you can.
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { BeforeInitializeManagersEvent, ReldensEventsManager, ServerConfigFeaturesReadyEvent } from 'reldens-events';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        // Fires once the features table has been loaded and every feature module is
        // registered. This is the earliest point at which the game's own managers exist.
        this.events.on('reldens.serverConfigFeaturesReady', (event: ServerConfigFeaturesReadyEvent) => {
            this.onFeaturesReady(event);
        });

        // Fires before the room/login/users managers are constructed. This is where
        // custom classes have to be registered: after this point the config is read.
        this.events.on('reldens.beforeInitializeManagers', (event: BeforeInitializeManagersEvent) => {
            this.registerCustomClasses(event);
        });

        // TODO: pick the events you actually need. `packages/reldens-types/events.d.ts`
        //  lists every 'reldens.*' name in the platform, and docs/02-events.md groups
        //  the useful ones by what they let you do.

        return true;
    }

    /**
     * TODO: whatever needs the game's data before any player can connect:
     *  loading your own tables, warming a cache, validating configuration.
     *
     * `event.configProcessor` is the loaded ConfigManager (same instance as
     * serverManager.configManager), so database config paths are readable here:
     *  event.configProcessor.get('client/ui/chat')
     */
    onFeaturesReady(_event: ServerConfigFeaturesReadyEvent): void {
    }

    /**
     * Custom classes are how you replace a built-in implementation without forking.
     *
     * `objects` is keyed by the object's class key (the `object_class_key` column on
     * the objects row, e.g. 'npc_2'); `roomsClass` is keyed by the `roomClassPath`
     * column on the rooms row. An object whose key is not registered falls back to
     * the platform default; a room that names a missing class is skipped with an
     * error. The full bucket list is typed on ServerCustomClasses in
     * packages/reldens-types, with each lookup site cited.
     *
     * The event payload is `{serverManager, continueProcess}` and Reldens reads
     * `continueProcess` back after the emit: setting it to false here aborts manager
     * initialization entirely (lib/game/server/manager.js:393-397).
     */
    registerCustomClasses(event: BeforeInitializeManagersEvent): void {
        const customClasses = event.serverManager.configManager.configList.server.customClasses;
        customClasses.objects ??= {};
        customClasses.roomsClass ??= {};

        // TODO: register your classes, e.g.
        //  customClasses.objects['npc_2'] = MyHealer;
        //  customClasses.roomsClass['MyRoom'] = MyRoom;
    }

}
