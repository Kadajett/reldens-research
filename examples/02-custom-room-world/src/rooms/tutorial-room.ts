/**
 * A custom room scene.
 *
 * Every scene room in the game is a `RoomScene` unless its row in the `rooms`
 * table sets `roomClassPath`. Reldens then looks that string up in
 * `server/customClasses/roomsClass/<roomClassPath>` and uses the class it finds.
 * That lookup is the entire registration mechanism - see plugin.ts.
 *
 * Lifecycle, in order:
 *   onCreate(options)   world, physics bodies, objects, message actions
 *   onJoin(client, ...) a player enters
 *   onMessage / message actions
 *   onLeave(client, consented)
 *   onDispose()         the last player left and the dispose timeout elapsed
 *
 * Always call `super` first in the lifecycle hooks. `super.onCreate` builds the
 * p2 world, loads objects from the database and sets up the collision manager;
 * nothing below it exists until it has run.
 */
import { RoomScene } from 'reldens/lib/rooms/server/scene';

export class TutorialRoom extends RoomScene {

    override async onCreate(options: Record<string, any>): Promise<void> {
        await super.onCreate(options);

        // At this point you have:
        //   this.roomWorld        the p2 physics world for this room
        //   this.objectsManager   objects loaded from the database for this room
        //   this.state            the Colyseus schema clients synchronise against
        //   this.config           the merged database + env configuration
        //   this.messageActions   the map of message handlers this room answers

        // TODO: room-specific setup. Spawn points, timers, custom bodies, a room
        //  scoped counter - anything that belongs to this scene and nothing else.
    }

    override async onJoin(client: any, options: Record<string, any>, authResult?: any): Promise<void> {
        await super.onJoin(client, options, authResult);

        // TODO: greet the player, apply a room specific buff, record an arrival.
        //  `this.state.players` is keyed by session id and only populated after super.
    }

    override async onLeave(client: any, consented?: boolean): Promise<void> {
        // TODO: anything that must happen while the player is still in state has to
        //  run BEFORE super.onLeave - that call is what removes them.

        await super.onLeave(client, consented);
    }

    override async onDispose(): Promise<void> {
        // TODO: clear timers you started in onCreate. Colyseus removes its own
        //  listeners; intervals and timeouts you created are yours to clean up.

        await super.onDispose();
    }

}
