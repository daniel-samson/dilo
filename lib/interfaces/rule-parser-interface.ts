import type { ParsedRule, Ruling } from "./ruling.ts";

export interface RuleParserInterface {
  registerRules(rules: Ruling[]): void;
  parseFieldRules(field: string, rules: string): ParsedRule[];
}
