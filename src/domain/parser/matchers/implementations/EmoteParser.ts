import LineParser from "../LineParser";
import EncounterEvent from "../../events/EncounterEvent";
import EmoteEvent from "../../events/implementations/EmoteEvent";

export default class EmoteParser implements LineParser {
    parse(line: string): EncounterEvent | undefined {
        const eventInfoRegex = new RegExp(`EMOTE`);
        const result = eventInfoRegex.exec(line);

        if(result !== null){
            return new EmoteEvent();
        }
    }
}