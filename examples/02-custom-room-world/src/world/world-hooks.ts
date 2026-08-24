/**
 * World and physics hooks.
 *
 * Reldens runs an authoritative p2 physics world per room, stepped by a
 * WorldTimer. Movement, collisions and change points (the tiles that move a
 * player to another scene) all resolve there, and the client only ever renders
 * what the server broadcasts.
 *
 * These events are the seams into that loop. Several of them are emitted
 * synchronously inside the tick, so a slow listener slows the whole room down:
 * read state, decide, and return.
 */
import type { ReldensEventsManager } from 'reldens-events';

export function registerWorldHooks(events: ReldensEventsManager): void {

    // A room finished being created, including its world. The room instance is on
    // the event payload, so this is the non-forking alternative to a custom room
    // class when you only want to add behaviour, not replace it.
    events.on('reldens.createRoomAfter', (_props: any) => {
        // TODO
    });

    // A player joined a scene room.
    events.on('reldens.joinedRoom', (_props: any) => {
        // TODO
    });

    // TODO: browse packages/reldens-types/events.d.ts for the rest. The room and
    //  world related ones are grouped in docs/02-events.md.

}
