import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellCastSuccessEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
