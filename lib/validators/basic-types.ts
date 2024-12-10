import { Validates } from "../interfaces/validates.ts";

/**
 * Validates that a value is an array.
 */
export class ArrayType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (Array.isArray(haystack[needle])) {
            return undefined;
        }

        return `${needle}.array`;
    }
}

/**
 * Validates that a value is an object.
 */
export class ObjectType implements Validates {
    /**
     * Validates that a value is an object.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (haystack[needle] !== null && typeof haystack[needle] === 'object') {
            if (operands['keys']) {
                const keys = operands['keys'];
                for (const key of keys) {
                    if (!Object.prototype.hasOwnProperty.call(haystack[needle], key)) {
                        return `${needle}.object`;
                    }
                }
            }

            return undefined;
        }

        return `${needle}.object`;
    }
}

/**
 * Validates that a value is a boolean.
 */
export class BooleanType implements Validates {
    /**
     * Validates that a value is an array.
     *

     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>, operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if ([false, "false", true, "true", 0, 1, "0", "1"].includes(haystack[needle])) {
            return undefined;
        }

        return `${needle}.boolean`;
    }
}

/**
 * Validates that a value is a date.
 */
export class DateType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (haystack[needle] instanceof Date) {
            return undefined;
        }

        try {
            const date = new Date(haystack[needle]);
            if (date.toString() !== "Invalid Date") {
                return undefined;
            }
        } catch (_) {
            return `${needle}.date`;
        }

        return`${needle}.date`
    }
}

export class DecimalType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        const value = String(haystack[needle]);
        let regex = /^$/;
        const placesFrom = operands['placesFrom'];
        const placesTo = operands['placesTo'];
        if (!placesTo) {
            throw new Error("decimal requires you to specify decimal places eg. decimal:1,4 or decimal:2");
        }

        if (placesFrom && placesTo) {
            regex = new RegExp(`^\\-?\\d*\\.\\d{${placesFrom},${placesTo}}$`);
        } else if (placesTo) {
            regex = new RegExp(`^\\-?\\d*\\.\\d{${placesTo}}$`);
        }

        if (regex.test(value)) {
            return undefined;
        }

        return `${needle}.decimal`;
    }
}

export class IntegerType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (haystack[needle] !== undefined && Number.isInteger(haystack[needle])) {
            return undefined;
        }

        return `${needle}.integer`;
    }
}

export class JsonType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        try {
            JSON.parse(haystack[needle]);
            return undefined;
        } catch (_) {
            return `${needle}.json`;
        }
    }
}

export class NumericType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (haystack[needle] !== null && Number.isFinite(haystack[needle])) {
            return undefined;
        }

        return `${needle}.numeric`;
    }
}

export class StringType implements Validates {
    /**
     * Validates that a value is an array.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | undefined {
        const needle = operands['attribute'];
        if (typeof haystack[needle] === 'string') {
            return undefined;
        }

        return `${needle}.string`;
    }
}