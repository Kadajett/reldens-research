/**
 * The Three.js side.
 *
 * Reldens is a 2D top-down engine, so the world arrives in tile coordinates: the
 * scene data has a tile width/height and a layer stack, and every body has an
 * (x, y) in pixels within that map. Rendering it in 3D is a projection decision,
 * not a protocol one - the server neither knows nor cares.
 *
 * The mapping this file assumes:
 *   world X  =  state.x / tileWidth
 *   world Z  =  state.y / tileHeight
 *   world Y  =  0 (flat), or whatever elevation you decide to add server-side
 *
 * Interpolation matters more here than it does in 2D. The server broadcasts
 * positions on its own tick, not on your frame rate, so move meshes toward the
 * last known position each frame rather than snapping to it.
 */
import * as THREE from 'three';
import type { BodyState, PlayerSchema, RoomState } from './protocol';

export interface SceneData {
    /** Tiled map JSON, as embedded by the server in `state.sceneData`. */
    [key: string]: any;
}

export class WorldView {

    readonly scene = new THREE.Scene();
    readonly camera: THREE.PerspectiveCamera;
    readonly renderer: THREE.WebGLRenderer;

    /** One mesh per synchronised body, keyed the same way the room state is. */
    private readonly meshes = new Map<string, THREE.Object3D>();
    /** Where the server last said each body was, in world units. */
    private readonly targets = new Map<string, THREE.Vector3>();

    private tileWidth = 32;
    private tileHeight = 32;

    constructor(canvas: HTMLCanvasElement) {
        this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        this.camera.position.set(0, 12, 12);
        this.camera.lookAt(0, 0, 0);

        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const sun = new THREE.DirectionalLight(0xffffff, 1);
        sun.position.set(5, 20, 8);
        this.scene.add(sun);

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    /**
     * Called once per scene, with the parsed `state.sceneData`.
     *
     * TODO: build the ground. The Tiled JSON in here has the layer data, the
     *  tileset image names and the map dimensions; `layers[].data` is a flat array
     *  of tile ids in row-major order. A textured plane per layer is the cheap
     *  version; an InstancedMesh per tile id is the one that scales.
     */
    loadScene(sceneData: SceneData): void {
        this.tileWidth = Number(sceneData.tilewidth ?? 32);
        this.tileHeight = Number(sceneData.tileheight ?? 32);

        // TODO
    }

    /** Reldens pixel coordinates to Three.js world units. */
    toWorld(x: number, y: number): THREE.Vector3 {
        return new THREE.Vector3(x / this.tileWidth, 0, y / this.tileHeight);
    }

    addBody(key: string, state: PlayerSchema | BodyState, isSelf: boolean): void {
        // TODO: replace the placeholder box with a real model, and pick it by the
        //  body's client key so NPCs, enemies and players look different.
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 1.6, 0.8),
            new THREE.MeshStandardMaterial({color: isSelf ? 0x4fc3f7 : 0xef9a9a})
        );
        const position = this.toWorld(Number(state['x'] ?? 0), Number(state['y'] ?? 0));
        mesh.position.copy(position);
        mesh.position.y = 0.8;
        this.scene.add(mesh);
        this.meshes.set(key, mesh);
        this.targets.set(key, position);
    }

    updateBody(key: string, x: number, y: number): void {
        const target = this.targets.get(key);
        if(!target){
            return;
        }
        target.copy(this.toWorld(x, y));
    }

    removeBody(key: string): void {
        const mesh = this.meshes.get(key);
        if(mesh){
            this.scene.remove(mesh);
        }
        this.meshes.delete(key);
        this.targets.delete(key);
    }

    /**
     * Per-frame update. `delta` is seconds since the last frame.
     *
     * TODO: this is a naive lerp. It is smooth but it lags, and it ignores
     *  direction and animation state entirely. Once movement feels right, look at
     *  what Reldens' own prediction module does (lib/prediction/) - the server
     *  broadcasts on a fixed tick and the client is expected to fill the gaps.
     */
    step(delta: number): void {
        for(const [key, mesh] of this.meshes){
            const target = this.targets.get(key);
            if(!target){
                continue;
            }
            mesh.position.x += (target.x - mesh.position.x) * Math.min(1, delta * 10);
            mesh.position.z += (target.z - mesh.position.z) * Math.min(1, delta * 10);
        }
        this.renderer.render(this.scene, this.camera);
    }

    /** Keeps the camera behind whichever mesh is the local player. */
    followBody(key: string): void {
        const mesh = this.meshes.get(key);
        if(!mesh){
            return;
        }
        this.camera.position.set(mesh.position.x, mesh.position.y + 12, mesh.position.z + 12);
        this.camera.lookAt(mesh.position);
    }

    /** Wires the room's MapSchema collections to the meshes above. */
    bindRoomState(state: RoomState, selfSessionId: string): void {
        // Colyseus 0.16 delivers state asynchronously: the first onStateChange can
        // arrive after the join resolves, so never bail out on a missing collection -
        // wait for it. Getting this wrong is the single most common Reldens client
        // bug, and it looks like "players never appear".

        // TODO: attach to state.players and state.bodies. In 0.16 the reactive
        //  helpers live in reldens/lib/game/client/state-callbacks-manager.js and
        //  room-state-entities-manager.js; the raw Colyseus API is
        //  getStateCallbacks(room).players.onAdd / onRemove / listen('x', ...).
        void state;
        void selfSessionId;
    }

}
