import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import RangeDamageEvent from "../../events/implementations/RangeDamageEvent";

export default class RangeDamageParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`RANGE_DAMAGE`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new RangeDamageEvent();
        }
    }
}
