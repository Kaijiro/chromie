import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class RangeDamageEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
