import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellCastFailedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {

    }
}