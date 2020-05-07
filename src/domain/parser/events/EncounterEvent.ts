import {Encounters} from "../../encounters/Encounters";

export interface EncounterEvent {
    applyOn(encounters: Encounters): void
}
