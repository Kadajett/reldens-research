/**
 * A custom enemy.
 *
 * Enemies are objects too: same registration, different base class. The stats,
 * the skills they can use, the respawn area they belong to and the rewards they
 * drop are all rows in the database. Subclass when you want behaviour the data
 * cannot express - a boss that changes phase, an enemy that calls for help.
 */
import { EnemyObject } from 'reldens/lib/objects/server/object/type/enemy-object';

export class TutorialEnemy extends EnemyObject {

    // TODO: override what you need. Useful starting points on the base class:
    //  - the battle/PvE flow in node_modules/reldens/lib/actions/server/pve.js
    //  - respawn behaviour in node_modules/reldens/lib/respawn/
    //  - 'reldens.battleEnded' if you only need to react, not replace

}
