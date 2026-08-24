/**
 * Entry point for the Three.js client.
 *
 * Served by Vite on :5173, talking to the Reldens game server on :8085. The stock
 * Phaser client keeps working on :8085 at the same time - the world does not know
 * or care which renderer is attached.
 */
/// <reference types="vite/client" />

import { openSession } from './session';
import { bindKeyboard } from './input';
import { WorldView } from './world-view';

const GAME_SERVER_URL = import.meta.env['VITE_GAME_SERVER_URL'] ?? 'ws://localhost:8085';

const canvas = document.getElementById('view') as HTMLCanvasElement;
const form = document.getElementById('login') as HTMLFormElement;
const status = document.getElementById('status') as HTMLElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    void start(
        String(data.get('username') ?? ''),
        String(data.get('password') ?? ''),
        String(data.get('playerName') ?? 'Explorer')
    );
});

async function start(username: string, password: string, playerName: string): Promise<void> {
    status.textContent = 'connecting…';
    try {
        const session = await openSession(GAME_SERVER_URL, {username, password}, playerName);
        form.hidden = true;
        status.textContent = 'in '+session.sceneName;

        const view = new WorldView(canvas);
        view.loadScene(JSON.parse(session.sceneRoom.state.sceneData || '{}'));
        view.bindRoomState(session.sceneRoom.state, session.sceneRoom.sessionId);

        bindKeyboard(session.sceneRoom);

        let last = performance.now();
        const frame = (now: number): void => {
            const delta = (now - last) / 1000;
            last = now;
            view.step(delta);
            view.followBody(session.sceneRoom.sessionId);
            requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);

        // TODO: react to the combat and skill broadcasts. They are plain messages,
        //  not state: session.sceneRoom.onMessage('*', (type, message) => …) and
        //  switch on message.act against ReldensProtocol.
    } catch (error) {
        status.textContent = String(error);
        console.error(error);
    }
}
