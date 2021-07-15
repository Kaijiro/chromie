import LogFileParser from "../../../src/domain/parser/LogFileParser";
import {binding, given, then, when} from "cucumber-tsflow";
import Encounter from "../../../src/domain/encounters/Encounter";
import expect = require("expect");

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
    public thenEncounterContainsPlayerCount(expectedPlayerCount: number) {
        this.resultPromise.then(encounters => expect(encounters[encounters.length - 1].fighters.length).toEqual(expectedPlayerCount));
    }

    @then(/^The player with ID (Player-\d{4}-[A-F0-9]{8}) should has used (\d*) spells and techniques$/)
    public thenPlayerWithIDShouldHasUsedSpellCount(playerId: string, spellCount: string) {
        const spellCountNumber = parseInt(spellCount);
        console.log(playerId, spellCountNumber);
        console.debug("Ouh yeah");

        this.resultPromise.then(encounters => {
            const checkedEncounter = encounters[0];

            const fighter = checkedEncounter.fighters.find(fighter => fighter.id === playerId);
            expect(fighter.actions.length).toBe(spellCount);
        });
    }

    @then("The encounter should contain no unknown event")
    public thenTheEncounterShouldNotContainAnyUnknownEvent() {
        this.resultPromise.then(encounters => expect(encounters[encounters.length - 1].unknownLines.length).toBe(0));
    }
}
