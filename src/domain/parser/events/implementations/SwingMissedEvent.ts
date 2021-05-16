import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SwingMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
