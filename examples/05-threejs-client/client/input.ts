/**
 * Input.
 *
 * Movement is not simulated on the client. Pressing a key sends an intent and the
 * server decides what happens; the position that comes back in room state is the
 * truth, even when it disagrees with what the player just did.
 *
 * Two forms, both on the scene room:
 *   room.send('*', {dir: 'up'})            start moving in a direction (note: no `act`)
 *   room.send('*', {act: 'stop'})          stop
 *   room.send('*', {act: 'mp', x, y, column, row})   click to move, server pathfinds
 *
 * One quirk worth knowing: a direction command only takes effect on a tick where
 * the body's sideways velocity is zero. Walking through a doorway usually needs a
 * stop first, and a retry or two is normal rather than a failure.
 */
import type { Room } from 'colyseus.js';
import { Directions, ReldensProtocol, type Direction } from './protocol';

const KEY_TO_DIRECTION: Record<string, Direction> = {
    ArrowUp: Directions.UP,
    ArrowDown: Directions.DOWN,
    ArrowLeft: Directions.LEFT,
    ArrowRight: Directions.RIGHT,
    KeyW: Directions.UP,
    KeyS: Directions.DOWN,
    KeyA: Directions.LEFT,
    KeyD: Directions.RIGHT
};

export function bindKeyboard(room: Room): () => void {
    const held = new Set<Direction>();

    const onKeyDown = (event: KeyboardEvent): void => {
        const direction = KEY_TO_DIRECTION[event.code];
        if(!direction || held.has(direction)){
            return;
        }
        held.add(direction);
        room.send('*', {dir: direction});
    };

    const onKeyUp = (event: KeyboardEvent): void => {
        const direction = KEY_TO_DIRECTION[event.code];
        if(!direction){
            return;
        }
        held.delete(direction);
        if(0 === held.size){
            room.send('*', {act: ReldensProtocol.STOP});
        }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
    };
}

// TODO: click-to-move. Raycast the pointer onto the ground plane, convert the hit
//  back to Reldens pixel coordinates (multiply by tile size), and send
//  {act: 'mp', x, y, column, row}. The server runs the pathfinder from there.
