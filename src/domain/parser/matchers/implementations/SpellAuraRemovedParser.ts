import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellAuraRemovedEvent} from "../../events/implementations/SpellAuraRemovedEvent";

export class SpellAuraRemovedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_AURA_REMOVED`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellAuraRemovedEvent();
        }
    }
}
