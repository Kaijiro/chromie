import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class UnknownEvent implements EncounterEvent {
    constructor(private eventLine: string) {
    }

    applyOn(encounters: Encounters): void {
        encounters.last().addUnknownEvent(this.eventLine);
    }
}
