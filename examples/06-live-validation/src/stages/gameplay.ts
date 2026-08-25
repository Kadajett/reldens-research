/**
 * Gameplay stages: everything a player can cause, done for real.
 */
import type { RunningServer } from '../server';
import { DriverSession, MessageRecorder, sleep } from '../driver';

export interface GameplayContext {
    serverUrl: string;
    messages: MessageRecorder;
    running: RunningServer;
}

const run = String(Date.now()).slice(-6);

export interface GameplayResult {
    run: string;
    knownUser: {username: string; password: string; email: string; playerName: string; userId: number};
    secondUserId: number;
}

export async function runGameplayStages(ctx: GameplayContext): Promise<GameplayResult> {
    const {serverUrl, messages} = ctx;

    // --- registration + login ------------------------------------------------
    const alice = new DriverSession({
        serverUrl, recorder: messages,
        username: 'alice'+run, password: 'alice-pass-1', email: 'alice'+run+'@example.com',
        isNewUser: true, playerName: 'Alice'+run
    });
    await alice.connect();
    await alice.joinScene();
    await alice.joinChat();

    const bob = new DriverSession({
        serverUrl, recorder: messages,
        username: 'bob'+run, password: 'bob-pass-1', email: 'bob'+run+'@example.com',
        isNewUser: true, playerName: 'Bob'+run
    });
    await bob.connect();
    await bob.joinScene();
    await bob.joinChat();

    // --- movement ------------------------------------------------------------
    for(const direction of ['up', 'right', 'down', 'left']){
        alice.move(direction);
        await sleep(350);
    }
    alice.stop();
    alice.pointer(430, 380);
    await sleep(1200);
    alice.stop();

    // --- chat: scene, global, private ---------------------------------------
    alice.chat('hello scene');
    alice.globalChat('hello world');
    alice.privateChat('Bob'+run, 'psst');
    bob.chat('hi alice');
    await sleep(800);

    // --- NPC dialogs: interactions match the DB object id and require the
    // player inside the interaction area, so walk next to each NPC first --------
    for(const object of alice.interactiveObjects()){
        if(!object.id || object.index.includes('respawn')){
            continue;
        }
        await alice.walkTo(object.x, object.y + 40, 10000);
        alice.stop();
        await sleep(300);
        alice.interact(object.id);
        await sleep(500);
        // healer options: '1' restore HP, '2' potions (inventory persistData),
        // '3' restore MP (savePlayerStatsUpdateClient)
        for(const option of ['1', '2', '3']){
            alice.dialogOption(object.id, option);
            await sleep(600);
        }
    }
    await sleep(1000);

    const aliceUserId = Number(alice.player?.user_id ?? 0);
    const bobUserId = Number(bob.player?.user_id ?? 0);
    await alice.disconnect();
    await bob.disconnect(false);
    await sleep(1500);
    return {
        run,
        knownUser: {
            username: 'alice'+run,
            password: 'alice-pass-1',
            email: 'alice'+run+'@example.com',
            playerName: 'Alice'+run,
            userId: aliceUserId
        },
        secondUserId: bobUserId
    };
}
