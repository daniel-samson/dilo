export interface Translator {
    /**
     * Translates an error code into a user-friendly error message by using the provided operands for dynamic message interpolation.
     *
     * @param {string} errorCode - The error code that needs to be translated into a human-readable message.
     * @param {Record<string, any>} operands - A key-value mapping used to populate placeholders in the error message.
     * @return {string} The translated and formatted error message.
     */
    translate(errorCode: string, operands: Record<string, any>): string
}