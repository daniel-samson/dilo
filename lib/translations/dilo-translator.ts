import type { Translator } from "../interfaces/mod.ts";
import type { Operands } from "../types.ts";

/**
 * A translator is used to translate error messages into a user-friendly format.
 */
export class DiloTranslator implements Translator {
  /**
   * Creates a new DiloTranslator instance.
   * @param locale The default locale to use for translation. eg. "en_us".
   * @param translations The translations to use for translation.
   * @see BuiltInTranslations
   * @returns A new DiloTranslator instance.
   */
  constructor(
    private readonly locale: string,
    private readonly translations: Record<string, Record<string, string>>,
  ) {}

  /**
   * Translates an error code into a user-friendly error message by using the provided operands for dynamic message interpolation.
   *
   * @param errorCode - The error code that needs to be translated into a human-readable message.
   * @param operands - A key-value mapping used to populate placeholders in the error message.
   * @return The translated and formatted error message.
   */
  translate(errorCode: string, operands: Operands): string {
    const errorSplit = errorCode.split(".");
    const error = errorSplit[errorSplit.length - 1];
    let translation = this.translations[this.locale][error];

    const operandNames = Object.keys(operands);
    for (const operandName of operandNames) {
      const operandValue = operands[operandName] as string;
      translation = translation.replace(`:${operandName}`, operandValue);
    }

    return translation;
  }
}
