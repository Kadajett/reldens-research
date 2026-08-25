/**
 * Enums and constant values from @reldens/skills lib/constants.js (SkillConst).
 *
 * Skill type ids, send behaviors, the `rski.`-prefixed wire action codes, and the
 * skill-state names an execution passes through. The zod schemas validate a value is
 * one the engine accepts; the plain objects mirror SkillConst for reference by name.
 */
import { z } from 'zod';

/** Skill type ids (SkillConst.SKILL.TYPE). */
export const SKILL_TYPES = {
    BASE: 1,
    ATTACK: 2,
    EFFECT: 3,
    PHYSICAL_ATTACK: 4,
    PHYSICAL_EFFECT: 5,
} as const;
export const skillTypeSchema = z.union([
    z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5),
]);
export type SkillType = z.infer<typeof skillTypeSchema>;

/** How the server dispatches a skill action result (SkillConst.BEHAVIOR_*). */
export const SEND_BEHAVIORS = { SEND: 'send', BROADCAST: 'broadcast', BOTH: 'both' } as const;
export const sendBehaviorSchema = z.enum(['send', 'broadcast', 'both']);
export type SendBehavior = z.infer<typeof sendBehaviorSchema>;

/** The `skills_` model/table prefix. */
export const MODELS_PREFIX = 'skills_';

/** States a skill execution reports (SkillConst.SKILL_STATES). */
export const SKILL_STATES = {
    PHYSICAL_SKILL_INVALID_TARGET: 'physicalSkillInvalidTarget',
    PHYSICAL_SKILL_RUN_LOGIC: 'physicalSkillRunLogic',
    OUT_OF_RANGE: 'outOfRange',
    CAN_NOT_ACTIVATE: 'canNotActivate',
    DODGED: 'dodged',
    APPLYING_DAMAGE: 'applyingDamage',
    APPLIED_DAMAGE: 'appliedDamage',
    APPLIED_CRITICAL_DAMAGE: 'appliedCriticalDamage',
    APPLYING_EFFECTS: 'applyingEffects',
    APPLIED_EFFECTS: 'appliedEffects',
    EXECUTE_PHYSICAL_ATTACK: 'executePhysicalAttack',
    TARGET_NOT_AVAILABLE: 'targetNotAvailable',
} as const;
export const skillStateSchema = z.enum([
    'physicalSkillInvalidTarget', 'physicalSkillRunLogic', 'outOfRange', 'canNotActivate',
    'dodged', 'applyingDamage', 'appliedDamage', 'appliedCriticalDamage', 'applyingEffects',
    'appliedEffects', 'executePhysicalAttack', 'targetNotAvailable',
]);
export type SkillState = z.infer<typeof skillStateSchema>;

/** The `rski.`-prefixed wire action codes (SkillConst.ACTION_*). */
const p = 'rski.';
export const ACTIONS = {
    INIT_LEVEL_SET_START: p + 'ILss', INIT_LEVEL_SET_END: p + 'ILse',
    INIT_CLASS_PATH_END: p + 'ICpe', LOADED_OWNER_SKILLS: p + 'Los',
    SET_SKILLS: p + 'Sk', SET_LEVELS: p + 'Sl',
    ADD_SKILLS_BEFORE: p + 'Asb', ADD_SKILLS_AFTER: p + 'Asa',
    REMOVE_SKILLS_BEFORE: p + 'Rsb', REMOVE_SKILLS_AFTER: p + 'Rsa',
    VALIDATE_BEFORE: p + 'Bv', VALIDATE_SUCCESS: p + 'Vs', VALIDATE_FAIL: p + 'Vf',
    EXECUTING_SKILL: p + 'Es', LEVEL_EXPERIENCE_ADDED: p + 'Ea',
    LEVEL_UP: p + 'Lu', LEVEL_DOWN: p + 'Ld', LEVEL_APPLY_MODIFIERS: p + 'Apm',
    SKILL_BEFORE_IN_RANGE: p + 'Bir', SKILL_AFTER_IN_RANGE: p + 'Air',
    SKILL_BEFORE_EXECUTE: p + 'Be', SKILL_AFTER_EXECUTE: p + 'Ae',
    SKILL_BEFORE_CAST: p + 'Bc', SKILL_AFTER_CAST: p + 'Ac',
    SKILL_ATTACK_APPLY_DAMAGE: p + 'Ad',
    SKILL_BEFORE_RUN_LOGIC: p + 'Brl', SKILL_AFTER_RUN_LOGIC: p + 'Arl',
    SKILL_PHYSICAL_ATTACK_HIT: p + 'Pah', SKILL_PHYSICAL_EFFECT_HIT: p + 'Peh',
} as const;
