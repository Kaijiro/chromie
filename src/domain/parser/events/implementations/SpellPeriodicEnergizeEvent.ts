import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellPeriodicEnergizeEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
