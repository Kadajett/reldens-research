/**
 * Schemas for every server-to-client message, keyed by wire act value.
 *
 * Built from the extracted send/broadcast sites: each schema demands the literal
 * act plus the keys present at every site; keys that appear only at some sites are
 * optional. Value types stay unknown - the extraction proves the keys, not the
 * types - except where a hand-verified schema in protocol.ts already pins them
 * (UI, CLOSE_UI, START_GAME, ...), which win via serverMessageSchemaFor.
 */
import { z } from 'zod';
import { RELDENS_SERVER_MESSAGE_INFO, type ServerMessageInfo } from './generated/server-messages';
import {
    StartGameMessageSchema,
    CreatePlayerResultMessageSchema,
    UiMessageSchema,
    CloseUiMessageSchema,
    BattleEndedMessageSchema
} from './protocol';
import { RELDENS_CONSTANTS } from './generated/constants';

export { RELDENS_SERVER_MESSAGE_INFO };
export type { ServerMessageInfo };

const Game = RELDENS_CONSTANTS.GameConst;

/** Hand-verified message schemas by act value; these override the generated ones. */
const verified: Record<string, z.ZodType> = {
    [Game['START_GAME']]: StartGameMessageSchema,
    [Game['CREATE_PLAYER_RESULT']]: CreatePlayerResultMessageSchema,
    [Game['UI']]: UiMessageSchema,
    [Game['CLOSE_UI_ACTION']]: CloseUiMessageSchema,
    [RELDENS_CONSTANTS.ActionsConst['BATTLE_ENDED']]: BattleEndedMessageSchema
};

const generated = new Map<string, z.ZodType>();
for(const [act, info] of Object.entries(RELDENS_SERVER_MESSAGE_INFO)){
    const shape: Record<string, z.ZodType> = {act: z.literal(act)};
    for(const key of info.requiredKeys){
        if('act' !== key){
            shape[key] = z.unknown();
        }
    }
    for(const key of info.sometimesKeys){
        if('act' !== key){
            shape[key] = z.unknown().optional();
        }
    }
    generated.set(act, z.looseObject(shape).meta({
        description: 'Sent via '+info.channels.join('/')+' at '+info.sites.join('; '),
        reldensMessageInfo: info
    }));
}

/** The strongest schema for a server message act: hand-verified > generated keys. */
export function serverMessageSchemaFor(act: string): z.ZodType | null {
    return verified[act] ?? generated.get(act) ?? null;
}

/** Validates any inbound server message by its act field; unknown acts pass through. */
export const AnyServerMessageSchema = z.looseObject({act: z.string().optional()})
    .check((ctx) => {
        const act = ctx.value.act;
        if(!act){
            return;
        }
        const schema = serverMessageSchemaFor(act);
        if(!schema){
            return;
        }
        const result = schema.safeParse(ctx.value);
        if(!result.success){
            for(const issue of result.error.issues){
                ctx.issues.push({
                    code: 'custom',
                    path: issue.path,
                    message: '['+act+'] '+issue.message,
                    input: ctx.value
                });
            }
        }
    });

/** Every act value the extraction found a literal for. */
export const KNOWN_SERVER_MESSAGE_ACTS = Object.keys(RELDENS_SERVER_MESSAGE_INFO).sort();
