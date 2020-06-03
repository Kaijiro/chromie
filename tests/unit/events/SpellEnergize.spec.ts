import {SpellEnergizeParser} from "../../../src/domain/parser/matchers/implementations/SpellEnergizeParser";

describe("SpellEnergize", () => {
    const EVENT_LINE = "8/12 21:18:30.206  SPELL_ENERGIZE,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,190984,\"Courroux solaire\",0x8,Player-1390-09F9A309,0000000000000000,318460,318460,13721,13193,2649,21146,8,580,1000,0,195.18,1438.42,1518,1.8001,430,8.0000,0.0000,8,1000";

    it("should parse the line and return a SpellEnergizeEvent", () => {
        const parser: SpellEnergizeParser = new SpellEnergizeParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
