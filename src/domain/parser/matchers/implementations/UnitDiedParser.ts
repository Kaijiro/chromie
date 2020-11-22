import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import UnitDiedEvent from "../../events/implementations/UnitDiedEvent";

export default class UnitDiedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`UNIT_DIED`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new UnitDiedEvent();
        }
    }
}