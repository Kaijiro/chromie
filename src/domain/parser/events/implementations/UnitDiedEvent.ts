import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class UnitDiedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
