import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class EncounterEndEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
