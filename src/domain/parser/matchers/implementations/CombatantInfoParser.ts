import {LineParser} from "../LineParser";
import {EncounterEvent} from "../../events/EncounterEvent";
import {CombatantInfoEvent} from "../../events/implementations/CombatantInfoEvent";

export class CombatantInfoParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`COMBATANT_INFO,(Player-\\d{4}-[A-Z0-9]{8}).*`, 'i');
        const result = eventInfosRegex.exec(line);

        if (result !== null) {
            const playerId = result[1];
            return new CombatantInfoEvent(playerId);
        }
    }
}