import { Translator } from "../interfaces/mod.ts";

export class DiloTranslator implements Translator {
    constructor(private readonly locale: string, private readonly translations: Record<string, Record<string, string>>) {}

    translate(errorCode: string, operands: Record<string, any>): string {
        const errorSplit = errorCode.split(".");
        const error = errorSplit[errorSplit.length - 1];
        let translation = this.translations[this.locale][error];

        const operandNames = Object.keys(operands);
        for (const operandName of operandNames) {
            const operandValue = operands[operandName];
            translation = translation.replace(`:${operandName}`, operandValue);
        }

        return translation;
    }
}