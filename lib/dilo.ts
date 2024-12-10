import type {RuleParserInterface} from "./interfaces/rule-parser-interface.ts";
import type {ParsedRule} from "./interfaces/ruling.ts";
import type {Validates, ValidatesError} from "./mod.ts";
import { BuiltInParsingRules } from "./parser/mod.ts";
import { RuleParser } from "./parser/rule-parser.ts";
import BuiltInValidators from "./validators/mod.ts";

/**
 * Represents a validation utility that validates objects against defined rules.
 * The class parses field-specific rules, associates each with a validator, and verifies
 * objects according to the provided validation schema.
 */
export class Dilo {
    private rules: Record<string, string> = {};
    private parsedRules: Record<string, ParsedRule[]> = {};
    private validators: Record<string, Validates> = {};
    constructor(rules: Record<string, string>, ruleParser: RuleParserInterface, validators: Record<string, Validates>) {
        const fields = Object.keys(rules);
        if (fields.length === 0) {
            throw new Error("No rules have been registered");
        }

        for (const field of fields) {
            if (typeof rules[field] !== "string") {
                throw new Error("Rule must be a string");
            }

            this.parsedRules[field] = ruleParser.parseFieldRules(field, rules[field]);
        }
        this.validators = validators;
        this.rules = rules;
    }

    /**
     * Validates an object against the rules.
     * @param object The object to validate.
     * @returns A record of field names and error messages if the object is invalid, or undefined if the object is valid.
     */
    // deno-lint-ignore no-explicit-any
    validate(object: Record<string, any>): Record<string, Record<string, any>|undefined> | undefined {
        // deno-lint-ignore no-explicit-any
        const validation: Record<string, Record<string, any>|undefined> = {};

        const fields = Object.keys(this.rules);
        for (const field of fields){
            const fieldValidation = this.validateField(field, object);

            if (fieldValidation !== undefined) {
                validation[fieldValidation.errorCode] = fieldValidation.operands;
            } // else its undefined, so we can ignore it
        }

        if (Object.keys(validation).length > 0) {
            return validation;
        }

        return undefined;
    }

    /**
     * Validates a single field against the rules.
     * @param field The name of the field to validate.
     * @param object The object to validate.
     * @returns A ValidatesError if the object is invalid, or undefined if the object is valid.
     */
    // deno-lint-ignore no-explicit-any
    validateField(field: string, object: Record<string, any>): ValidatesError | undefined {
        const fieldParsingRules = this.parsedRules[field];
        for (const parsedRule of fieldParsingRules) {
            const key = parsedRule.rule;
            const valid = this.validators[key].validate(object, parsedRule.operands);
            if (valid === false) {
                // do not continue validation e.g. field is nullable or sometimes
                return undefined;
            }

            if (typeof valid === 'string') {
                return {
                    errorCode: valid,
                    operands: parsedRule.operands,
                };
            }
        }

        return undefined;
    }

    /**
     * Creates a new Dilo instance with all the built-in parsing rules and validators.
     * @param rules The rules to use for validation.
     * @returns A new Dilo instance with all the built-in parsing rules and validators.
     * @throws Error when parsing rules are malformed
     */
    static make(rules: Record<string, string>): Dilo {
        const ruleParser = new RuleParser(BuiltInParsingRules);
        return new Dilo(rules, ruleParser, BuiltInValidators);
    }
}