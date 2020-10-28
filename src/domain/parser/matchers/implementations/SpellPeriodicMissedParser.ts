import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SpellPeriodicMissedEvent} from "../../events/implementations/SpellPeriodicMissedEvent";

export class SpellPeriodicMissedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`SPELL_PERIODIC_MISSED`);
        const result = eventInfosRegex.exec(line);

        if(result !== null){
            return new SpellPeriodicMissedEvent();
        }
    }

}