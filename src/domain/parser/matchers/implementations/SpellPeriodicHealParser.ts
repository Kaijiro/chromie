import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellPeriodicHealEvent} from "../../events/implementations/SpellPeriodicHealEvent";

export class SpellPeriodicHealParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_PERIODIC_HEAL`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellPeriodicHealEvent();
        }
    }
}
