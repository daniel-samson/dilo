import { Validates } from "../interfaces/validates.ts";
import {Haystack, Operands} from "../types.ts";

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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (Array.isArray(value)) {
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (value !== null && typeof value === 'object') {
            if (operands['keys']) {
                const keys = operands['keys'] as string[];
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if ([false, "false", true, "true", 0, 1, "0", "1"].includes(value as string | number | boolean)) {
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (value instanceof Date) {
            return undefined;
        }

        try {
            const date = new Date(value as string | number | Date);
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (value !== undefined && Number.isInteger(value)) {
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        try {
            JSON.parse(value as string);
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (value !== null && Number.isFinite(value)) {
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
    validate(haystack: Haystack,  operands: Operands): string | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (typeof value === 'string') {
            return undefined;
        }

        return `${needle}.string`;
    }
}