import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellSummonEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
