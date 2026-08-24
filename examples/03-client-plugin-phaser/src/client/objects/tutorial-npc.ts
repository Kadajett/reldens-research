/**
 * A custom client-side object.
 *
 * AnimationEngine is what draws an object in the Phaser scene: sprite, animation
 * frames, depth, interaction area. The server decides what the object *is* and
 * what it does; this class decides how it looks and how it reacts to the mouse.
 *
 * Registered by client key in `config.client.customClasses.objects` - see
 * src/client/plugin.ts. The key is the object's `client_key`, which is also the
 * name of its sprite folder under assets/.
 */
import { AnimationEngine } from 'reldens/lib/objects/client/animation-engine';

export class TutorialNpc extends AnimationEngine {

    constructor(gameManager: any, props: Record<string, any>, currentPreloader: any) {
        super(gameManager, props, currentPreloader);

        // TODO: your customisations. The base class has already read the object's
        //  animation data off `props` at this point, so this is where you override
        //  frame rates, depth, or add a label above the sprite.
    }

    // TODO: override the render hooks you need. Read
    //  node_modules/reldens/lib/objects/client/animation-engine.js first - it is
    //  short, and it is the only documentation of what is safe to replace.

}
