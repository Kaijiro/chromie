import * as readline from "readline";
import * as fs from "fs";
import {LineParser} from "@/domain/parser/matchers/LineParser";
import {EncounterStartParser} from "@/domain/parser/matchers/implementations/EncounterStartParser";
import {EncounterEvent} from "@/domain/parser/events/EncounterEvent";
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
                const parsedEvent: EncounterEvent | undefined = this.parsers
                    .map((parser: LineParser) => parser.parse(line))
                    .find((event: EncounterEvent | undefined) => event !== null)
                ;

                if (parsedEvent === undefined) {
                    return;
                }

                parsedEvent.applyOn(encounters);
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
