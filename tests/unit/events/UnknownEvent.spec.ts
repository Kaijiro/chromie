import UnknownEvent from "../../../src/domain/parser/events/implementations/UnknownEvent";
import Encounter from "../../../src/domain/encounters/Encounter";

jest.mock("../../../src/domain/encounters/Encounter");

describe("UnknownEvent", () => {
    const EVENT_LINE = "8/12 21:18:29.434  DUMMY_EVENT,Bidule";

    it("should add an unknown event to the encounter", () => {
        Encounter.prototype.addUnknownEvent = jest.fn().mockImplementation();

        const encounters: Encounter[] = [];
        const encounter = new Encounter("");
        encounters.push(encounter);

        const event: UnknownEvent = new UnknownEvent(EVENT_LINE);
        event.applyOn(encounters);

        expect(Encounter.prototype.addUnknownEvent).toBeCalled();
    });

    // TODO It does not count the trash mob encounters. Not sure about wanting to keep this.
    it("should not affect the encounters if no encounter is currently started", () => {
        const encounters: Encounter[] = [];
        const event: UnknownEvent = new UnknownEvent(EVENT_LINE);

        event.applyOn(encounters);

        expect(encounters).toStrictEqual([]);
    });
});
