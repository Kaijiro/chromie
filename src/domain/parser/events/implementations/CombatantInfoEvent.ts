import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
import {Encounters} from "@/domain/encounters/Encounters";

export class CombatantInfoEvent implements EncounterEvent {
    constructor(private playerName: string) {
    }

    applyOn(encounters: Encounters): void {
        encounters.last().addFighter(this.playerName);
    }
}