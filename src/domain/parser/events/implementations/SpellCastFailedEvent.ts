import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellCastFailedEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {

    }
}