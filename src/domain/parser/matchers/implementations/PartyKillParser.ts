import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import PartyKillEvent from "../../events/implementations/PartyKillEvent";

export default class PartyKillParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfosRegex = new RegExp(`PARTY_KILL`);

        const result = eventInfosRegex.exec(line);

        if(result !== null){
            return new PartyKillEvent();
        }
    }
}
