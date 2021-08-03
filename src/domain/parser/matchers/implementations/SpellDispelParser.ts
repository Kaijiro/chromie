import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellDispelEvent from "../../events/implementations/SpellDispelEvent";

export default class SpellDispelParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_DISPEL`);

        const result = eventInfosRegex.exec(line);

        if(result !== null){
            return new SpellDispelEvent();
        }
    }
}
