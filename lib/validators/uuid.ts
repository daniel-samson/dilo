import type { Validates } from "../mod.ts";
import type { Operands } from "../types.ts";

export class Uuid implements Validates {
  validate(
    haystack: Record<string, string>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (typeof value !== "string") {
      return `${needle}.uuid`;
    }

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return uuidRegex.test(value) ? undefined : `${needle}.uuid`;
  }
}
