import {expect} from "chai";
import LogFileParser from "@/domain/parser/LogFileParser";

describe('LogFileParser', () => {

    describe('Parse Encounters in the file', () => {
        describe("::parseEncountersFrom(file)", () => {
            // TODO Réfléchir aux cas d'erreurs ? Pas de fichier, fichier mais pas un fichier de log, fichier corrompu, etc ...

            describe("It should find 0 encounter in a empty file", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog_empty.txt");

                parserPromise.then(encounters => {
                    expect(encounters).to.have.lengthOf(0);
                });
            });

            describe("It should find a single encounter in a file with one named encounter", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog_singleEncounter.txt");

                parserPromise.then(encounters => {
                    expect(encounters).to.have.lengthOf(1);

                    const encounter = encounters[0];
                    expect(encounter.getName()).to.equal(`Uu’nat, héraut du Vide`);
                });
            });

            describe("It should find 7 encounters in a file with 7 encounters with the same boss", () => {
                const parser: LogFileParser = new LogFileParser();
                const parserPromise = parser.parseEncounters("tests/resources/WoWCombatLog.txt");

                parserPromise.then(encounters => {
                    expect(encounters).to.have.lengthOf(7);

                    encounters.forEach(encounter => expect(encounter.getName()).to.equal(`Uu’nat, héraut du Vide`));
                });
            });
        });
    });
});
