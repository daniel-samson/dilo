import type { Ruling } from "../../interfaces/ruling.ts";
import {
  Accepted,
  ArrayType,
  BooleanType,
  Contains,
  DateType,
  DecimalType,
  Declined,
  Digits,
  DigitsBetween,
  GreaterThan,
  GreaterThanOrEqual,
  In,
  IntegerType,
  JsonType,
  LessThan,
  LessThanOrEqual,
  NotIn,
  Nullable,
  NumericType,
  ObjectType,
  Required,
  Size,
  Sometimes,
  StringType,
  Ulid,
} from "../mod.ts";
import {
  DoesntEndsWith,
  DoesntStartsWith,
  EndsWith,
  Lowercase,
  StartsWith,
  Uppercase,
} from "./string.ts";
import { Email } from "./email.ts";
import { Filled } from "./filled.ts";
import { Url } from "./url.ts";
import { Uuid } from "./uuid.ts";

export * from "./size.ts";
export * from "./required.ts";
export * from "./basic-types.ts";
export * from "./accepted.ts";
export * from "./sometimes.ts";
export * from "./nullable.ts";
export * from "./contains.ts";
export * from "./digits.ts";
export * from "./basic_compare.ts";
export * from "./url.ts";
export * from "./ulid.ts";

export const BuiltInParsingRules: Ruling[] = [
  new Required(),
  new Sometimes(),
  new ArrayType(),
  new ObjectType(),
  new BooleanType(),
  new DateType(),
  new DecimalType(),
  new IntegerType(),
  new JsonType(),
  new NumericType(),
  new StringType(),
  new Accepted(),
  new Declined(),
  new Nullable(),
  new Size(),
  new Contains(),
  new Digits(),
  new DigitsBetween(),
  new StartsWith(),
  new EndsWith(),
  new DoesntStartsWith(),
  new DoesntEndsWith(),
  new Email(),
  new Filled(),
  new GreaterThan(),
  new GreaterThanOrEqual(),
  new LessThan(),
  new LessThanOrEqual(),
  new In(),
  new NotIn(),
  new Uppercase(),
  new Lowercase(),
  new Url(),
  new Ulid(),
  new Uuid(),
];
