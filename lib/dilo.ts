import type { RuleParserInterface } from "./interfaces/rule-parser-interface.ts";
import type { ParsedRule } from "./interfaces/ruling.ts";
import type { Validates, ValidatesError, Value } from "./mod.ts";
import { BuiltInTranslations, DiloTranslator } from "./mod.ts";
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
  private translator: DiloTranslator = new DiloTranslator(
    "en-us",
    BuiltInTranslations,
  );
  /**
   * Creates a new Dilo instance with all the built-in parsing rules and validators.
   * @param rules The rules to use for validation.
   * @param ruleParser The rule parser to use for parsing rules.
   * @param validators The validators to use for validation.
   * @param translator The translator to use for translation.
   * @returns A new Dilo instance with all the built-in parsing rules and validators.
   * @throws Error when parsing rules are malformed
   */
  constructor(
    rules: Record<string, string>,
    ruleParser: RuleParserInterface,
    validators: Record<string, Validates>,
    translator: DiloTranslator | undefined,
  ) {
    const fields = Object.keys(rules);
    if (fields.length === 0) {
      throw new Error("No rules have been registered");
    }

    for (const field of fields) {
      const parsedRules = ruleParser.parseFieldRules(field, rules[field]);
      this.parsedRules[field] = parsedRules;
    }
    this.validators = validators;
    this.rules = rules;
    if (translator !== undefined) {
      this.translator = translator;
    }
  }

  /**
   * Validates an object against the rules.
   * @param object The object to validate.
   * @returns A record of field names and error messages if the object is invalid, or undefined if the object is valid.
   */
  validate(
    object: Record<string, Value>,
  ): Record<string, string[] | undefined> | undefined {
    const validation: Record<string, string[] | undefined> = {};

    const fields = Object.keys(this.rules);
    for (const field of fields) {
      const fieldErrors = this.validateField(field, object);

      if (fieldErrors !== undefined) {
        for (const fieldError of fieldErrors) {
          const fieldName = this.extractFieldName(fieldError.errorCode);
          if (!(fieldName in validation)) {
            validation[fieldName] = [];
          }

          (validation[fieldName] as string[]).push(fieldError.translation);
        } // else its undefined, so we can ignore it
      }
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
  private validateField(
    field: string,
    object: Record<string, Value>,
  ): ValidatesError[] | undefined {
    const fieldParsingRules = this.parsedRules[field];
    const validationErrors: ValidatesError[] = [];
    for (const parsedRule of fieldParsingRules) {
      const key = parsedRule.rule;
      const valid = this.validators[key].validate(object, parsedRule.operands);
      if (valid === false) {
        // do not continue validation e.g. field is nullable or sometimes
        return undefined;
      }

      if (typeof valid === "string") {
        validationErrors.push({
          errorCode: valid,
          operands: parsedRule.operands,
          translation: this.translator.translate(valid, parsedRule.operands),
        });
      }
    }

    if (validationErrors.length > 0) {
      return validationErrors;
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
    const translator = new DiloTranslator("en_us", BuiltInTranslations);
    return new Dilo(rules, ruleParser, BuiltInValidators, translator);
  }

  /**
   * Extracts the field name from an error code.
   * @param errorCode The error code to extract the field name from.
   * @returns The field name.
   */
  private extractFieldName(errorCode: string): string {
    const split = errorCode.split(".");
    split.pop();
    return split.join(".");
  }
}
