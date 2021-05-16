import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class EncounterStartEvent implements EncounterEvent {
    constructor(private encounterName: string) {
    }

    applyOn(encounters: Encounter[]): void {
        encounters.push(new Encounter(this.encounterName));
    }
}
