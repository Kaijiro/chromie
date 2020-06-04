import {SwingMissedParser} from "../../../src/domain/parser/matchers/implementations/SwingMissedParser";

describe("SwingMissed", () => {
    const EVENT_LINE = "8/12 21:18:30.684  SWING_MISSED,Player-1390-0A0BFDAB,\"Iq-Hyjal\",0x514,0x0,Creature-0-3770-2164-22359-152853-000051BAA7,\"Silivaz le Zélé\",0xa48,0x40,MISS,nil";

    it("should parse the line and return a SwingMissedEvent", () => {
        const parser: SwingMissedParser = new SwingMissedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
