import LogFileParser from "../../../src/domain/parser/LogFileParser";
import Encounters from "../../../src/domain/encounters/Encounters";
import {binding, given, then, when} from "cucumber-tsflow";

const expect = require("expect");

@binding()
export class ChromieSteps {
    private logFilePath: string = "";
    private logFileParser: LogFileParser = new LogFileParser();
    private resultPromise: Promise<Encounters> = null;

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
        this.resultPromise.then(encounters => expect(encounters.last().countFighters()).toEqual(expectedPlayerCount));
    }

    @then(/^The player with ID (Player-\d{4}-[A-F0-9]{8}) should has used (\d*) spells and techniques$/)
    public thenPlayerWithIDShouldHasUsedSpellCount(playerId: string, spellCount: string) {
        const spellCountNumber = parseInt(spellCount);
        console.log(playerId, spellCountNumber);
        console.debug("Ouh yeah");
    }

    @then("The encounter should contain no unknown event")
    public thenTheEncounterShouldNotContainAnyUnknownEvent() {
        this.resultPromise.then(encounters => expect(encounters.last().countUnknownEvents()).toBe(0));
    }
}
