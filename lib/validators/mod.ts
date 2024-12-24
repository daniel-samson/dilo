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
import type {Validates} from "../interfaces/validates.ts";
import {Size} from "./size.ts";
import { Contains } from "./contains.ts";

const BuiltInValidators: Record<string, Validates> = {
    "required": new Required(),
    "array": new ArrayType(),
    "boolean": new BooleanType(),
    "date": new DateType(),
    "decimal": new DecimalType(),
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
};

export default BuiltInValidators;
