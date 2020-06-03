import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {SwingDamageEvent} from "../../events/implementations/SwingDamageEvent";

export class SwingDamageParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`SWING_DAMAGE`);
        const result = eventInfoRegex.exec(line);

        if (result !== null) {
            return new SwingDamageEvent();
        }
    }
}
