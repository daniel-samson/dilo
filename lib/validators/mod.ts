import { Accepted, Declined } from "./accepted.ts";
import {
  ArrayType,
  BooleanType,
  DateType,
  DecimalType,
  IntegerType,
  JsonType,
  NumericType,
  StringType,
} from "./basic-types.ts";
import { Nullable } from "./nullable.ts";
import { Required } from "./required.ts";
import { Sometimes } from "./sometimes.ts";
import type { Validates } from "../interfaces/validates.ts";
import { Size } from "./size.ts";
import { Contains } from "./contains.ts";
import { Digits } from "./digits.ts";
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
import {
  GreaterThan,
  GreaterThanOrEqual,
  In,
  LessThan,
  LessThanOrEqual,
  NotIn,
} from "./basic_compare.ts";
import { Url } from "./url.ts";
import { Ulid } from "./ulid.ts";
import { Uuid } from "./uuid.ts";
import { Missing } from "./missing.ts";

/**
 * A list of built-in validators. This can be used as a base to create custom validators.
 */
const BuiltInValidators: Record<string, Validates> = {
  "required": new Required(),
  "array": new ArrayType(),
  "boolean": new BooleanType(),
  "date": new DateType(),
  "decimal": new DecimalType(),
  "digits": new Digits(),
  "integer": new IntegerType(),
  "nullable": new Nullable(),
  "numeric": new NumericType(),
  "string": new StringType(),
  "json": new JsonType(),
  "accepted": new Accepted(),
  "declined": new Declined(),
  "sometimes": new Sometimes(),
  "size": new Size(),
  "contains": new Contains(),
  "starts_with": new StartsWith(),
  "ends_with": new EndsWith(),
  "doesnt_starts_with": new DoesntStartsWith(),
  "doesnt_ends_with": new DoesntEndsWith(),
  "email": new Email(),
  "filled": new Filled(),
  "gt": new GreaterThan(),
  "gte": new GreaterThanOrEqual(),
  "lt": new LessThan(),
  "lte": new LessThanOrEqual(),
  "in": new In(),
  "not_in": new NotIn(),
  "uppercase": new Uppercase(),
  "lowercase": new Lowercase(),
  "url": new Url(),
  "ulid": new Ulid(),
  "uuid": new Uuid(),
  "missing": new Missing(),
};

export default BuiltInValidators;
