import * as readline from "readline";
import * as fs from "fs";
import {LineParser} from "./matchers/LineParser";
import {EncounterStartParser} from "./matchers/implementations/EncounterStartParser";
import {Encounters} from "../encounters/Encounters";
import {EncounterEvent} from "./events/EncounterEvent";
import {CombatantInfoParser} from "./matchers/implementations/CombatantInfoParser";
import {UnknownEvent} from "./events/implementations/UnknownEvent";
import CombatLogVersionParser from "./matchers/implementations/CombatLogVersionParser";
import {SpellAuraRemovedParser} from "./matchers/implementations/SpellAuraRemovedParser";
import {SpellDamageParser} from "./matchers/implementations/SpellDamageParser";
import {SpellAuraAppliedParser} from "./matchers/implementations/SpellAuraAppliedParser";
import {SpellCastSuccessParser} from "./matchers/implementations/SpellCastSuccessParser";

export default class LogFileParser {

    private parsers: LineParser[] = new Array<LineParser>();

    constructor() {
        this.parsers.push(new EncounterStartParser());
        this.parsers.push(new CombatantInfoParser());
        this.parsers.push(new CombatLogVersionParser());
        this.parsers.push(new SpellAuraRemovedParser());
        this.parsers.push(new SpellDamageParser());
        this.parsers.push(new SpellAuraAppliedParser());
        this.parsers.push(new SpellCastSuccessParser());
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
                    .find((event: EncounterEvent | undefined) => event !== undefined)
                ;

                if (parsedEvent === undefined) {
                    new UnknownEvent(line).applyOn(encounters);
                } else {
                    parsedEvent.applyOn(encounters);
                }
            });

            fileReader.on("close", () => {
                resolve(encounters);
            });

            fileReader.on("error", error => {
                reject(error);
            });
        });
    }
}
