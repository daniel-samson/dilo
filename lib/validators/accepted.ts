import { Validates } from "../mod.ts";

/**
 * Validates that a value is either "yes", "on", 1, "1", true, or "true".
 */
export class Accepted implements Validates {
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (["yes", "on", 1, "1", true, "true"].includes(haystack[needle])) {
            return undefined;
        }

        return `${needle}.accepted`;
    }
}

/**
 * Validates that a value is either "no", "off", 0, "0", false, or "false".
 */
export class Declined implements Validates {
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (["no", "off", 0, "0", false, "false"].includes(haystack[needle])) {
            return undefined;
        }

        return `${needle}.accepted`;
    }
}