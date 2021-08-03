import RangeMissedParser from "../../../src/domain/parser/matchers/implementations/RangeMissedParser";

describe("RangeMissed", () => {
    const EVENT_LINE = "9/26 22:53:28.417  RANGE_MISSED,Player-1390-082FD66D,\"Cyrå-Hyjal\",0x514,0x0,Vehicle-0-3769-2164-22244-152910-00000D23B2,\"Reine Azshara\",0x10a48,0x0,75,\"Tir automatique\",0x1,IMMUNE,nil";

    it("should parse the line and return a RangeMissedEvent", () => {
        const parser: RangeMissedParser = new RangeMissedParser();

        const event = parser.parse(EVENT_LINE);

        expect(event).not.toBeFalsy();
    });
});
