/**
 * Skills, class paths and modifiers.
 *
 * @reldens/skills models progression as a ClassPath holding a LevelsSet: each
 * Level grants skills, and each Skill is an Attack, an Effect, or a subclass of
 * one. @reldens/modifiers is what those skills actually apply - a Modifier
 * changes a property on a target, optionally gated by a Condition.
 *
 * Like items, the platform wires this up during player load. A player's live
 * class path is on `playerSchema.currentClassPath`.
 */
import { SkillConst, SkillsEvents } from '@reldens/skills';
import { ModifierConst } from '@reldens/modifiers';
import type { ReldensEventsManager } from 'reldens-events';

export function registerSkillsHooks(events: ReldensEventsManager): void {

    // Fires when a fight ends, on both the PvE and PvP paths.
    events.on('reldens.battleEnded', (_props: any) => {
        // TODO
    });

    // TODO: level-up rewards, skill unlock side effects, custom cooldown rules.
    void SkillConst;
    void SkillsEvents;
    void ModifierConst;

}
