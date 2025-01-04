/**
 * A value is a string, number, boolean, date, or null.
 */
export type Value = string | number | boolean | Date | null;

/**
 * An operand is a value used by a rule to compare against users input.
 */
export type Operand = Value | string[] | undefined | never;

/**
 * An operands is a record of operands used by a rule to compare against users input.
 */
export type Operands = Record<string, Operand>;

/**
 * A haystack is the users input passed to the validator.
 */
export type Haystack = Record<
  string,
  | Value
  | string[]
  | undefined
  | never
  | Record<string, never>
  | Record<string, Value>
>;
