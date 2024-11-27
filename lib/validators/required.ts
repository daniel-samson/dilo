import { Validates } from "../interfaces/validates.ts";

export class Required implements Validates {
    validate(
        haystack: Record<string, any>,
        operands: Record<string, any>,
    ): string | undefined {
        const needle = operands['attribute'];
        if (
            [undefined, null, "", false].includes(haystack[needle]) ||
            (Array.isArray(haystack[needle]) && haystack[needle].length === 0)
        ) {
            return `${needle}.required`;
        }
    }
}
