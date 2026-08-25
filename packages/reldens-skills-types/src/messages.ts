/**
 * Client<->server message payloads from @reldens/skills lib/client/receiver.js and
 * lib/server/sender.js. Every message is `{act, owner, data}` with `act` prefixed
 * `rski.`; the Receiver ignores anything not starting with that prefix. The `data`
 * payload varies per action, so it is a loose object here.
 */
import { z } from 'zod';
import { loose } from './zod-floors';

const ownerId = z.union([z.string(), z.number()]);

/** Any inbound message the Receiver will process (act must be a `rski.*` code). */
export const inboundSkillsMessageSchema = loose({
    act: z.string().refine((v) => v.startsWith('rski.'), 'act must be a rski.* action code'),
});
export type InboundSkillsMessage = z.infer<typeof inboundSkillsMessageSchema>;

/** The `{act, owner, data}` envelope every skills message uses. */
export const skillsMessageSchema = loose({
    act: z.string(),
    owner: ownerId.optional(),
    data: loose({}).optional(),
});
export type SkillsMessage = z.infer<typeof skillsMessageSchema>;
