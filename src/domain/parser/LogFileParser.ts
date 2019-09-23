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
                    const eventInfosRegex = new RegExp(`ENCOUNTER_START,(\\d+),"([A-Z,àâäéèêëîïôöùûü’ ]+)",(\\d+),(\\d+),(\\d+)`, 'gim');
                    const result = eventInfosRegex.exec(line);

                    if(result !== null){
                        encounters.push(Encounter.with(result[2]));
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
