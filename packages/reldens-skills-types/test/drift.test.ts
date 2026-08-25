/**
 * Drift detection for @reldens/skills. Loads the real installed package and asserts the
 * exports, constant/event vocabularies, and fixture-shape acceptance the schemas encode
 * still hold. A failure names exactly what drifted - the signal to update and re-verify.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import { SKILL_TYPES, SEND_BEHAVIORS, SKILL_STATES, ACTIONS, MODELS_PREFIX } from '../src/constants';
import { SKILLS_EVENTS } from '../src/events';
import { skillPropsSchema, attackPropsSchema, physicalAttackPropsSchema, effectPropsSchema } from '../src/skill';
import { levelPropsSchema } from '../src/level';

const require = createRequire(import.meta.url);
const pkg = require('@reldens/skills');
const pkgJson = require('@reldens/skills/package.json') as { version: string };
const C = pkg.SkillConst as Record<string, any>;
const E = pkg.SkillsEvents as Record<string, unknown>;

const PINNED = '0.48.0';
const owner = { getPosition: () => ({ x: 0, y: 0 }), executePhysicalSkill: () => {} };

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){
        console.log(`note: installed @reldens/skills is ${pkgJson.version}, schemas verified against ${PINNED}`);
    }
    assert.ok(pkgJson.version);
});

test('every documented export still exists on the package', () => {
    const expected = ['SkillsEvents', 'Receiver', 'ClassPath', 'LevelsSet', 'Level', 'Skill',
        'SkillConst', 'Attack', 'Effect', 'PhysicalAttack', 'PhysicalEffect'];
    const missing = expected.filter((n) => !(n in pkg));
    assert.equal(missing.length, 0, 'exports removed/renamed: ' + missing.join(', '));
});

test('skill type ids match SkillConst.SKILL.TYPE', () => {
    assert.deepEqual(SKILL_TYPES, C.SKILL.TYPE);
});

test('send behaviors and models prefix match SkillConst', () => {
    assert.deepEqual(SEND_BEHAVIORS, { SEND: C.BEHAVIOR_SEND, BROADCAST: C.BEHAVIOR_BROADCAST, BOTH: C.BEHAVIOR_BOTH });
    assert.equal(MODELS_PREFIX, C.MODELS_PREFIX);
});

test('skill states match SkillConst.SKILL_STATES', () => {
    assert.deepEqual(SKILL_STATES, C.SKILL_STATES);
});

test('action codes match SkillConst.ACTION_*', () => {
    assert.equal(ACTIONS.LEVEL_UP, C.ACTION_LEVEL_UP);
    assert.equal(ACTIONS.SET_SKILLS, C.ACTION_SET_SKILLS);
    assert.equal(ACTIONS.SKILL_PHYSICAL_ATTACK_HIT, C.ACTION_SKILL_PHYSICAL_ATTACK_HIT);
    assert.equal(ACTIONS.INIT_CLASS_PATH_END, C.ACTION_INIT_CLASS_PATH_END);
});

test('event names match SkillsEvents', () => {
    assert.equal(SKILLS_EVENTS.LEVEL_UP, E.LEVEL_UP);
    assert.equal(SKILLS_EVENTS.SKILL_AFTER_RUN_LOGIC, E.SKILL_AFTER_RUN_LOGIC);
    assert.equal(SKILLS_EVENTS.EXECUTING_SKILL, E.EXECUTING_SKILL);
    assert.equal(SKILLS_EVENTS.SKILL_PHYSICAL_EFFECT_HIT, E.SKILL_PHYSICAL_EFFECT_HIT);
});

test('schemas accept the package\'s own skill fixtures (with an owner injected)', () => {
    const fx = require('@reldens/skills/tests/fixtures/skills/base-skills').BaseSkillsFixtures as Record<string, any>;
    // basicSkill -> base Skill; attackSkill -> Attack; physicalAttackSkill -> PhysicalAttack; effectSkill -> Effect
    assert.ok(skillPropsSchema.safeParse({ ...fx.basicSkill, owner }).success, 'basicSkill');
    assert.ok(attackPropsSchema.safeParse({ ...fx.attackSkill, owner }).success, 'attackSkill');
    assert.ok(physicalAttackPropsSchema.safeParse({ ...fx.physicalAttackSkill, owner }).success, 'physicalAttackSkill');
    assert.ok(effectPropsSchema.safeParse({ ...fx.effectSkill, owner }).success, 'effectSkill');
});

test('required fields are enforced', () => {
    assert.ok(!skillPropsSchema.safeParse({ key: 'k' }).success, 'owner required');
    assert.ok(!skillPropsSchema.safeParse({ owner }).success, 'key required');
    assert.ok(!attackPropsSchema.safeParse({ key: 'k', owner }).success, 'affectedProperty required for Attack');
    assert.ok(!physicalAttackPropsSchema.safeParse({ key: 'k', owner, affectedProperty: 'stats/hp' }).success, 'magnitude required for physical');
});

test('level key must be an integer and accepts the snake_case xp alias', () => {
    assert.ok(!levelPropsSchema.safeParse({ key: 1.5 }).success, 'non-integer key rejected');
    assert.ok(levelPropsSchema.safeParse({ key: 2, required_experience: 100 }).success, 'required_experience alias');
});
