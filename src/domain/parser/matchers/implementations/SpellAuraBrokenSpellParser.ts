import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SpellAuraBrokenSpellEvent from "../../events/implementations/SpellAuraBrokenSpellEvent";

export default class SpellAuraBrokenSpellParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_AURA_BROKEN_SPELL`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new SpellAuraBrokenSpellEvent();
        }
    }
}