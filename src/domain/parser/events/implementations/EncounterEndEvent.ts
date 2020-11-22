import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class EncounterEndEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
