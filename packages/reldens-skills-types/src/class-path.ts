/**
 * ClassPath config from @reldens/skills lib/class-path.js. ClassPath extends LevelsSet,
 * so its `init(props)` first runs LevelsSet.init (all those fields apply) then reads the
 * class-path fields below. In practice SkillsServer forwards ONE flat props object to the
 * constructor, setOwner and init, so you build a single config; `classPathConfigSchema`
 * models that whole object.
 *
 * `skillsByLevel` maps a level number to an array of instantiated Skill/Attack/Effect
 * objects; `currentSkills` is a skillKey -> skill map (auto-built from skillsByLevel when
 * omitted). Both, and `labelsByLevel`, are `false` when unset.
 */
import { z } from 'zod';
import { zAny, zInstance, loose } from './zod-floors';
import { levelsSetInitSchema } from './level';

const recordOrFalse = <T extends z.ZodTypeAny>(v: T) =>
    z.union([z.record(z.string(), v), z.literal(false)]);

/** The class-path-specific fields read in ClassPath.init (on top of LevelsSet.init). */
export const classPathInitSchema = levelsSetInitSchema.extend({
    /** Class-path code. Required. */
    key: z.string(),
    label: z.string().optional(),
    /** Map of level number -> display label, or false. */
    labelsByLevel: recordOrFalse(z.string()).optional(),
    currentLabel: z.string().optional(),
    /** Map of level number -> array of Skill instances, or false. */
    skillsByLevel: recordOrFalse(z.array(zInstance)).optional(),
    /** Map of skill key -> Skill instance, or false (auto-built from skillsByLevel). */
    currentSkills: recordOrFalse(zInstance).optional(),
    affectedProperty: z.union([z.string(), z.literal(false)]).optional(),
});
export type ClassPathInit = z.infer<typeof classPathInitSchema>;

/**
 * The full single config object passed through SkillsServer: the owner plus every
 * ClassPath/LevelsSet field. Use this when you drive skills via the server wrapper.
 */
export const classPathConfigSchema = classPathInitSchema.extend({
    /** The owning entity; must expose getPosition(). Required. */
    owner: zInstance,
});
export type ClassPathConfig = z.infer<typeof classPathConfigSchema>;

/** `new SkillsServer(props)` - a ClassPath config plus an optional wire `client`. */
export const skillsServerPropsSchema = loose({
    owner: zInstance,
    /** Client with send() and broadcast(); optional. */
    client: zAny.optional(),
});
export type SkillsServerProps = z.infer<typeof skillsServerPropsSchema>;
