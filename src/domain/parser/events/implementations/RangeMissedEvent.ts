import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class RangeMissedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
