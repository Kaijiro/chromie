import {binding, given, then, when} from "cucumber-tsflow/dist";

@binding()
export class ChromieSteps {
    private logFilePath: string = "";

    @given(/The log file "\$(.*\.log)"/)
    public givenALogFile(logFilePath: string){
        this.logFilePath = logFilePath;
    }

    @when(/Chromie process the file/)
    public chromieProcess(){
        // TODO Make Chromie process the file
    }

    @then(/The encounter should contain 14 fighters/)
    public thenEncounterContainsPlayerCount(expectedPlayerCount: number){
        // TODO Make the assertions
    }
}
