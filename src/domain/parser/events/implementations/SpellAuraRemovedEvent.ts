import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellAuraRemovedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}