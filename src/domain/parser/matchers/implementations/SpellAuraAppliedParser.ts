import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellAuraAppliedEvent from "../../events/implementations/SpellAuraAppliedEvent";

export default class SpellAuraAppliedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_AURA_APPLIED`);
        const result = eventInfosRegex.exec(line);

        if (result !== null) {
            return new SpellAuraAppliedEvent();
        }
    }
}
