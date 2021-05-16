import * as readline from "readline";
import * as fs from "fs";
import LineParser from "./matchers/LineParser";
import EncounterStartParser from "./matchers/implementations/EncounterStartParser";
import EncounterEvent from "./events/EncounterEvent";
import CombatantInfoParser from "./matchers/implementations/CombatantInfoParser";
import UnknownEvent from "./events/implementations/UnknownEvent";
import CombatLogVersionParser from "./matchers/implementations/CombatLogVersionParser";
import SpellAuraRemovedParser from "./matchers/implementations/SpellAuraRemovedParser";
import SpellDamageParser from "./matchers/implementations/SpellDamageParser";
import SpellAuraAppliedParser from "./matchers/implementations/SpellAuraAppliedParser";
import SpellCastSuccessParser from "./matchers/implementations/SpellCastSuccessParser";
import SpellSummonParser from "./matchers/implementations/SpellSummonParser";
import SpellMissedParser from "./matchers/implementations/SpellMissedParser";
import SwingDamageParser from "./matchers/implementations/SwingDamageParser";
import SpellAbsorbedParser from "./matchers/implementations/SpellAbsorbedParser";
import SpellHealParser from "./matchers/implementations/SpellHealParser";
import SpellCastStartParser from "./matchers/implementations/SpellCastStartParser";
import SpellEnergizeParser from "./matchers/implementations/SpellEnergizeParser";
import SpellPeriodicDamageParser from "./matchers/implementations/SpellPeriodicDamageParser";
import SwingMissedParser from "./matchers/implementations/SwingMissedParser";
import RangeDamageParser from "./matchers/implementations/RangeDamageParser";
import SpellPeriodicHealParser from "./matchers/implementations/SpellPeriodicHealParser";
import SpellAuraRefreshParser from "./matchers/implementations/SpellAuraRefreshParser";
import SpellPeriodicEnergizeParser from "./matchers/implementations/SpellPeriodicEnergizeParser";
import SpellAuraBrokenSpellParser from "./matchers/implementations/SpellAuraBrokenSpellParser";
import SpellPeriodicMissedParser from "./matchers/implementations/SpellPeriodicMissedParser";
import UnitDiedParser from "./matchers/implementations/UnitDiedParser";
import EmoteParser from "./matchers/implementations/EmoteParser";
import SpellCastFailedParser from "./matchers/implementations/SpellCastFailedParser";
import SpellAuraBrokenParser from "./matchers/implementations/SpellAuraBrokenParser";
import SpellResurrectParser from "./matchers/implementations/SpellResurrectParser";
import EncounterEndParser from "./matchers/implementations/EncounterEndParser";
import Encounter from "../encounters/Encounter";

export default class LogFileParser {

    private parsers: LineParser[] = [];

    constructor() {
        this.parsers.push(new EncounterStartParser());
        this.parsers.push(new CombatantInfoParser());
        this.parsers.push(new CombatLogVersionParser());
        this.parsers.push(new SpellAuraRemovedParser());
        this.parsers.push(new SpellDamageParser());
        this.parsers.push(new SpellAuraAppliedParser());
        this.parsers.push(new SpellCastSuccessParser());
        this.parsers.push(new SpellSummonParser());
        this.parsers.push(new SpellMissedParser());
        this.parsers.push(new SwingDamageParser());
        this.parsers.push(new SpellAbsorbedParser());
        this.parsers.push(new SpellHealParser());
        this.parsers.push(new SpellCastStartParser());
        this.parsers.push(new SpellEnergizeParser());
        this.parsers.push(new SpellPeriodicDamageParser());
        this.parsers.push(new SwingMissedParser());
        this.parsers.push(new RangeDamageParser());
        this.parsers.push(new SpellPeriodicHealParser());
        this.parsers.push(new SpellAuraRefreshParser());
        this.parsers.push(new SpellPeriodicEnergizeParser());
        this.parsers.push(new SpellAuraBrokenSpellParser());
        this.parsers.push(new SpellPeriodicMissedParser());
        this.parsers.push(new UnitDiedParser());
        this.parsers.push(new EmoteParser());
        this.parsers.push(new SpellCastFailedParser());
        this.parsers.push(new SpellAuraBrokenParser());
        this.parsers.push(new SpellResurrectParser());
        this.parsers.push(new EncounterEndParser());
    }

    parseEncounters(logFilePath: string): Promise<Encounter[]> {
        return new Promise<Encounter[]>((resolve, reject) => {
            const encounters: Encounter[] = [];
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
