import { Translator } from "../interfaces/mod.ts";

export class DiloTranslator implements Translator {
    constructor(private readonly locale: string, private readonly translations: Record<string, Record<string, string>>) {}

    translate(errorCode: string, operands: Record<string, any>): string {
        // TODO: translate

        return errorCode;
    }
}