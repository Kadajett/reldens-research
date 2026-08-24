/**
 * Provenance metadata.
 *
 * Every schema in this package records where its shape came from in the reldens
 * source, and whether that shape was read directly or inferred. The vocabulary is
 * borrowed from graphify, which tags each graph edge the same way:
 *
 *   EXTRACTED  the shape is a literal in the source. A required field is required
 *              because a specific line throws without it; a string union is that
 *              union because those are the values the source assigns.
 *   INFERRED   the shape was derived by reading the surrounding code rather than
 *              read off a single line: a payload assembled across several call
 *              sites, a field whose type is only implied by how it is used.
 *
 * Nothing here is guessed. If a shape could not be established either way it is
 * modelled as `z.unknown()` with a note, not as a plausible-looking object.
 */
import { z } from 'zod';

export type Confidence = 'EXTRACTED' | 'INFERRED';

export interface SourceRef {
    /** Path inside the reldens package, e.g. 'lib/game/server/manager.js'. */
    file: string;
    /** 1-based line number. */
    line: number;
    /** What that line does, in a few words. */
    note?: string;
}

export interface SchemaProvenance {
    confidence: Confidence;
    /** The lines this shape was read from. At least one. */
    sources: SourceRef[];
    /** The reldens version the shape was verified against. */
    verifiedAgainst?: string;
}

function formatSource(ref: SourceRef): string {
    return ref.file+':L'+ref.line+(ref.note ? ' - '+ref.note : '');
}

/**
 * Attaches provenance to a schema and folds it into the schema's description, so it
 * survives into JSON Schema output and shows up in editor hovers.
 */
export function withSource<T extends z.ZodType>(
    schema: T,
    provenance: SchemaProvenance & {describe?: string}
): T {
    const lines = [
        provenance.describe,
        '['+provenance.confidence+'] '+provenance.sources.map(formatSource).join('; ')
    ].filter(Boolean);
    return schema.meta({
        description: lines.join('\n'),
        reldensProvenance: provenance
    }) as T;
}

/** Reads back the provenance attached by {@link withSource}, if any. */
export function sourceOf(schema: z.ZodType): SchemaProvenance | undefined {
    const meta = z.globalRegistry.get(schema) as {reldensProvenance?: SchemaProvenance} | undefined;
    return meta?.reldensProvenance;
}
