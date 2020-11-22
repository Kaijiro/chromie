import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellResurrectEvent} from "../../events/implementations/SpellResurrectEvent";

export class SpellResurrectParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_RESURRECT`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new SpellResurrectEvent();
        }
    }
}
