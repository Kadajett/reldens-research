/**
 * Registers the custom room class and the world hooks.
 *
 * The room class MUST be registered on 'reldens.beforeInitializeManagers'.
 * RoomsManager reads `server/customClasses/roomsClass/*` while it defines rooms,
 * which happens immediately after that event; register any later and the room
 * row that names your class is skipped with "Custom room class not found".
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { BeforeInitializeManagersEvent, ReldensEventsManager } from 'reldens-events';
import { TutorialRoom } from './rooms/tutorial-room';
import { registerWorldHooks } from './world/world-hooks';

/**
 * The value of the `roomClassPath` column on the `rooms` row this class should
 * handle. Set the same string in the admin panel (Rooms > your room > Room class
 * path) or the room will keep using the default RoomScene.
 */
export const TUTORIAL_ROOM_CLASS_PATH = 'TutorialRoom';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        this.events.on('reldens.beforeInitializeManagers', (event: BeforeInitializeManagersEvent) => {
            this.registerCustomClasses(event);
        });

        registerWorldHooks(this.events);

        return true;
    }

    registerCustomClasses(event: BeforeInitializeManagersEvent): void {
        const customClasses = event.serverManager.configManager.configList.server.customClasses;
        customClasses.roomsClass ??= {};
        customClasses.objects ??= {};

        customClasses.roomsClass[TUTORIAL_ROOM_CLASS_PATH] = TutorialRoom;
    }

}
