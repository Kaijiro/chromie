import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import SwingMissedEvent from "../../events/implementations/SwingMissedEvent";

export default class SwingMissedParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SWING_MISSED`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SwingMissedEvent();
        }
    }
}
