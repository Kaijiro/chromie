import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellPeriodicDamageEvent from "../../events/implementations/SpellPeriodicDamageEvent";

export default class SpellPeriodicDamageParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_PERIODIC_DAMAGE`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellPeriodicDamageEvent();
        }
    }
}
