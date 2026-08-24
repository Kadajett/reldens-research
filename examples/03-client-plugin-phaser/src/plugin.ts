/**
 * The server plugin for this example.
 *
 * Example 03 is about the client, so this stays thin. It is here because the
 * client and the server halves of a Reldens customisation almost always come in
 * pairs: an object you render differently on the client usually has behaviour on
 * the server, and both sides are registered the same way.
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { ReldensEventsManager } from 'reldens-events';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        // TODO: the server half of whatever you build on the client.

        return true;
    }

}
