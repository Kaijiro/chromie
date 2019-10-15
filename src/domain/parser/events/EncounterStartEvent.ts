import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
import {Encounters} from "@/domain/encounters/Encounters";

export class EncounterStartEvent implements EncounterEvent {
    applyOn(encounters: Encounters): void {
    }
}
