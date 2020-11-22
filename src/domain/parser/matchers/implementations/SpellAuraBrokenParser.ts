import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellAuraBrokenEvent} from "../../events/implementations/SpellAuraBrokenEvent";

export class SpellAuraBrokenParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_AURA_BROKEN`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new SpellAuraBrokenEvent();
        }
    }
}
