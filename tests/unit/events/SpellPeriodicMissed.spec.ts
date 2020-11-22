import SpellPeriodicMissedParser from "../../../src/domain/parser/matchers/implementations/SpellPeriodicMissedParser";

describe("SpellPeriodicMissed", () => {
    const EVENT_LINE = "8/12 21:18:43.818  SPELL_PERIODIC_MISSED,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,Player-1390-093A288C,\"Palakratøre-Hyjal\",0x514,0x0,124255,\"Report\",0x1,ABSORB,nil,9043,9043";

    it("should parse the line and return a SpellPeriodicMissedEvent", () => {
        const parser: SpellPeriodicMissedParser = new SpellPeriodicMissedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
