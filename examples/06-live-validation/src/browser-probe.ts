/**
 * CDP probe: logs in, reaches the scene, then reports the client structure that
 * governs movement (game engine, active scene, player sprite, active room) plus the
 * player's world position before and after an arrow-hold and a click, so the driver
 * can move the player reliably toward a change point.
 */
import WebSocket from 'ws';

const CDP_URL = 'http://localhost:9222';
const PAGE_URL = 'http://localhost:8086/?harness=1&logLevel=1';
const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

class Cdp {
    private ws!: WebSocket;
    private nextId = 1;
    private pending = new Map<number, (m: any) => void>();
    async connect(url: string): Promise<void> {
        this.ws = new WebSocket(url);
        await new Promise<void>((res, rej) => { this.ws.once('open', res); this.ws.once('error', rej); });
        this.ws.on('message', (d) => { const m = JSON.parse(String(d)); if(m.id && this.pending.has(m.id)){ this.pending.get(m.id)!(m); this.pending.delete(m.id); } });
    }
    evaluate<T = unknown>(expression: string): Promise<T> {
        const id = this.nextId++;
        return new Promise<T>((res) => { this.pending.set(id, (m) => res(m.result?.result?.value)); this.ws.send(JSON.stringify({id, method: 'Runtime.evaluate', params: {expression, awaitPromise: true, returnByValue: true}})); });
    }
    navigate(url: string): void { this.ws.send(JSON.stringify({id: this.nextId++, method: 'Page.navigate', params: {url}})); }
    close(): void { this.ws.close(); }
}

async function waitFor(cdp: Cdp, expr: string, ms: number): Promise<boolean> {
    const start = Date.now();
    while(Date.now() - start < ms){ if(await cdp.evaluate<boolean>(expr)){ return true; } await sleep(500); }
    return false;
}

async function main(): Promise<void> {
    const targets = await fetch(CDP_URL+'/json').then((r) => r.json()) as Array<{type: string; webSocketDebuggerUrl: string}>;
    const cdp = new Cdp();
    await cdp.connect(targets.find((t) => 'page' === t.type)!.webSocketDebuggerUrl);
    cdp.navigate(PAGE_URL);
    await waitFor(cdp, `!!(window.reldens && window.reldens.events && window.reldens.events.__harnessAttached)`, 20000);
    await sleep(1500);
    const guest = 'gp'+String(Date.now()).slice(-8);
    await cdp.evaluate(`window.reldens.startGame({formId:'guest-form',username:'${guest}',password:'${guest}',rePassword:'${guest}',isGuest:true}, true)`);
    if(await waitFor(cdp, `!!document.querySelector('#player-create-form:not(.hidden)')`, 15000)){
        await cdp.evaluate(`(()=>{document.querySelector('#new-player-name').value='BP${String(Date.now()).slice(-6)}';document.querySelector('#player-create-form').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));return true;})()`);
    }
    await waitFor(cdp, `!!document.querySelector('#reldens canvas')`, 30000);
    await sleep(4000);

    // find the structure: walk window.reldens for the game engine, active scene and player
    const struct = await cdp.evaluate<any>(`(() => {
        const r = window.reldens, out = {topKeys: Object.keys(r).slice(0,40)};
        const are = r.activeRoomEvents; out.hasARE = !!are;
        if(are){
            out.areKeys = Object.keys(are).slice(0,40);
            const room = are.room; out.hasRoom = !!room; out.hasSend = !!(room && room.send);
            out.roomName = room && room.name;
            if(room && room.state){ out.stateKeys = Object.keys(room.state).slice(0,40);
                const st = room.state;
                for(const c of ['bodies','players','objects']){ if(st[c] && st[c].forEach){ let n=0; st[c].forEach(()=>n++); out[c+'Count']=n; } }
                if(st.players && st.players.forEach){ st.players.forEach((p,k)=>{ if(!out.myPos && p){ out.myPos={key:String(k),x:p.state?p.state.x:p.x,y:p.state?p.state.y:p.y}; } }); }
            }
            out.hasGetActiveScene = 'function' === typeof are.getActiveScene;
        }
        return out;
    })()`);
    // confirm movement actually works: read pos, send a pointer up, read pos again
    const move = await cdp.evaluate<any>(`(async () => {
        const r = window.reldens; const are = r.activeRoomEvents; const room = are && are.room;
        if(!room){ return {err:'no room'}; }
        const sc = are.getActiveScene && are.getActiveScene();
        const pid = are.playersOnAddCallback ? null : null;
        const myKey = (()=>{ let k=null; try{ room.state.players.forEach((p,kk)=>{ if(!k) k=kk; }); }catch(e){} return k; })();
        const spriteOf = () => { try { const p = sc && sc.player; const ps = p && p.players && p.players[myKey]; return ps ? {x: ps.x, y: ps.y} : null; } catch(e){ return null; } };
        const stateOf = () => { let pos=null; try { room.state.players.forEach((p,k)=>{ if(k===myKey){ pos={x:p.x,y:p.y,state:p.state?{x:p.state.x,y:p.state.y}:null}; } }); } catch(e){} return pos; };
        const before = {sprite: spriteOf(), state: stateOf(), key: myKey, hasScene: !!sc, scenePlayerKeys: sc&&sc.player?Object.keys(sc.player).slice(0,20):null};
        // try direction stepping (blunt, works into doorways)
        for(let i=0;i<6;i++){ room.send('*', {dir:'down'}); await new Promise(r=>setTimeout(r,250)); }
        room.send('*', {act:'stop'});
        await new Promise(r=>setTimeout(r,800));
        const afterDir = {sprite: spriteOf(), state: stateOf()};
        // then try pointer to a near offset
        const bx=(before.sprite||before.state||{x:548}).x, by=(before.sprite||before.state||{y:615}).y;
        room.send('*', {act:'mp', x:bx+64, y:by, column:Math.floor((bx+64)/32), row:Math.floor(by/32)});
        await new Promise(r=>setTimeout(r,2000));
        const afterPointer = {sprite: spriteOf(), state: stateOf()};
        return {before, afterDir, afterPointer};
    })()`);
    struct.movementTest = move;
    require('node:fs').writeFileSync(__dirname+'/../.browser-probe.json', JSON.stringify(struct, null, 2));
    console.info('[probe] roomName=', struct.roomName, 'move=', JSON.stringify(move));
    cdp.close();
    process.exit(0);
}
main().catch((e) => { console.error(e); process.exit(1); });
