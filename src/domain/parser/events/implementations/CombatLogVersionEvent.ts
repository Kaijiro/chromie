import EncounterEvent from "../EncounterEvent";
import Encounters from "../../../encounters/Encounters";

export default class CombatLogVersionEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
        return;
    }
}
