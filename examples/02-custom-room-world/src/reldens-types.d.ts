/**
 * Pulls in the hand-written declarations for the reldens package.
 *
 * reldens is untyped CommonJS, so `packages/reldens-types` is where this repo
 * keeps its ambient module declarations. Everything there has an index
 * signature escape hatch, so if a member is missing you can still call it;
 * tighten the declaration when you learn its real shape.
 */
/// <reference types="@reldens-tutorials/types" />
