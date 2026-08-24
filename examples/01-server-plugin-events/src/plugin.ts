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
import type { ReldensEventsManager } from 'reldens-events';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        // Fires once the features table has been loaded and every feature module is
        // registered. This is the earliest point at which the game's own managers exist.
        this.events.on('reldens.serverConfigFeaturesReady', (eventProps: any) => {
            this.onFeaturesReady(eventProps);
        });

        // Fires before the room/login/users managers are constructed. This is where
        // custom classes have to be registered: after this point the config is read.
        this.events.on('reldens.beforeInitializeManagers', (eventProps: any) => {
            this.registerCustomClasses(eventProps);
        });

        // TODO: pick the events you actually need. `packages/reldens-types/events.d.ts`
        //  lists every 'reldens.*' name in the platform, and docs/02-events.md groups
        //  the useful ones by what they let you do.

        return true;
    }

    /**
     * TODO: whatever needs the game's data before any player can connect —
     *  loading your own tables, warming a cache, validating configuration.
     */
    onFeaturesReady(_props: any): void {
    }

    /**
     * Custom classes are how you replace a built-in implementation without forking.
     *
     * `objects` is keyed by the object's class key (the `client_key` / class key on the
     * objects row, e.g. 'npc_2'); `roomsClass` is keyed by the `roomClassPath` column on
     * the rooms row. A room or object whose key is not registered falls back to the
     * platform default, and a room that names a missing class is skipped with an error.
     */
    registerCustomClasses(props: any): void {
        const customClasses = props.serverManager.configManager.configList.server.customClasses;
        customClasses.objects ??= {};
        customClasses.roomsClass ??= {};

        // TODO: register your classes, e.g.
        //  customClasses.objects['npc_2'] = MyHealer;
        //  customClasses.roomsClass['MyRoom'] = MyRoom;
    }

}
