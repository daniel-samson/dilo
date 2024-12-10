export type Value = string | number | boolean | Date | null;
export type Operand = Value | string[] | undefined | never;
export type Operands = Record<string, Operand>;
export type Haystack = Record<string, Value | string[] | undefined | never | Record<string, never> | Record<string, Value>>;