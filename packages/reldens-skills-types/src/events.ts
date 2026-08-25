/**
 * The event-name catalog from @reldens/skills lib/skills-events.js (SkillsEvents).
 * Every name the engine fires, prefixed `reldens.skills.`.
 */
import { z } from 'zod';

const p = 'reldens.skills.';

export const SKILLS_EVENTS = {
    INIT_LEVEL_SET_START: p + 'initLevelSetStart',
    INIT_LEVEL_SET_END: p + 'initLevelSetEnd',
    INIT_CLASS_PATH_END: p + 'initClassPathEnd',
    LOADED_OWNER_SKILLS: p + 'loadedOwnerSkills',
    SET_SKILLS: p + 'setSkills',
    SET_LEVELS: p + 'setLevels',
    GENERATED_LEVELS: p + 'generatedLevels',
    ADD_SKILLS_BEFORE: p + 'addSkillBefore',
    ADD_SKILLS_AFTER: p + 'addSkillAfter',
    REMOVE_SKILLS_BEFORE: p + 'removeSkillBefore',
    REMOVE_SKILLS_AFTER: p + 'removeSkillAfter',
    VALIDATE_BEFORE: p + 'beforeValidate',
    VALIDATE_SUCCESS: p + 'validateSuccess',
    VALIDATE_FAIL: p + 'validateFail',
    EXECUTING_SKILL: p + 'executingSkill',
    LEVEL_EXPERIENCE_ADDED: p + 'experienceAdded',
    LEVEL_UP: p + 'levelUp',
    LEVEL_DOWN: p + 'levelDown',
    LEVEL_APPLY_MODIFIERS: p + 'levelApplyModifiers',
    SKILL_BEFORE_IN_RANGE: p + 'beforeIsInRange',
    SKILL_AFTER_IN_RANGE: p + 'afterIsInRange',
    SKILL_BEFORE_EXECUTE: p + 'beforeExecute',
    SKILL_AFTER_EXECUTE: p + 'afterExecute',
    SKILL_BEFORE_CAST: p + 'beforeCast',
    SKILL_AFTER_CAST: p + 'afterCast',
    SKILL_BEFORE_RUN_LOGIC: p + 'beforeRunLogic',
    SKILL_AFTER_RUN_LOGIC: p + 'afterRanLogic',
    SKILL_APPLY_OWNER_EFFECTS: p + 'applyOwnerEffects',
    SKILL_ATTACK_APPLY_DAMAGE: p + 'attackApplyDamage',
    SKILL_EFFECT_TARGET_MODIFIERS: p + 'effectTargetModifiers',
    SKILL_PHYSICAL_ATTACK_HIT: p + 'physicalAttackOnHit',
    SKILL_PHYSICAL_EFFECT_HIT: p + 'physicalEffectOnHit',
} as const;

export const skillsEventNameSchema = z.enum(
    Object.values(SKILLS_EVENTS) as [string, ...string[]],
);
export type SkillsEventName = z.infer<typeof skillsEventNameSchema>;
