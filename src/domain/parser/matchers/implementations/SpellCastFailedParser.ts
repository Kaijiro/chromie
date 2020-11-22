import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellCastFailedEvent from "../../events/implementations/SpellCastFailedEvent";

export default class SpellCastFailedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_CAST_FAILED`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new SpellCastFailedEvent();
        }
    }
}