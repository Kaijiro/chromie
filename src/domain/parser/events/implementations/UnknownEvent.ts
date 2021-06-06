import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class UnknownEvent implements EncounterEvent {
    constructor(private eventLine: string) {
    }

    applyOn(encounters: Encounter[]): void {
        if (encounters.length === 0) {
            return;
        }

        encounters[encounters.length - 1].addUnknownEvent(this.eventLine);
    }
}
