import {EncounterEvent} from "../EncounterEvent";
import {Encounters} from "../../../encounters/Encounters";

export class SpellAuraRefreshEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
