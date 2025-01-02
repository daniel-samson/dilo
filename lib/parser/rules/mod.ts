import type {Ruling} from "../../interfaces/ruling.ts";
import {
    Accepted,
    ArrayType,
    BooleanType,
    DateType,
    DecimalType,
    Declined,
    IntegerType,
    JsonType,
    Nullable,
    NumericType,
    ObjectType,
    Required,
    Sometimes,
    StringType,
    Size,
    Contains,
    Digits,
} from "../mod.ts";

export * from "./size.ts";
export * from "./required.ts";
export * from "./basic-types.ts";
export * from "./accepted.ts";
export * from "./sometimes.ts";
export * from "./nullable.ts";
export * from "./contains.ts";
export * from "./digits.ts";

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
];
