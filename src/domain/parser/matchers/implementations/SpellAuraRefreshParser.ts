import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellAuraRefreshEvent from "../../events/implementations/SpellAuraRefreshEvent";

export default class SpellAuraRefreshParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_AURA_REFRESH`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellAuraRefreshEvent();
        }
    }
}
