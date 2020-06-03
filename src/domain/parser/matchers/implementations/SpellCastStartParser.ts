import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellCastStartEvent} from "../../events/implementations/SpellCastStartEvent";

export class SpellCastStartParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_CAST_START`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellCastStartEvent();
        }
    }
}
