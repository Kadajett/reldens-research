/**
 * The server plugin.
 *
 * This example changes nothing about the server: the world stays exactly as
 * Reldens ships it, authoritative over movement, collisions, combat and state.
 * All that changes is who renders it. That is the AgentArena pattern - extend
 * without forking, and let anything that speaks the room protocol be a client.
 *
 * Anything the Three.js client needs that the stock protocol does not carry
 * (extra state, a custom broadcast) is added from here.
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { ReldensEventsManager } from 'reldens-events';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        // TODO: broadcast anything a 3D renderer needs that a 2D one does not -
        //  a height/elevation per body, a model key per object, a camera hint.

        return true;
    }

}
