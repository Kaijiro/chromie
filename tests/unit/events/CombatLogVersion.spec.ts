import CombatLogVersionParser from "../../../src/domain/parser/matchers/implementations/CombatLogVersionParser";
import CombatLogVersionEvent from "../../../src/domain/parser/events/implementations/CombatLogVersionEvent";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("CombatLogStarted", () => {
    const EVENT_LINE = "8/12 21:18:29.421  COMBAT_LOG_VERSION,12,ADVANCED_LOG_ENABLED,1,BUILD_VERSION,8.2.0,PROJECT_ID,1";

    it("should parse the line and return a CombatLogVersionEvent", () => {
        const parser: CombatLogVersionParser = new CombatLogVersionParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new CombatLogVersionEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
