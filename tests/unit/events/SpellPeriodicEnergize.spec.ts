import {SpellPeriodicEnergizeParser} from "../../../src/domain/parser/matchers/implementations/SpellPeriodicEnergizeParser";

describe("SpellPeriodicEnergize", () => {
    const EVENT_LINE = "8/12 21:18:31.773  SPELL_PERIODIC_ENERGIZE,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,Player-1390-09F9A309,\"Kboomdy-Hyjal\",0x514,0x0,202497,\"Etoiles filantes\",0x48,Player-1390-09F9A309,0000000000000000,318460,318460,14038,13498,2649,21146,8,690,1000,0,195.18,1438.42,1518,1.8001,430,4.0000,0.0000,8,1000";

    it("should parse the line and return a SpellPeriodicEnergize event", () => {
        const parser: SpellPeriodicEnergizeParser = new SpellPeriodicEnergizeParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
