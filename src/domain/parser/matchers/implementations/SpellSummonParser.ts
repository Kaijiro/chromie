import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellSummonEvent} from "../../events/implementations/SpellSummonEvent";

export class SpellSummonParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_SUMMON`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellSummonEvent();
        }
    }
}
