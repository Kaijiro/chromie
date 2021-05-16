import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class EmoteEvent implements EncounterEvent {
    applyOn(encounters: Encounter[]): void {
    }
}
