import LogFileParser from "../../../src/domain/parser/LogFileParser";
import {binding, given, then, when} from "cucumber-tsflow";
import Encounter from "../../../src/domain/encounters/Encounter";
import expect = require("expect");
import {Fighter} from "../../../src/domain/encounters/Fighter";

@binding()
export class ChromieSteps {
    private logFilePath: string = "";
    private logFileParser: LogFileParser = new LogFileParser();
    private resultPromise: Promise<Encounter[]>;

    @given(/^The log file "(.*\.txt)"$/)
    public givenALogFile(logFilePath: string) {
        this.logFilePath = logFilePath;
    }

    @when("Chromie process the file")
    public chromieProcess() {
        this.resultPromise = this.logFileParser.parseEncounters(this.logFilePath);
    }

    @then("The encounter should contain {int} fighters")
    public async thenEncounterContainsPlayerCount(expectedPlayerCount: number) {
        await this.resultPromise.then(encounters => expect(encounters[encounters.length - 1].fighters.length).toEqual(expectedPlayerCount));
    }

    @then(/^The player with ID (Player-\d{4}-[A-F0-9]{8}) should has used (\d*) spells and techniques$/)
    public async thenPlayerWithIDShouldHasUsedSpellCount(playerId: string, spellCount: string) {
        const spellCountNumber = parseInt(spellCount);

        await this.resultPromise.then(encounters => {
            const checkedEncounter = encounters[0];

            const fighter: Fighter | undefined = checkedEncounter.fighters.find(fighter => fighter.id === playerId);

            if (fighter === undefined) {
                throw new Error(`Could not find fighter ${playerId} in the Fight`);
            }

            expect(fighter.actions.length).toBe(spellCountNumber);
        });
    }

    @then("The encounter should contain no unknown event", "", 60000)
    public async thenTheEncounterShouldNotContainAnyUnknownEvent() {
        await this.resultPromise
            .then(encounters => {
                const unknownLines = encounters[encounters.length - 1].unknownLines;

                if(unknownLines.length !== 0){
                    throw new Error(`Encounter does contain ${unknownLines.length} unknown events. Here are a few examples :\n${unknownLines.slice(0, 3).map(line => line + '\n')}`);
                }
            });
    }
}
