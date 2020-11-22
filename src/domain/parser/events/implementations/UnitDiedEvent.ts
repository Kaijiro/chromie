import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class UnitDiedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
