import * as readline from "readline";
import * as fs from "fs";
import {LineParser} from "@/domain/parser/matchers/LineParser";
import {EncounterStartParser} from "@/domain/parser/matchers/implementations/EncounterStartParser";
import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
import Encounter from "@/domain/encounters/Encounter";
import {EncounterStartEvent} from "@/domain/parser/events/EncounterStartEvent";
import {Encounters} from "@/domain/encounters/Encounters";

export default class LogFileParser {

    private parsers: LineParser[] = new Array<LineParser>();

    constructor() {
        this.parsers.push(new EncounterStartParser());
    }

    parseEncounters(logFilePath: string): Promise<Encounters> {
        return new Promise<Encounters>((resolve, reject) => {
            const encounters: Encounters = new Encounters();
            const fileReader = readline.createInterface({
                input: fs.createReadStream(logFilePath)
            });

            fileReader.on("line", line => {
                const parsedEvent : EncounterEvent | undefined = this.parsers
                    .map((parser: LineParser) => parser.parse(line))
                    .find((event: EncounterEvent | undefined) => event !== null)
                ;

                if(parsedEvent instanceof EncounterStartEvent){
                    const eventInfosRegex = new RegExp(`ENCOUNTER_START,(\\d+),"([A-Z,àâäéèêëîïôöùûü’ ]+)",(\\d+),(\\d+),(\\d+)`, 'i');
                    const result = eventInfosRegex.exec(line);

                    if(result !== null){
                        encounters.add(Encounter.with(result[2]));
                    }
                }
            });

            fileReader.on("close", () => {
                resolve(encounters);
            });

            fileReader.on("error", () => {
                reject();
            });
        });
    }
}
