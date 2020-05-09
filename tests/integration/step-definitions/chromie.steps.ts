import LogFileParser from "../../../src/domain/parser/LogFileParser";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import {binding, given, then, when} from "cucumber-tsflow";

@binding()
export class ChromieSteps {
    private logFilePath: string = "";
    private logFileParser: LogFileParser = new LogFileParser();
    private resultPromise: Promise<Encounters> = null;

    @given(/The log file "(.*\.log)"/)
    public givenALogFile(logFilePath: string){
        this.logFilePath = logFilePath;
    }

    @when(/Chromie process the file/)
    public chromieProcess(){
        this.resultPromise = this.logFileParser.parseEncounters(this.logFilePath);
    }

    @then(/The encounter should contain (\d*) fighters/)
    public async thenEncounterContainsPlayerCount(expectedPlayerCount: number) {
        this.resultPromise.then(encounter => expect(encounter.last().countFighters()).toBe(expectedPlayerCount));
    }
}
