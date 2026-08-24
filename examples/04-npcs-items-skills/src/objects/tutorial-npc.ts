/**
 * A talking NPC.
 *
 * An NPC's dialog box is data: the `objects` row carries the title and the
 * option list, and the client renders it. What a chosen option *does* is code,
 * and this is where it goes.
 *
 * `executeMessageActions` runs when a player picks an option. Call super first:
 * a `false` result means the base class already handled the message (or rejected
 * it), and continuing past that point double-handles it.
 *
 * `data.value` is the index into `this.options`; each option has a `key` and a
 * `value`, both configured in the admin panel. The `value` strings below ('1',
 * '2', ...) are whatever you set there, not a platform convention.
 */
import { NpcObject } from 'reldens/lib/objects/server/object/type/npc-object';
import { GameConst } from 'reldens/lib/game/constants';

export class TutorialNpc extends NpcObject {

    override async executeMessageActions(
        client: any,
        data: any,
        room: any,
        playerSchema: any
    ): Promise<boolean | void> {
        const superResult = await super.executeMessageActions(client, data, room, playerSchema);
        if(false === superResult){
            return false;
        }

        const selectedOption = String(this.options?.[data.value]?.value ?? '');
        if('' === selectedOption){
            return false;
        }

        // Replying into the open dialog box: `act: GameConst.UI` with this object's id
        // updates the box in place. GameConst.CLOSE_UI_ACTION closes it.
        client.send('*', {act: GameConst.UI, id: this.id, content: 'TODO: say something'});

        // TODO: branch on selectedOption and do the work. Some things worth trying:
        //  - restore a stat:      playerSchema.stats.hp = playerSchema.statsBase.hp
        //                         then await room.savePlayerStats(playerSchema, client)
        //  - give an item:        await this.giveRewards(playerSchema, client)
        //  - take an item:        playerSchema.inventory.manager.findItemByKey('branch')
        //                         then decreaseItemQty(item.uid, 1)
        //  - gate on inventory:   check qty before handing anything over
        //
        // Working versions of all of these ship with the platform, in
        // node_modules/reldens/theme/plugins/objects/server/.

        return true;
    }

}
