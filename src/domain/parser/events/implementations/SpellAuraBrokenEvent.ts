import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class SpellAuraBrokenEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
