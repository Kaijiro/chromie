import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellPeriodicMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}