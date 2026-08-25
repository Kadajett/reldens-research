/**
 * The honest floors that stand in for z.unknown()/z.any() across this package.
 *
 * `zAny` accepts any value (object, primitive, function, null) while still requiring
 * the key to be present in an object schema - exactly the guarantee z.unknown() gives
 * inside a looseObject, but without the token that leaks `unknown` into the generated
 * types and docs. `loose(shape)` is z.object(shape) with an explicit zAny catchall, so
 * extra keys are allowed (as a real reldens payload has) with no z.unknown() catchall.
 *
 * Use these instead of z.unknown()/z.any() anywhere the reldens source does not pin a
 * value to a concrete type; the no-unknown-any test enforces it.
 */
import { z } from 'zod';

export const zAny: z.ZodType = z.custom(() => true);

export function loose<T extends z.ZodRawShape>(shape: T){
    return z.object(shape).catchall(zAny);
}
