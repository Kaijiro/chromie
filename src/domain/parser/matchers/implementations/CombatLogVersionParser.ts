import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import CombatLogVersionEvent from "../../events/implementations/CombatLogVersionEvent";

export default class CombatLogVersionParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventRegex = new RegExp('COMBAT_LOG_VERSION,\\d{2},ADVANCED_LOG_ENABLED,1');
        const result = eventRegex.exec(line);

        if (result !== null) {
            return new CombatLogVersionEvent();
        }
    }
}
