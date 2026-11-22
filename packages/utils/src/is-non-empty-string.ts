import type { Brand } from "./brand";

export type NonEmptyString = Brand<string, "NonEmptyString">;

export const isNonEmptyString = (
  value: string | undefined | null
): value is NonEmptyString =>
  value !== undefined && value !== null && value !== "";
