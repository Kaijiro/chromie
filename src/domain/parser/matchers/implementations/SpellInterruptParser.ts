import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellInterruptEvent from "../../events/implementations/SpellInterruptEvent";

export default class SpellInterruptParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_INTERRUPT`);

        const result = eventInfosRegex.exec(line);

        if(result !== null){
            return new SpellInterruptEvent();
        }
    }
}
