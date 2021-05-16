import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAbsorbedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
