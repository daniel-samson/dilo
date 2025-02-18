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
  Missing,
  MissingIf,
  MissingUnless,
  MissingWith,
  MissingWithAll,
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
import { Same } from "./same.ts";
import { Ip, Ipv4, Ipv6 } from "./ip.ts";

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
export * from "./missing.ts";
export * from "./same.ts";
export * from "./ip.ts";

/**
 * A list of built-in parsing rules. This can be used as a base to create custom parsing rules.
 */
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
  new Missing(),
  new MissingWith(),
  new MissingWithAll(),
  new MissingIf(),
  new MissingUnless(),
  new Same(),
  new Ip(),
  new Ipv4(),
  new Ipv6(),
  new Same(),
];
