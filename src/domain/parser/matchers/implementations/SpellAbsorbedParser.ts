import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellAbsorbedEvent from "../../events/implementations/SpellAbsorbedEvent";

export default class SpellAbsorbedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_ABSORBED`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellAbsorbedEvent();
        }
    }
}
