import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class CombatantInfoEvent implements EncounterEvent {
    constructor(private playerName: string) {
    }

    applyOn(encounters: Encounters): void {
        encounters.last().addFighter(this.playerName);
    }
}