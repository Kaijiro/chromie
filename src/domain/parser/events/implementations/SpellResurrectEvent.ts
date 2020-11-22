import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellResurrectEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}