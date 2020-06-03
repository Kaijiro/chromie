import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellAuraAppliedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}