import EncounterEvent from "../EncounterEvent";
import Encounter from "../../../encounters/Encounter";

export default class CombatLogVersionEvent implements EncounterEvent {
    applyOn(encounter: Encounter[]): void {
        return;
    }
}
