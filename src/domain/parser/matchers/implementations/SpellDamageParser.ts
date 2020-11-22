import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellDamageEvent from "../../events/implementations/SpellDamageEvent";

export default class SpellDamageParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_DAMAGE`);
        const result = eventInfosRegex.exec(line);

        if (result !== null) {
            return new SpellDamageEvent();
        }
    }
}
