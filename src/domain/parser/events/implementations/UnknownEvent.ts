import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class UnknownEvent implements EncounterEvent {
    constructor(private eventLine: string) {
    }

    applyOn(encounters: Encounter[]): void {
        encounters[encounters.length - 1].addUnknownEvent(this.eventLine);
    }
}
