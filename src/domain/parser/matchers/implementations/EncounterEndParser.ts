import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import EncounterEndEvent from "../../events/implementations/EncounterEndEvent";

export default class EncounterEndParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`ENCOUNTER_END`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new EncounterEndEvent();
        }
    }
}
