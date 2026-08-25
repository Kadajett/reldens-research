/**
 * Headless-Chrome client driver over the DevTools Protocol.
 *
 * Loads the REAL bundled Phaser client with ?harness=1 (the injected recorder
 * attaches to reldens.events), plays as a guest through the client's own API,
 * creates a player, waits for the Phaser scene, moves, opens UI panels, changes
 * scene, so the client-zone events fire for real, then POSTs the recorder's
 * aggregate to the server. Nothing is emitted artificially.
 */
import WebSocket from 'ws';

const CDP_URL = 'http://localhost:9222';
const PAGE_URL = 'http://localhost:8086/?harness=1&logLevel=1';

interface CdpMessage {id?: number; result?: any; error?: any}

class Cdp {
    private ws!: WebSocket;
    private nextId = 1;
    private pending = new Map<number, (msg: CdpMessage) => void>();

    async connect(wsUrl: string): Promise<void> {
        this.ws = new WebSocket(wsUrl);
        await new Promise<void>((resolve, reject) => {
            this.ws.once('open', resolve);
            this.ws.once('error', reject);
        });
        this.ws.on('message', (data) => {
            const msg: CdpMessage = JSON.parse(String(data));
            if(msg.id && this.pending.has(msg.id)){
                this.pending.get(msg.id)!(msg);
                this.pending.delete(msg.id);
            }
        });
    }

    private send(method: string, params: Record<string, unknown> = {}): Promise<CdpMessage> {
        const id = this.nextId++;
        return new Promise((resolve) => {
            this.pending.set(id, resolve);
            this.ws.send(JSON.stringify({id, method, params}));
        });
    }

    async evaluate<T = unknown>(expression: string): Promise<T> {
        const response = await this.send('Runtime.evaluate', {expression, awaitPromise: true, returnByValue: true});
        return response.result?.result?.value as T;
    }

    navigate(url: string): Promise<CdpMessage> {
        return this.send('Page.navigate', {url});
    }

    close(): void {
        this.ws.close();
    }
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(cdp: Cdp, expression: string, timeoutMs: number): Promise<boolean> {
    const startedAt = Date.now();
    while(Date.now() - startedAt < timeoutMs){
        if(await cdp.evaluate<boolean>(expression)){
            return true;
        }
        await sleep(500);
    }
    return false;
}

async function main(): Promise<void> {
    const targets = await fetch(CDP_URL+'/json').then((r) => r.json()) as Array<{type: string; webSocketDebuggerUrl: string}>;
    const page = targets.find((t) => 'page' === t.type);
    if(!page){
        throw new Error('no page target');
    }
    const cdp = new Cdp();
    await cdp.connect(page.webSocketDebuggerUrl);
    await cdp.evaluate('1');

    console.info('[browser-driver] navigating...');
    await cdp.navigate(PAGE_URL);
    if(!await waitFor(cdp, `!!(window.reldens && window.reldens.events && window.reldens.events.__harnessAttached)`, 20000)){
        throw new Error('recorder never attached');
    }
    await sleep(1500);

    // log in as an existing account (HARNESS_LOGIN_USER) whose player already lives
    // in the town, so we can reach the forest door and fight; a fresh guest otherwise
    const loginUser = process.env.HARNESS_LOGIN_USER;
    const loginPass = process.env.HARNESS_LOGIN_PASS || '';
    if(loginUser){
        console.info('[browser-driver] login as', loginUser);
        await cdp.evaluate(`window.reldens.startGame({formId:'login-form',username:'${loginUser}',password:'${loginPass}'}, false)`);
    } else {
        console.info('[browser-driver] guest login...');
        const guestName = 'gp'+String(Date.now()).slice(-8);
        await cdp.evaluate(`window.reldens.startGame(
            {formId:'guest-form',username:'${guestName}',password:'${guestName}',rePassword:'${guestName}',isGuest:true}, true)`);
    }

    // an existing account shows the player selector; a fresh guest shows create.
    if(await waitFor(cdp, `!!document.querySelector('#player-selector-form:not(.hidden)')`, 8000)){
        console.info('[browser-driver] selecting existing player...');
        await cdp.evaluate(`(() => {
            const sel = document.querySelector('#player-select-element');
            if(sel && sel.options.length){ sel.selectedIndex = 0; sel.dispatchEvent(new Event('change',{bubbles:true})); }
            document.querySelector('#player-selector-form').dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
            return true;
        })()`);
    } else if(await waitFor(cdp, `!!document.querySelector('#player-create-form:not(.hidden)')`, 8000)){
        console.info('[browser-driver] creating player...');
        await cdp.evaluate(`(() => {
            const input = document.querySelector('#new-player-name');
            input.value = 'BP${String(Date.now()).slice(-6)}';
            document.querySelector('#player-create-form').dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
            return true;
        })()`);
    }

    // wait for the Phaser scene to build
    const inScene = await waitFor(cdp, `!!document.querySelector('#reldens canvas')`, 30000);
    console.info('[browser-driver] canvas present:', inScene);
    await sleep(4000);

    // short movement in each direction to spawn the player engine and animate it
    await walk(cdp, ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'], 500);

    // open every on-screen panel then close it: fires the generic openUI/closeUI hooks
    await clickAll(cdp, '#reldens [class*="-open"], #reldens [class*="box-open"], #reldens [id$="-open"]');
    await sleep(1500);
    await clickAll(cdp, '#reldens [class*="-close"], #reldens [class*="box-close"], #reldens [id$="-close"]');
    await sleep(1000);

    // chat: open, type, send, close - fires chatMessageObjectCreated
    await cdp.evaluate(`(() => {
        const open = document.querySelector('#chat-open'); if(open){ open.click(); }
        const input = document.querySelector('#chat-input');
        if(input){ input.value = 'harness hello'; input.dispatchEvent(new Event('input',{bubbles:true})); }
        const send = document.querySelector('#chat-send'); if(send){ send.click(); }
        return !!(input && send);
    })()`);
    await sleep(1500);

    // targeting: Tab-cycle targets and click the canvas to show/clear a target
    await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keydown', {key:'Tab', code:'Tab', keyCode:9, bubbles:true}))`);
    await sleep(1000);
    await cdp.evaluate(`(() => {
        const c = document.querySelector('#reldens canvas'); if(!c){ return false; }
        const rect = c.getBoundingClientRect();
        for(const [dx,dy] of [[0.5,0.4],[0.6,0.5],[0.4,0.6]]){
            const x = rect.left + rect.width*dx, y = rect.top + rect.height*dy;
            for(const type of ['pointerdown','pointerup','click']){
                c.dispatchEvent(new MouseEvent(type,{bubbles:true,clientX:x,clientY:y,button:0}));
            }
        }
        return true;
    })()`);
    await sleep(1500);
    await cdp.evaluate(`(() => { const t = document.querySelector('#close-target, .close-target'); if(t){ t.click(); } return true; })()`);
    await sleep(1500);

    // cross the town->forest change point via click-to-move toward the top edge
    // (the door sits up and slightly right of the spawn). Detect the real scene
    // change through the client's own startChangedScene event, then fight+die.
    const changed = await changeScene(cdp);
    console.info('[browser-driver] scene changed:', changed);
    if(changed){
        await fightAndDie(cdp);
    }

    const seen = await cdp.evaluate<number>(
        `Object.entries(window.__harnessRecords||{}).filter(([,r])=>r.seen>0).length`);
    console.info('[browser-driver] client events seen so far:', seen);

    await cdp.evaluate(`window.__harnessReport()`);
    const names = await cdp.evaluate<string[]>(
        `Object.entries(window.__harnessRecords||{}).filter(([,r])=>r.seen>0).map(([n])=>n)`);
    // write to a file so buffered stdout can't hide the result
    require('node:fs').writeFileSync(__dirname+'/../.browser-driver-result.json',
        JSON.stringify({seen, count: names.length, names: names.sort()}, null, 1));
    console.info('[browser-driver] reported '+names.length+' client events');

    cdp.close();
    process.exit(0);
}

function keyCode(key: string): number {
    return ({ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37} as Record<string, number>)[key] ?? 0;
}

async function walk(cdp: Cdp, keys: string[], holdMs: number): Promise<void> {
    for(const key of keys){
        await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keydown', {key:'${key}', code:'${key}', keyCode:${keyCode(key)}, bubbles:true}))`);
        await sleep(holdMs);
        await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keyup', {key:'${key}', code:'${key}', keyCode:${keyCode(key)}, bubbles:true}))`);
        await sleep(150);
    }
}

async function recSeen(cdp: Cdp, name: string): Promise<boolean> {
    return cdp.evaluate<boolean>(`!!(window.__harnessRecords && window.__harnessRecords['${name}'] && window.__harnessRecords['${name}'].seen > 0)`);
}

// send a message through the client's own active scene room (identical to what the
// player's input produces); the server relocates the player and drives the client
const ROOM = `(window.reldens.activeRoomEvents && window.reldens.activeRoomEvents.room) || window.reldens.gameRoom`;
async function roomSend(cdp: Cdp, payload: string): Promise<void> {
    await cdp.evaluate(`(() => { try { const r = ${ROOM}; if(r){ r.send('*', ${payload}); return true; } } catch(e){} return false; })()`);
}

// authoritative server position of our OWN player: the scene room's player schema
// for this client's sessionId, whose nested .state holds x/y (matches driver.myState)
async function playerPos(cdp: Cdp): Promise<{x: number; y: number} | null> {
    return cdp.evaluate<{x: number; y: number} | null>(`(() => {
        try {
            const r = ${ROOM}; const p = r.state.players.get(r.sessionId); const st = p && p.state;
            return st ? {x: st.x, y: st.y} : null;
        } catch(e){ return null; }
    })()`);
}

// pointer-pathfind to a world target (server pathfinds around obstacles)
async function pathTo(cdp: Cdp, tx: number, ty: number, tries: number): Promise<{x: number; y: number} | null> {
    await roomSend(cdp, `{act:'mp', x:${tx}, y:${ty}, column:${Math.floor(tx / 32)}, row:${Math.floor(ty / 32)}}`);
    let last: {x: number; y: number} | null = null;
    for(let i = 0; i < tries; i++){
        await sleep(400);
        last = await playerPos(cdp);
        if(last && Math.hypot(last.x - tx, last.y - ty) < 24){ return last; }
    }
    return last;
}

// step-walk toward a target with plain direction messages (blunt, but crosses into
// doorways where pointer pathing stops short) - mirrors driver.stepTowards
async function stepTowards(cdp: Cdp, tx: number, ty: number, timeoutMs: number, closeEnough: number): Promise<boolean> {
    const startedAt = Date.now();
    let prev: {x: number; y: number} | null = null;
    let stuck = 0;
    while(Date.now() - startedAt < timeoutMs){
        const s = await playerPos(cdp);
        if(!s){ await sleep(250); continue; }
        const dx = tx - s.x, dy = ty - s.y;
        if(closeEnough > Math.hypot(dx, dy)){ await roomSend(cdp, `{act:'stop'}`); return true; }
        if(await recSeen(cdp, 'reldens.startChangedScene')){ return true; }
        // when blocked (no progress), push along the other axis to slip past the wall
        stuck = (prev && Math.hypot(s.x - prev.x, s.y - prev.y) < 3) ? stuck + 1 : 0;
        prev = s;
        let dir = Math.abs(dx) > Math.abs(dy) ? (0 < dx ? 'right' : 'left') : (0 < dy ? 'down' : 'up');
        if(1 < stuck){ dir = Math.abs(dx) > Math.abs(dy) ? (0 < dy ? 'down' : 'up') : (0 < dx ? 'right' : 'left'); }
        await roomSend(cdp, `{dir:'${dir}'}`);
        await sleep(300);
        await roomSend(cdp, `{act:'stop'}`);
        await sleep(120);
    }
    await roomSend(cdp, `{act:'stop'}`);
    return false;
}

// reach any town exit and cross it: pointer-path to the landing near a door, then
// step-walk into the change point tile. Town has three doors (forest, two houses);
// try each until the client reports a real scene change.
async function changeScene(cdp: Cdp): Promise<boolean> {
    console.info('[browser-driver] start pos', JSON.stringify(await playerPos(cdp)));
    const doors = [
        {name: 'house-1', x: 400, y: 304, ax: 400, ay: 368},
        {name: 'forest', x: 592, y: 16, ax: 592, ay: 80},
        {name: 'house-2', x: 1264, y: 624, ax: 1264, ay: 688}
    ];
    for(const door of doors){
        await pathTo(cdp, door.ax, door.ay, 14);
        console.info('[browser-driver] at', door.name, JSON.stringify(await playerPos(cdp)));
        await stepTowards(cdp, door.x, door.y, 12000, 14);
        if(await recSeen(cdp, 'reldens.startChangedScene')){ console.info('[browser-driver] crossed', door.name); return true; }
    }
    return false;
}

// in the forest: attack the enemy bodies the client knows about and keep moving so
// the player trades damage and eventually dies, firing playerAttack and gameOver
async function fightAndDie(cdp: Cdp): Promise<void> {
    await sleep(3000);
    // move into the forest interior, away from the entrance edge, to meet enemies
    await pathTo(cdp, 592, 320, 8);
    for(let round = 0; round < 22; round++){
        const enemies = await cdp.evaluate<string[]>(`(() => {
            try {
                const r = ${ROOM}; const st = r && r.state; const out = [];
                const bodies = st && (st.bodies || st.objects || st.players);
                if(bodies && bodies.forEach){ bodies.forEach((v,k) => { if(out.length < 8){ out.push(String(k)); } }); }
                return out;
            } catch(e){ return []; }
        })()`);
        for(const id of enemies ?? []){
            await roomSend(cdp, `{act:'action', type:'attackShort', target:{id:'${id}', type:'obj'}}`);
            await sleep(250);
        }
        await roomSend(cdp, `{dir:'${['up', 'down', 'left', 'right'][round % 4]}'}`);
        await sleep(400);
        await roomSend(cdp, `{act:'stop'}`);
        if(await recSeen(cdp, 'reldens.gameOver')){ return; }
    }
}

async function clickAll(cdp: Cdp, selector: string): Promise<number> {
    return cdp.evaluate<number>(`(() => {
        let n = 0;
        document.querySelectorAll(${JSON.stringify(selector)}).forEach((el) => {
            try { el.click(); n++; } catch(e){}
        });
        return n;
    })()`);
}

main().catch((error) => { console.error(error); process.exit(1); });
