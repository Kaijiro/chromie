import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";

export default class CombatantInfoEvent implements EncounterEvent {
    constructor(private playerID: string) {
    }

    applyOn(encounters: Encounters): void {
        encounters.last().addFighter(this.playerID);
    }
}
