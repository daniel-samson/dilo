import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";
import type { Ruling } from "../../interfaces/ruling.ts";

export class StartsWith implements Ruling {
  ruleName(): string {
    return "starts_with";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("starts_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "starts_with"');
  }
}

export class EndsWith implements Ruling {
  ruleName(): string {
    return "ends_with";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("ends_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "ends_with"');
  }
}

export class DoesntStartsWith implements Ruling {
  ruleName(): string {
    return "doesnt_starts_with";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("doesnt_starts_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "doesnt_starts_with"');
  }
}

export class DoesntEndsWith implements Ruling {
  ruleName(): string {
    return "doesnt_ends_with";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("doesnt_ends_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "doesnt_ends_with"');
  }
}

export class Uppercase implements Ruling {
  ruleName(): string {
    return "uppercase";
  }

  parseRule(rule: string): Operands {
    if (rule == "uppercase") {
      return {};
    }

    throw new Error('Invalid rule: "uppercase"');
  }
}

export class Lowercase implements Ruling {
  ruleName(): string {
    return "lowercase";
  }

  parseRule(rule: string): Operands {
    if (rule == "lowercase") {
      return {};
    }

    throw new Error('Invalid rule: "lowercase"');
  }
}
