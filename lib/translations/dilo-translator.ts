import { Translator } from "../interfaces/mod.ts";
import {Operands} from "../types.ts";

export class DiloTranslator implements Translator {
    constructor(private readonly locale: string, private readonly translations: Record<string, Record<string, string>>) {}

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