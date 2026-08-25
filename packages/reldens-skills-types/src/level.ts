/**
 * Level and LevelsSet config from @reldens/skills lib/level.js and lib/levels-set.js.
 *
 * A `Level`'s `key` is the integer level number. `LevelsSet` is two-phase: its
 * constructor reads almost nothing; the real config goes to `init(props)`, where `levels`
 * is a MAP keyed by level number (not an array). `requiredExperience` also accepts the
 * snake_case alias `required_experience` (DB-style key tolerated).
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';

/** `new Level(props)`. */
export const levelPropsSchema = loose({
    /** Integer level number. Required. */
    key: z.number().int(),
    /** Modifiers applied at this level; @reldens/modifiers Modifier instances. */
    modifiers: z.array(zAny).optional(),
    label: z.string().optional(),
    /** XP required to reach this level; the alias `required_experience` is also read. */
    requiredExperience: z.number().optional(),
    required_experience: z.number().optional(),
});
export type LevelProps = z.infer<typeof levelPropsSchema>;

/**
 * `levelsSet.init(props)` - the real level config. `levels` is a map of level number ->
 * Level instance. The constructor only reads `events`/`owner`; everything else is here.
 */
export const levelsSetInitSchema = loose({
    /** Map of level number -> Level instance. Required (empty is rejected). */
    levels: z.record(z.string(), zInstance),
    autoFillRanges: z.boolean().optional(),
    autoFillExperienceMultiplier: z.number().optional(),
    currentLevel: z.number().int().optional(),
    currentExp: z.number().optional(),
    setRequiredExperienceLimit: z.boolean().optional(),
    ownerIdProperty: z.string().optional(),
    increaseLevelsWithExperience: z.boolean().optional(),
    /** Level keys ordered by experience; defaults to the sorted level keys. */
    levelsByExperience: z.array(z.string()).optional(),
});
export type LevelsSetInit = z.infer<typeof levelsSetInitSchema>;

/** `levelsSet.setOwner(props)` - owner must expose getPosition(). */
export const levelsSetOwnerSchema = loose({
    owner: zInstance,
    ownerIdProperty: z.string().optional(),
});
