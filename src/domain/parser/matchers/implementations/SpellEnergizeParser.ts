import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellEnergizeEvent} from "../../events/implementations/SpellEnergizeEvent";

export class SpellEnergizeParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_ENERGIZE`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellEnergizeEvent();
        }
    }
}