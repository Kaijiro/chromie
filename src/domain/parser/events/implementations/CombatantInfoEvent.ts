import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class CombatantInfoEvent implements EncounterEvent {
    constructor(private playerID: string) {
    }

    applyOn(encounters: Encounter[]): void {
        encounters[encounters.length - 1].addFighter(this.playerID);
    }
}
