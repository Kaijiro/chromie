import RangeDamageParser from "../../../src/domain/parser/matchers/implementations/RangeDamageParser";
import Encounters from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";
import RangeDamageEvent from "../../../src/domain/parser/events/implementations/RangeDamageEvent";

describe("RangeDamage", () => {
    const EVENT_LINE = "8/12 21:18:30.684  RANGE_DAMAGE,Player-1390-09327B48,\"Yowid-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152852-000051BAA7,\"Pashmar la Fanatique\",0xa48,0x80,75,\"Tir automatique\",0x1,Creature-0-3770-2164-22359-152852-000051BAA7,0000000000000000,44666692,44695456,0,0,2700,0,3,1,100,0,210.06,1478.89,1518,5.3178,123,4267,5806,-1,1,0,0,0,nil,nil,nil";

    it("should parse the line and return a RangeDamageEvent", () => {
        const parser: RangeDamageParser = new RangeDamageParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });

    it("should not do anything when applied on an Encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter(""));

        const event = new RangeDamageEvent();

        event.applyOn(encounters);

        const expectedEncounters: Encounters = new Encounters();
        expectedEncounters.add(new Encounter(""));
        expect(encounters).toStrictEqual(expectedEncounters);
    });
});
