import { Ruling } from "../../interfaces/ruling.ts";

export class ArrayType implements Ruling {
    ruleName(): string {
        return "array";
    }
}

export class BooleanType implements Ruling {
    ruleName(): string {
        return "boolean";
    }
}

export class DateType implements Ruling {
    ruleName(): string {
        return "date";
    }
}

export class DecimalType implements Ruling {
    ruleName(): string {
        return "decimal";
    }
}

export class IntegerType implements Ruling {
    ruleName(): string {
        return "integer";
    }
}

export class JsonType implements Ruling {
    ruleName(): string {
        return "json";
    }
}

export class NullableType implements Ruling {
    ruleName(): string {
        return "nullable";
    }
}

export class NumericType implements Ruling {
    ruleName(): string {
        return "numeric";
    }
}

export class StringType implements Ruling {
    ruleName(): string {
        return "string";
    }
}