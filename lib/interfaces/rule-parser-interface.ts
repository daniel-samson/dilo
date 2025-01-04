import type { ParsedRule, Ruling } from "./ruling.ts";

/**
 * A rule parser is used to parse a field's rules into a list of Ruling objects.
 */
export interface RuleParserInterface {
  /**
   * Registers a list of rules with the parser.
   *
   * @param rules The list of rules to register.
   */
  registerRules(rules: Ruling[]): void;
  /**
   * Parses a string of rules into a list of Ruling objects.
   *
   * @param field The name of the field to parse.
   * @param rules The string of rules to parse.
   * @returns A list of validation errors.
   */
  parseFieldRules(field: string, rules: string): ParsedRule[];
}
