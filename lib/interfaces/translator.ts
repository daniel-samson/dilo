import type { Operands } from "../types.ts";

/**
 * A translator is used to translate error messages into a user-friendly format.
 */
export interface Translator {
  /**
   * Translates an error code into a user-friendly error message by using the provided operands for dynamic message interpolation.
   *
   * @param errorCode - The error code that needs to be translated into a human-readable message.
   * @param operands - A key-value mapping used to populate placeholders in the error message.
   * @return The translated and formatted error message.
   */
  translate(errorCode: string, operands: Operands): string;
}
