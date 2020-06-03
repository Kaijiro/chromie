import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellHealEvent} from "../../events/implementations/SpellHealEvent";

export class SpellHealParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_HEAL`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellHealEvent();
        }
    }
}
