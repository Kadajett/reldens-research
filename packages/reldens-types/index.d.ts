/**
 * Hand-written ambient declarations for the `reldens` package (v4.0.0-beta.39.x).
 *
 * Reldens is plain CommonJS JavaScript with JSDoc and ships no .d.ts files.
 * These declarations cover the surface the tutorials touch. Every class carries
 * an `[key: string]: any` index signature on purpose: the real classes have far
 * more members than are declared here, and the index signature means a missing
 * declaration never blocks you. Tighten a type when you learn what it is,
 * rather than fighting the compiler.
 *
 * Source of truth: node_modules/reldens/lib/**, plus the JSDoc typedefs there.
 */

/// <reference path="./events.d.ts" />
/// <reference path="./event-payloads.d.ts" />

declare module 'reldens/server' {
    import { ReldensEventName, ReldensEventsManager } from 'reldens-events';

    /** Any class Reldens will instantiate for you. */
    export type CustomClassConstructor = new (...args: any[]) => any;

    /**
     * The server half of the customClasses tree, as Reldens reads it at runtime.
     * Each bucket's lookup site (verified against 4.0.0-beta.39.8):
     *   objects                lib/objects/server/manager.js:101, keyed by objects.object_class_key
     *   roomsClass             lib/rooms/server/manager.js:137,  keyed by rooms.roomClassPath
     *   sceneDataProcessor     lib/rooms/server/scene-data-filter.js:71, a single class
     *   inventory.items        lib/inventory/server/subscribers/server-subscriber.js:38
     *   inventory.groups       lib/inventory/server/subscribers/server-subscriber.js:42
     *   skills.skillsList      lib/actions/server/data-loader.js:62
     *   skills.classPath       lib/actions/server/data-loader.js:89
     * A missing objects key falls back to the built-in type; a room whose
     * roomClassPath names an unregistered class is SKIPPED with an error.
     */
    export interface ServerCustomClasses {
        objects?: Record<string, CustomClassConstructor>;
        roomsClass?: Record<string, CustomClassConstructor>;
        sceneDataProcessor?: CustomClassConstructor;
        inventory?: {
            items?: Record<string, CustomClassConstructor>;
            groups?: Record<string, CustomClassConstructor>;
        };
        skills?: {
            skillsList?: Record<string, CustomClassConstructor>;
            classPath?: Record<string, CustomClassConstructor>;
        };
        [bucket: string]: unknown;
    }

    /**
     * lib/config/server/manager.js. `configList.server.customClasses` is seeded from
     * the ServerManager config's `customClasses` (constructor, line 40) and is the
     * object plugins mutate on reldens.beforeInitializeManagers.
     */
    export interface ServerConfigManager {
        configList: {
            server: {customClasses: ServerCustomClasses} & Record<string, any>;
            client: Record<string, any>;
        };
        get(path: string, defaultValue?: any): any;
        getWithoutLogs(path: string, defaultValue?: any): any;
        [key: string]: any;
    }

    /** Config object handed to `new ServerManager(config)`. */
    export interface ServerManagerConfig {
        /** Absolute path to the project root. Reldens writes .env, dist/, theme/ and install.lock relative to it. */
        projectRoot: string;
        /** Folder name under `theme/`. Defaults to 'default'. */
        projectThemeName?: string;
        /**
         * Where the reldens package itself lives. Defaults to `<projectRoot>/node_modules/reldens`,
         * which is wrong under npm workspaces hoisting - pass it explicitly.
         */
        reldensModulePath?: string;
        jsSourceMaps?: boolean;
        cssSourceMaps?: boolean;
        /** A class (not an instance). Reldens does `new customPlugin()` then calls `setup({events})`. */
        customPlugin?: new () => { setup(props: { events: ReldensEventsManager }): unknown };
        /**
         * Runtime class overrides merged into `server/customClasses/*` config.
         * The precise bucket shapes (all eleven of them) live in
         * @reldens-tutorials/schemas' ServerCustomClassesSchema - kept loose here so
         * the zod-parsed config assigns cleanly.
         */
        customClasses?: Record<string, any>;
        [key: string]: any;
    }

    export class ServerManager {
        constructor(config: ServerManagerConfig, eventsManager?: ReldensEventsManager, dataServerDriver?: any);

        events: ReldensEventsManager;
        projectRoot: string;
        configManager: ServerConfigManager;
        themeManager: any;
        dataServer: any;
        featuresManager: any;
        roomsManager: any;
        loginManager: any;
        usersManager: any;
        serverAdmin: any;
        app: any;
        appServer: any;
        gameServer: any;

        createServers(): Promise<any>;
        start(): Promise<any>;

        [key: string]: any;
    }
}

declare module 'reldens/client' {
    import { ReldensEventsManager } from 'reldens-events';

    export class GameManager {
        constructor();

        events: ReldensEventsManager;
        config: any;
        gameDom: any;
        gameEngine: any;
        features: any;
        firebase: any;
        joinedRooms: Record<string, any>;
        userData: Record<string, any>;
        plugins: Record<string, any>;
        services: Record<string, any>;
        elements: Record<string, HTMLElement>;
        playerData: any;
        activeRoomEvents: any;
        appServerUrl: string;
        gameServerUrl: string;
        locale: string;

        setupCustomClientPlugin(customPluginKey: string, customPlugin: new () => any): void;
        clientStart(): void;
        startGame(formData: Record<string, any>, isNewUser?: boolean): Promise<any>;
        joinGame(formData: Record<string, any>, isNewUser?: boolean): Promise<any>;
        getActiveScene(): any;
        getActiveScenePreloader(): any;
        getCurrentPlayer(): any;
        currentPlayerName(): string;
        getAppServerUrl(): string;
        getGameServerUrl(): string;

        [key: string]: any;
    }
}

declare module 'reldens/lib/features/plugin-interface' {
    import { ReldensEventsManager } from 'reldens-events';

    /** Props Reldens passes to `setup()`. Which of these are populated depends on where the plugin is registered. */
    export interface PluginSetupProps {
        events: ReldensEventsManager;
        requiredProperties?: string[];
        dataServer?: any;
        config?: any;
        featuresManager?: any;
        themeManager?: any;
        gameManager?: any;
        [key: string]: any;
    }

    export class PluginInterface {
        setup(props: PluginSetupProps): Promise<boolean | void> | boolean | void;
        [key: string]: any;
    }
}

declare module 'reldens/lib/rooms/server/scene' {
    /**
     * The default room class. Every scene room in the game is one of these unless the
     * room row in the database sets `roomClassPath`, which looks the class up in
     * `server/customClasses/roomsClass/<roomClassPath>`.
     */
    export class RoomScene {
        roomId: string;
        roomName: string;
        sceneId: string;
        roomType: string;
        state: any;
        config: any;
        events: any;
        objectsManager: any;
        roomWorld: any;
        messageActions: Record<string, any>;
        clients: any[];

        onCreate(options: Record<string, any>): Promise<void>;
        onJoin(client: any, options: Record<string, any>, authResult?: any): Promise<void> | void;
        onLeave(client: any, consented?: boolean): Promise<void> | void;
        onDispose(): Promise<void> | void;
        savePlayerStats(playerSchema: any, client?: any): Promise<any>;
        broadcast(type: string | number, message?: any, options?: any): void;

        [key: string]: any;
    }
}

declare module 'reldens/lib/rooms/server/login' {
    export class RoomLogin {
        [key: string]: any;
    }
}

declare module 'reldens/lib/objects/server/object/type/npc-object' {
    /** Base class for interactive NPCs. Register subclasses under `customClasses.objects`. */
    export class NpcObject {
        id: string | number;
        key: string;
        title: string;
        options: Record<string, any>;
        objectIndex: string;
        client_key?: string;

        /**
         * Called when a player picks an option in this NPC's dialog box.
         * Call `super.executeMessageActions(...)` first: a `false` result means the
         * base class already handled (or rejected) the message.
         */
        executeMessageActions(client: any, data: any, room: any, playerSchema: any): Promise<boolean | void> | boolean | void;
        giveRewards(playerSchema: any, client: any): Promise<any>;

        [key: string]: any;
    }
}

declare module 'reldens/lib/objects/server/object/type/enemy-object' {
    export class EnemyObject {
        [key: string]: any;
    }
}

declare module 'reldens/lib/objects/client/animation-engine' {
    /** Client-side render/animation object. Register subclasses under `config.client.customClasses.objects`. */
    export class AnimationEngine {
        constructor(gameManager: any, props: Record<string, any>, currentPreloader: any);
        [key: string]: any;
    }
}

declare module 'reldens/lib/users/server/player' {
    export class Player {
        sessionId: string;
        player_id: number;
        state: { x: number; y: number; dir: string; scene: string; mov: boolean; [key: string]: any };
        stats: Record<string, number>;
        statsBase: Record<string, number>;
        inventory: any;
        currentClassPath: any;
        [key: string]: any;
    }
}

declare module 'reldens/lib/game/constants' {
    export const GameConst: Record<string, any>;
}

declare module 'reldens/lib/rooms/constants' {
    export const RoomsConst: Record<string, any>;
}

declare module 'reldens/lib/objects/constants' {
    export const ObjectsConst: Record<string, any>;
}

declare module 'reldens/lib/actions/constants' {
    export const ActionsConst: Record<string, any>;
}

declare module 'reldens/lib/users/constants' {
    export const UsersConst: Record<string, any>;
}

declare module 'reldens/lib/chat/constants' {
    export const ChatConst: Record<string, any>;
}

declare module 'reldens/lib/world/constants' {
    export const WorldConst: Record<string, any>;
}

/**
 * Fallback for every other deep require into the package. Keep it last: TypeScript
 * prefers the most specific wildcard match, so the explicit declarations above win.
 */
declare module 'reldens/lib/*' {
    const anyExport: any;
    export = anyExport;
}

declare module '@reldens/utils' {
    export const sc: {
        get<T = any>(source: any, key: string, defaultValue?: T): T;
        hasOwn(source: any, key: string | string[]): boolean;
        isArray(value: any): boolean;
        isObject(value: any): boolean;
        isTrue(source: any, key: string): boolean;
        deepMergeProperties<T>(target: T, source: any): T;
        [key: string]: any;
    };
    export const Logger: {
        emergency(...args: any[]): void;
        alert(...args: any[]): void;
        critical(...args: any[]): void;
        error(...args: any[]): void;
        warning(...args: any[]): void;
        notice(...args: any[]): void;
        info(...args: any[]): void;
        debug(...args: any[]): void;
        [key: string]: any;
    };
    export const ErrorManager: { error(...args: any[]): never; [key: string]: any };
    export const EventsManagerSingleton: import('reldens-events').ReldensEventsManager;
    export class EventsManager {
        [key: string]: any;
    }
    export class InteractionArea {
        [key: string]: any;
    }
    export const SchemaValidator: any;
    export const ValidatorInterface: any;
    export const EnvVar: any;
    export const PageRangeProvider: any;
}

declare module '@reldens/server-utils' {
    export const FileHandler: {
        joinPaths(...paths: string[]): string;
        exists(path: string): boolean;
        isFile(path: string): boolean;
        readFolder(path: string): string[];
        createFolder(path: string): void;
        remove(path: string): void;
        [key: string]: any;
    };
    export class AppServerFactory {
        [key: string]: any;
    }}

declare module '@reldens/items-system' {
    export const ItemsConst: Record<string, any>;
    export const ItemsEvents: Record<string, any>;
    export class ItemsServer { constructor(props?: any); [key: string]: any }
    export class ItemsManager { constructor(props?: any); [key: string]: any }
    export class Inventory { constructor(props?: any); [key: string]: any }
    export class ItemBase { constructor(props?: any); [key: string]: any }
    export class ItemSingle { constructor(props?: any); [key: string]: any }
    export class ItemSingleUsable { constructor(props?: any); [key: string]: any }
    export class ItemSingleEquipment { constructor(props?: any); [key: string]: any }
    export class ItemEquipment { constructor(props?: any); [key: string]: any }
    export class ItemUsable { constructor(props?: any); [key: string]: any }
    export class ItemGroup { constructor(props?: any); [key: string]: any }
    export class ExchangePlatform { constructor(props?: any); [key: string]: any }
    export class ExchangeRequirement { constructor(props?: any); [key: string]: any }
    export class ExchangeReward { constructor(props?: any); [key: string]: any }
    export class RequirementsCollection { constructor(props?: any); [key: string]: any }
    export class RewardsCollection { constructor(props?: any); [key: string]: any }}

declare module '@reldens/modifiers' {
    export const ModifierConst: Record<string, any>;
    export class Modifier { constructor(props?: any); [key: string]: any }
    export class Condition { constructor(props?: any); [key: string]: any }
    export class Calculator { constructor(props?: any); [key: string]: any }
    export class PropertyManager { constructor(props?: any); [key: string]: any }}

declare module '@reldens/skills' {
    export const SkillConst: Record<string, any>;
    export const SkillsEvents: Record<string, any>;
    export class ClassPath { constructor(props?: any); [key: string]: any }
    export class LevelsSet { constructor(props?: any); [key: string]: any }
    export class Level { constructor(props?: any); [key: string]: any }
    export class Skill { constructor(props?: any); [key: string]: any }
    export class Attack { constructor(props?: any); [key: string]: any }
    export class Effect { constructor(props?: any); [key: string]: any }
    export class PhysicalAttack { constructor(props?: any); [key: string]: any }
    export class PhysicalEffect { constructor(props?: any); [key: string]: any }}

declare module '@reldens/storage' {
    export class BaseDriver {
        create(data: Record<string, any>): Promise<any>;
        loadAll(): Promise<any[]>;
        loadOne(filters: Record<string, any>): Promise<any>;
        loadOneBy(field: string, value: any): Promise<any>;
        loadBy(field: string, value: any): Promise<any[]>;
        updateById(id: number | string, data: Record<string, any>): Promise<any>;
        deleteById(id: number | string): Promise<any>;
        [key: string]: any;
    }}
