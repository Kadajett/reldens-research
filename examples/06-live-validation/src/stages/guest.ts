/**
 * Guest sessions and guest room restrictions.
 *
 * reldens-house-1-2d-floor has no {"allowGuest":true} in rooms.customData, so it
 * is the one room a guest is genuinely barred from:
 * - registering a guest straight into it makes the scene join fail with
 *   reldens.joinRoomInvalid (rooms/server/scene.js:149)
 * - walking a guest onto the staircase change point inside reldens-house-1 fires
 *   reldens.guestInvalidChangePoint (world/server/collisions-manager.js:344)
 */
import { DriverSession, MessageRecorder, sleep } from '../driver';

export interface GuestContext {
    serverUrl: string;
    messages: MessageRecorder;
    run: string;
}

export async function runGuestStages(ctx: GuestContext): Promise<void> {
    const {serverUrl, messages, run} = ctx;

    // --- joinRoomInvalid: guest whose player starts in a guest-forbidden room ---
    const blocked = new DriverSession({
        serverUrl, recorder: messages,
        username: 'guest-blocked'+run, password: 'guest-pass-1',
        isGuest: true, isNewUser: true,
        playerName: 'GuestBlocked'+run, selectedScene: 'reldens-house-1-2d-floor'
    });
    await blocked.connect();
    try {
        // the scene join must fail: onJoin bails out after emitting joinRoomInvalid
        await blocked.joinScene();
        throw new Error('guest joined a room that must reject guests');
    } catch (error) {
        if(String(error).includes('must reject')){
            throw error;
        }
    }
    await blocked.disconnect();

    // --- guestInvalidChangePoint: guest walks into the blocked staircase ---------
    const walker = new DriverSession({
        serverUrl, recorder: messages,
        username: 'guest-walker'+run, password: 'guest-pass-1',
        isGuest: true, isNewUser: true,
        playerName: 'GuestWalker'+run, selectedScene: 'reldens-house-1'
    });
    await walker.connect();
    await walker.joinScene();
    const changePoints: Array<{i: number; n: string}> = walker.sceneData.changePoints ?? [];
    if(!changePoints.some((point) => 'reldens-house-1-2d-floor' === point.n)){
        throw new Error('no staircase change point found in reldens-house-1');
    }
    // pointer-path to the landing by the staircase (the 2d-floor return point),
    // then step-walk into the blocked change point tiles (623/663 -> x752,y496/528)
    await walker.walkTo(720, 540, 15000);
    await walker.stepTowards(752, 528, 15000, 12);
    await sleep(1000);
    await walker.disconnect();
}
