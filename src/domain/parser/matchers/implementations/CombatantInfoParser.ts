import {LineParser} from "@/domain/parser/matchers/LineParser";
import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
import {CombatantInfoEvent} from "@/domain/parser/events/implementations/CombatantInfoEvent";

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