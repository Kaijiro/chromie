import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellCastSuccessEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
