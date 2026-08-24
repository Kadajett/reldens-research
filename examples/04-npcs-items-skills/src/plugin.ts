/**
 * Registers the custom object classes and the item/skill hooks.
 *
 * `customClasses.objects` is keyed by the object's class key. On a stock install
 * with sample data those keys look like 'npc_2', 'npc_4', 'npc_5' - they come
 * from the `objects` row, so check the admin panel (Objects > class key) for the
 * real value in your database rather than guessing.
 */
import { PluginInterface, type PluginSetupProps } from 'reldens/lib/features/plugin-interface';
import type { ReldensEventsManager } from 'reldens-events';
import { TutorialNpc } from './objects/tutorial-npc';
import { TutorialEnemy } from './objects/tutorial-enemy';
import { registerItemsHooks } from './systems/items';
import { registerSkillsHooks } from './systems/skills';

export class ServerPlugin extends PluginInterface {

    events!: ReldensEventsManager;

    override setup(props: PluginSetupProps): boolean {
        this.events = props.events;

        this.events.on('reldens.beforeInitializeManagers', (eventProps: any) => {
            this.registerCustomClasses(eventProps);
        });

        registerItemsHooks(this.events);
        registerSkillsHooks(this.events);

        return true;
    }

    registerCustomClasses(props: any): void {
        const customClasses = props.serverManager.configManager.configList.server.customClasses;
        customClasses.objects ??= {};

        // TODO: replace these keys with the class keys from your own objects rows.
        customClasses.objects['npc_2'] = TutorialNpc;
        customClasses.objects['enemy_1'] = TutorialEnemy;
    }

}
