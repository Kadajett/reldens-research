/**
 * The client plugin.
 *
 * Mirror image of the server plugin: GameManager builds one instance and calls
 * `setup({events, gameManager})`. Everything the client can customise hangs off
 * events emitted between login and the first rendered frame.
 *
 * Custom classes must be registered on 'reldens.beforeJoinGame'. The scene
 * preloader reads `config.client.customClasses.objects` when it creates the
 * objects for a room, and that happens right after the join.
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { ReldensEventsManager } from 'reldens-events';
import { TutorialNpc } from './objects/tutorial-npc';

export class ClientPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        this.events.on('reldens.beforeJoinGame', (eventProps: any) => {
            this.registerCustomClasses(eventProps);
        });

        // The Phaser scene for a room has been created. `props.sceneDynamic` is the
        // scene; this is the hook for adding your own sprites, layers or cameras.
        this.events.on('reldens.afterSceneDynamicCreate', (_eventProps: any) => {
            // TODO
        });

        // The engine is up and the first room is joined. Safe place to touch the DOM
        // UI that Reldens renders around the canvas.
        this.events.on('reldens.afterInitEngineAndStartGame', (_eventProps: any) => {
            // TODO
        });

        return true;
    }

    registerCustomClasses(props: any): void {
        const customClasses = props.gameManager.config.client.customClasses;
        customClasses.objects ??= {};

        // TODO: replace with the client_key of an object in your database.
        customClasses.objects['people_town_1'] = TutorialNpc;
    }

}
