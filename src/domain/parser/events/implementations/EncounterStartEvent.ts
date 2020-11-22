import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";
import Encounter from "../../../encounters/Encounter";

export default class EncounterStartEvent implements EncounterEvent {
    constructor(private encounterName: string) {

    }

    applyOn(encounters: Encounters): void {
        encounters.add(new Encounter(this.encounterName));
    }
}
