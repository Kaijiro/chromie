import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellPeriodicEnergizeEvent from "../../events/implementations/SpellPeriodicEnergizeEvent";

export default class SpellPeriodicEnergizeParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_PERIODIC_ENERGIZE`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellPeriodicEnergizeEvent();
        }
    }
}
