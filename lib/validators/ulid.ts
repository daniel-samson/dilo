import type { Operands } from "../types.ts";

export class Ulid {
  validate(
    haystack: Record<string, string>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (typeof value !== "string") {
      return `${needle}.ulid`;
    }

    const ulidRegex = /^[0-9A-HJ-KMNP-TV-Z]{26}$/;
    return ulidRegex.test(value) ? undefined : `${needle}.ulid`;
  }
}
