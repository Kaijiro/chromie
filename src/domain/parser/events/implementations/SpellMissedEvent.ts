import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";

export default class SpellMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
