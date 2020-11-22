import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";

export default class SpellCastStartEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
