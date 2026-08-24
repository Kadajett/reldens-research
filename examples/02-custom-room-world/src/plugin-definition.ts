/**
 * This plugin, declared as data and validated against the extracted platform rules.
 *
 * The definition below is what makes example 02's sharpest edge safe: registering a
 * room class into `server/customClasses/roomsClass` without hooking
 * `reldens.beforeInitializeManagers` compiles fine, boots fine, and then every room
 * whose row names the class is skipped with one log line. The schema rejects that
 * combination at startup, citing lib/rooms/server/manager.js:137.
 */
import { validateDemoPlugin } from '@reldens-tutorials/schemas';
import { TutorialRoom } from './rooms/tutorial-room';
import { TUTORIAL_ROOM_CLASS_PATH } from './plugin';

export const pluginDefinition = validateDemoPlugin({
    name: 'custom-room-world-demo',
    kind: 'custom-server',
    summary: 'Custom room scenes, world hooks and server-authoritative room logic.',
    listensTo: [
        {event: 'reldens.beforeInitializeManagers', purpose: 'register the room class'},
        {event: 'reldens.createRoomAfter', purpose: 'world hooks without subclassing'},
        {event: 'reldens.joinedRoom', purpose: 'per-join world logic'}
    ],
    registers: [
        {
            bucket: 'server/customClasses/roomsClass',
            key: TUTORIAL_ROOM_CLASS_PATH,
            classRef: TutorialRoom,
            describedAs: 'RoomScene subclass; set rooms.roomClassPath to this key in the admin panel'
        }
    ]
});
