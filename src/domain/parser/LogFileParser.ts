import Encounter from "@/domain/Encounter";
import * as readline from "readline";
import * as fs from "fs";

export default class LogFileParser {

    parseEncounters(logFilePath: string): Promise<Encounter[]> {
        return new Promise<Encounter[]>((resolve, reject) => {
            const encounters: Encounter[] = [];
            const fileReader = readline.createInterface({
                input: fs.createReadStream(logFilePath)
            });

            fileReader.on("line", line => {
                if(line.indexOf("ENCOUNTER_START") > 0){
                    encounters.push(Encounter.with(""));
                }
            });

            fileReader.on("close", () => {
                resolve(encounters);
            });
        });
    }
}
