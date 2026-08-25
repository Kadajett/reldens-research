/**
 * Skill config shapes from @reldens/skills lib/skill.js and lib/types/*.
 *
 * `Skill` is the base; `Attack`/`Effect` extend it; `PhysicalAttack`/`PhysicalEffect`
 * extend those. Every field maps to a constructor read with its real default. `key` and
 * `owner` are required on every skill (the owner must expose `getPosition()`; physical
 * skills also need `owner.executePhysicalSkill()`). The engine forces `type`, so it is
 * not a user field. Modifier/condition/effect arrays hold @reldens/modifiers instances,
 * kept opaque here. Property paths like 'stats/hp' are plain slash-delimited strings.
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';

const stringOrFalse = z.union([z.string(), z.literal(false)]);
const propertyPaths = z.array(z.string());

/** `new Skill(props)` - the base every skill type extends. */
export const skillPropsSchema = loose({
    /** Unique skill key. Required. */
    key: z.string(),
    /** The owning entity; must expose getPosition(). Required (mutated by the engine). */
    owner: zInstance,
    ownerIdProperty: z.string().optional(),
    /** Free-form data attached to the skill; `false` when unset. */
    customData: zAny.optional(),
    autoValidation: z.boolean().optional(),
    /** Cooldown between activations, ms. This is the cooldown mechanism (there is no coolDown prop). */
    skillDelay: z.number().optional(),
    /** Cast time, ms. */
    castTime: z.number().optional(),
    /** Total uses cap; 0 = unlimited. */
    usesLimit: z.number().optional(),
    canActivate: z.boolean().optional(),
    /** Range; 0 = infinite. */
    range: z.number().optional(),
    groups: z.array(zAny).optional(),
    rangeAutomaticValidation: z.boolean().optional(),
    rangePropertyX: stringOrFalse.optional(),
    rangePropertyY: stringOrFalse.optional(),
    rangeTargetPropertyX: stringOrFalse.optional(),
    rangeTargetPropertyY: stringOrFalse.optional(),
    allowSelfTarget: z.boolean().optional(),
    /** Default target; an entity or `false` (can also be passed to execute()). */
    target: zAny.optional(),
    events: zAny.optional(),
    /** Conditions gating the skill; @reldens/modifiers Condition instances. */
    ownerConditions: z.array(zAny).optional(),
    /** Modifiers applied to the owner; @reldens/modifiers Modifier instances. */
    ownerEffects: z.array(zAny).optional(),
    /** Critical hit chance, 0-100. */
    criticalChance: z.number().optional(),
    criticalMultiplier: z.number().optional(),
    criticalFixedValue: z.number().optional(),
});
export type SkillProps = z.infer<typeof skillPropsSchema>;

/** `new Attack(props)` - Skill plus damage/aim/dodge properties. */
export const attackPropsSchema = skillPropsSchema.extend({
    /** Property path the damage affects (e.g. 'stats/hp'). Required. */
    affectedProperty: z.string(),
    allowEffectBelowZero: z.boolean().optional(),
    /** Damage at 100%. */
    hitDamage: z.number().optional(),
    /** Skip the damage calc and apply hitDamage raw. */
    applyDirectDamage: z.boolean().optional(),
    attackProperties: propertyPaths.optional(),
    defenseProperties: propertyPaths.optional(),
    aimProperties: propertyPaths.optional(),
    dodgeProperties: propertyPaths.optional(),
    dodgeFullEnabled: z.boolean().optional(),
    dodgeOverAimSuccess: z.number().optional(),
    damageAffected: z.boolean().optional(),
    criticalAffected: z.boolean().optional(),
    /** Map of property path -> @reldens/modifiers OPS operator. */
    propertiesTotalOperators: z.record(z.string(), zAny).optional(),
});
export type AttackProps = z.infer<typeof attackPropsSchema>;

/** Extra fields physical skills require (validated by physical-properties-validator). */
const physicalProps = {
    /** Required. */
    magnitude: z.number(),
    /** Required. */
    objectWidth: z.number(),
    /** Required. */
    objectHeight: z.number(),
    validateTargetOnHit: z.boolean().optional(),
};

/** `new PhysicalAttack(props)` - Attack plus physical hit geometry. */
export const physicalAttackPropsSchema = attackPropsSchema.extend(physicalProps);
export type PhysicalAttackProps = z.infer<typeof physicalAttackPropsSchema>;

/** `new Effect(props)` - Skill plus the modifiers it applies to the target. */
export const effectPropsSchema = skillPropsSchema.extend({
    /** Modifiers applied to the target; @reldens/modifiers Modifier instances. Required. */
    targetEffects: z.array(zAny),
});
export type EffectProps = z.infer<typeof effectPropsSchema>;

/** `new PhysicalEffect(props)` - Effect plus physical hit geometry. */
export const physicalEffectPropsSchema = effectPropsSchema.extend(physicalProps);
export type PhysicalEffectProps = z.infer<typeof physicalEffectPropsSchema>;
