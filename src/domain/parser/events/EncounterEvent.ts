import {Encounters} from "@/domain/encounters/Encounters";

export interface EncounterEvent {
    applyOn(encounters: Encounters): void
}
