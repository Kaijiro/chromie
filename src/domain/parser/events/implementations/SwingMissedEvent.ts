import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SwingMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
