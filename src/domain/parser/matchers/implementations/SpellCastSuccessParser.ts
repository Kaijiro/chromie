import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellCastSuccessEvent from "../../events/implementations/SpellCastSuccessEvent";

export default class SpellCastSuccessParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_CAST_SUCCESS`);
        const result = eventInfosRegex.exec(line);

        if (result !== null) {
            return new SpellCastSuccessEvent();
        }
    }
}
