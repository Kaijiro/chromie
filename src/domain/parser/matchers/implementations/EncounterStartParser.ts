import {LineParser} from "@/domain/parser/matchers/LineParser";
import {EncounterStartEvent} from "@/domain/parser/events/EncounterStartEvent";
import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";

export class EncounterStartParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`ENCOUNTER_START,(\\d+),"([A-Z,àâäéèêëîïôöùûü’ ]+)",(\\d+),(\\d+),(\\d+)`, 'i');
        const result = eventInfosRegex.exec(line);

        if(result !== null){
            const encounterName = result[2];
            return new EncounterStartEvent(encounterName);
        }
    }
}
