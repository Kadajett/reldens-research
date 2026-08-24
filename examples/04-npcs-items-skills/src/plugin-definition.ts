/**
 * This plugin, declared as data and validated against the extracted platform rules.
 */
import { validateDemoPlugin } from '@reldens-tutorials/schemas';
import { TutorialNpc } from './objects/tutorial-npc';
import { TutorialEnemy } from './objects/tutorial-enemy';

export const pluginDefinition = validateDemoPlugin({
    name: 'npcs-items-skills-demo',
    kind: 'custom-server',
    summary: 'Custom NPC and enemy classes plus item and skill hooks.',
    listensTo: [
        {event: 'reldens.beforeInitializeManagers', purpose: 'register the object classes'},
        {event: 'reldens.battleEnded', purpose: 'react to kills for drops and progress'},
        // These two are runtime-built names from @reldens/items-system and
        // @reldens/skills; the schema knows them because the generator dumps the
        // packages' event modules at require() time.
        {event: 'reldens.items.addItem', purpose: 'observe inventory additions'},
        {event: 'reldens.skills.levelUp', purpose: 'level-up rewards'}
    ],
    registers: [
        {
            bucket: 'server/customClasses/objects',
            key: 'npc_2',
            classRef: TutorialNpc,
            describedAs: 'dialog NPC - key must match the objects row object_class_key'
        },
        {
            bucket: 'server/customClasses/objects',
            key: 'enemy_1',
            classRef: TutorialEnemy,
            describedAs: 'custom enemy - key must match the objects row object_class_key'
        }
    ]
});
