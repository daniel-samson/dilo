import type { Ruling } from "../../interfaces/ruling.ts";
import { parseOperands } from "./common.ts";
import type { Operands } from "../../types.ts";

export class ArrayType implements Ruling {
  ruleName(): string {
    return "array";
  }

  parseRule(rule: string): Operands {
    if (rule === "array") {
      return {};
    }

    throw new Error('Invalid rule: "array"');
  }
}

export class ObjectType implements Ruling {
  ruleName(): string {
    return "object";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("object:")) {
      const keys = parseOperands(rule);
      return { keys };
    }

    if (rule === "object") {
      return {};
    }

    throw new Error('Invalid rule: "object"');
  }
}

export class BooleanType implements Ruling {
  ruleName(): string {
    return "boolean";
  }

  parseRule(rule: string): Operands {
    if (rule === "boolean") {
      return {};
    }

    throw new Error('Invalid rule: "boolean"');
  }
}

export class DateType implements Ruling {
  ruleName(): string {
    return "date";
  }

  parseRule(rule: string): Operands {
    if (rule === "date") {
      return {};
    }

    throw new Error('Invalid rule: "date"');
  }
}

export class DecimalType implements Ruling {
  ruleName(): string {
    return "decimal";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("decimal:")) {
      const places = parseOperands(rule);

      if (places.length > 2) {
        throw new Error(
          'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2',
        );
      }

      for (const place of places) {
        if (Number.isNaN(Number(place))) {
          throw new Error(
            'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2',
          );
        }
      }

      if (places.length === 1) {
        return { placesTo: Number(places[0]) };
      }

      return { placesFrom: Number(places[0]), placesTo: Number(places[1]) };
    }

    throw new Error('Invalid rule: "decimal"');
  }
}

export class IntegerType implements Ruling {
  ruleName(): string {
    return "integer";
  }

  parseRule(rule: string): Operands {
    if (rule === "integer") {
      return {};
    }

    throw new Error('Invalid rule: "integer"');
  }
}

export class JsonType implements Ruling {
  ruleName(): string {
    return "json";
  }

  parseRule(rule: string): Operands {
    if (rule === "json") {
      return {};
    }

    throw new Error('Invalid rule: "json"');
  }
}

export class NumericType implements Ruling {
  ruleName(): string {
    return "numeric";
  }

  parseRule(rule: string): Operands {
    if (rule === "numeric") {
      return {};
    }

    throw new Error('Invalid rule: "numeric"');
  }
}

export class StringType implements Ruling {
  ruleName(): string {
    return "string";
  }

  parseRule(rule: string): Operands {
    if (rule === "string") {
      return {};
    }

    throw new Error('Invalid rule: "string"');
  }
}
