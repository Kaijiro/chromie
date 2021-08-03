import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import RangeMissedEvent from "../../events/implementations/RangeMissedEvent";

export default class RangeMissedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`RANGE_MISSED`);

        const result = eventInfosRegex.exec(line);

        if(result !== null){
            return new RangeMissedEvent();
        }
    }

}
