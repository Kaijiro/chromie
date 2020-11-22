import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import EncounterStartEvent from "../../events/implementations/EncounterStartEvent";

export default class EncounterStartParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`ENCOUNTER_START,(\\d+),"([A-Z,àâäéèêëîïôöùûü’ ]+)",(\\d+),(\\d+),(\\d+)`, 'i');
        const result = eventInfosRegex.exec(line);

        if(result !== null){
            const encounterName = result[2];
            return new EncounterStartEvent(encounterName);
        }
    }
}
