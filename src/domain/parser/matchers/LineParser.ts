import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";

export interface LineParser {
    parse(line: string): EncounterEvent | undefined
}
