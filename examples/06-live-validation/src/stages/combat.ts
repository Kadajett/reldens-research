/**
 * Combat: the real PvE loop in reldens-forest.
 *
 * The fighter walks from town through the change point (tiles 18/19), fights the
 * respawn-area enemies with the stock attackShort action, picks up the reward
 * drops, and finally stands unarmed in the middle of the pack until it dies and
 * revives. Every event on the way fires from genuine gameplay:
 * setupActions/afterRunAdditionalRespawnSetup (enemy init on room creation),
 * runBattlePveAfter/battleEnded (lib/actions/server/pve.js), beforeGiveRewards/
 * afterGiveRewards + afterProcessRewardsDropsBeforeBroadcast (rewards),
 * beforeRemovingDroppedReward (pickup), playerPersistDataBefore/After (item add),
 * savePlayerStatsUpdateClient (damage saves), playerDeath (lib/actions/server/battle.js:197),
 * restoreObjectAfter (enemy respawn), startObjectHitObject/endObjectHitObject/
 * objectHitObjectEnd (enemy bodies colliding while they chase).
 */
import { RELDENS_CONSTANTS } from '@reldens-tutorials/schemas';
import { DriverSession, MessageRecorder, sleep } from '../driver';

const Game = RELDENS_CONSTANTS.GameConst;

export interface CombatContext {
    serverUrl: string;
    messages: MessageRecorder;
    run: string;
    /** read-only view of the live server recorder, to know when a chance-based event has fired */
    seenCount?: (eventName: string) => number;
}

const TOWN_FOREST_DOOR = {x: 592, y: 16}; // town tile 18 (48 wide map), leads to reldens-forest

async function walkThroughChangePoint(session: DriverSession, doorX: number, doorY: number): Promise<string> {
    await session.walkTo(doorX, doorY + 64, 15000);
    for(let attempt = 0; 25 > attempt; attempt++){
        const reconnect = session.sceneMessages.find((m) => m?.act === Game['RECONNECT']);
        if(reconnect){
            return session.followSceneChange(4000);
        }
        await session.stepTowards(doorX, doorY, 2000, 10);
        await sleep(200);
    }
    return session.followSceneChange(8000);
}

function nearestEnemy(session: DriverSession): {key: string; x: number; y: number} | null {
    const me = session.myState();
    if(!me){
        return null;
    }
    let best: {key: string; x: number; y: number} | null = null;
    let bestDistance = Number.POSITIVE_INFINITY;
    for(const body of session.bodies()){
        if(!body.key.includes('respawn')){
            continue;
        }
        const distance = Math.hypot(body.x - me.x, body.y - me.y);
        if(distance < bestDistance){
            bestDistance = distance;
            best = body;
        }
    }
    return best;
}

export async function runCombatStages(ctx: CombatContext): Promise<void> {
    const {serverUrl, messages, run, seenCount} = ctx;

    const fighter = new DriverSession({
        serverUrl, recorder: messages,
        username: 'fighter'+run, password: 'fighter-pass-1', email: 'fighter'+run+'@example.com',
        isNewUser: true, playerName: 'Fighter'+run
    });
    await fighter.connect();
    await fighter.joinScene();
    await sleep(500);

    const forest = await walkThroughChangePoint(fighter, TOWN_FOREST_DOOR.x, TOWN_FOREST_DOOR.y);
    if('reldens-forest' !== forest){
        throw new Error('expected to land in reldens-forest, got '+forest);
    }
    await sleep(1000);

    // --- kill at least one enemy, picking up whatever it drops ------------------
    const deadline = Date.now() + 90000;
    let kills = 0;
    while(1 > kills && Date.now() < deadline){
        const enemy = nearestEnemy(fighter);
        if(!enemy){
            await sleep(500);
            continue;
        }
        const me = fighter.myState();
        if(24 < Math.hypot(enemy.x - me.x, enemy.y - me.y)){
            fighter.pointer(enemy.x, enemy.y);
            await sleep(600);
            fighter.stop();
        }
        fighter.action('attackShort', enemy.key, 'obj');
        await sleep(700);
        const battleEnd = fighter.sceneMessages.find(
            (m) => m?.act === 'bend' && m?.t !== fighter.sceneRoom.sessionId);
        if(battleEnd){
            kills++;
        }
        // dead already? wait for the automatic revive and keep going
        if(fighter.sceneMessages.some((m) => m?.act === Game['GAME_OVER'])){
            await fighter.waitFor(
                fighter.sceneMessages,
                (m) => m?.act === Game['REVIVED'] && m?.t === fighter.sceneRoom.sessionId,
                20000, 'revive');
            fighter.sceneMessages.length = 0;
        }
    }
    if(1 > kills){
        throw new Error('no enemy was killed inside the time budget');
    }

    // --- pick up the drops the kill broadcast ----------------------------------
    await sleep(1500);
    const dropMessages = fighter.sceneMessages.filter((m) => m && 'object' === typeof m.drp);
    for(const dropMessage of dropMessages){
        for(const [dropId, drop] of Object.entries<any>(dropMessage.drp)){
            await fighter.walkTo(drop.x, drop.y, 10000);
            fighter.stop();
            await sleep(300);
            fighter.send({act: 'oi', type: 'rpu', id: dropId});
            await sleep(600);
        }
    }

    // --- die for real, repeatedly: player item drops on death are chance-based
    // (server/players/drop/percent = 20), so keep dying until the drop broadcast
    // genuinely fired (observed on the live recorder), or the budget runs out ----
    const dropsFired = () => 0 < (seenCount?.('reldens.afterProcessPlayerDropsBeforeBroadcast') ?? 1);
    const deathDeadline = Date.now() + 240000;
    let deaths = 0;
    while(Date.now() < deathDeadline){
        fighter.sceneMessages.length = 0;
        let died = false;
        while(!died && Date.now() < deathDeadline){
            const enemy = nearestEnemy(fighter);
            const me = fighter.myState();
            if(enemy && me && 32 < Math.hypot(enemy.x - me.x, enemy.y - me.y)){
                fighter.pointer(enemy.x, enemy.y);
                await sleep(500);
                fighter.stop();
            }
            died = fighter.sceneMessages.some((m) => m?.act === Game['GAME_OVER']);
            await sleep(500);
        }
        if(!died){
            break;
        }
        deaths++;
        await fighter.waitFor(
            fighter.sceneMessages,
            (m) => m?.act === Game['REVIVED'] && m?.t === fighter.sceneRoom.sessionId,
            30000, 'revive after death '+deaths);
        await sleep(1000);
        if(dropsFired()){
            break;
        }
        // recover anything this death dropped so the next roll has items to drop
        for(const dropMessage of fighter.sceneMessages.filter((m) => m && 'object' === typeof m.drp)){
            for(const [dropId, drop] of Object.entries<any>(dropMessage.drp)){
                await fighter.walkTo(drop.x, drop.y, 8000);
                fighter.stop();
                await sleep(300);
                fighter.send({act: 'oi', type: 'rpu', id: dropId});
                await sleep(500);
            }
        }
    }
    if(1 > deaths){
        throw new Error('the enemies never managed to kill the fighter');
    }

    // stay a moment: a killed enemy restores through the respawn area meanwhile
    await sleep(3000);
    await fighter.disconnect();
    await sleep(500);
}
