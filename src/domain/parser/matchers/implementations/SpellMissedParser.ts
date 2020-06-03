import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellMissedEvent} from "../../events/implementations/SpellMissedEvent";

export class SpellMissedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SPELL_MISSED`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SpellMissedEvent();
        }
    }
}