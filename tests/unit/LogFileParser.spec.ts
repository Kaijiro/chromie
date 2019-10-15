import {expect} from "chai";
import LogFileParser from "@/domain/parser/LogFileParser";

describe('LogFileParser', () => {

    describe('Parse Encounters in the file', () => {
        describe("::parseEncountersFrom(file)", () => {
            it("should find 0 encounter in a empty file", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog_empty.txt");

                parserPromise.then(encounters => {
                    expect(encounters['encounters']).to.have.lengthOf(0);
                }).catch(err => console.error(err));
            });

            it("should find a single encounter in a file with one named encounter", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog_singleEncounter.txt");

                parserPromise.then(encounters => {
                    expect(encounters['encounters']).to.have.lengthOf(1);

                    const encounter = encounters['encounters'][0];
                    expect(encounter.getName()).to.equal(`Uu’nat, héraut du Vide`);
                });
            });

            it("should find 7 encounters in a file with 7 encounters with the same boss", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog.txt");

                parserPromise.then(encounters => {
                    expect(encounters['encounters']).to.have.lengthOf(7);

                    encounters['encounters'].forEach(encounter => expect(encounter.getName()).to.equal(`Uu’nat, héraut du Vide`));
                }).catch(err => console.error(err));
            });
        });
    });
});
