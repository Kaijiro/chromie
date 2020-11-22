import Encounters from "../../../src/domain/encounters/Encounters";
import UnknownEvent from "../../../src/domain/parser/events/implementations/UnknownEvent";
import Encounter from "../../../src/domain/encounters/Encounter";

jest.mock("../../../src/domain/encounters/Encounter");

describe("UnknownEvent", () => {
    const EVENT_LINE = "8/12 21:18:29.434  DUMMY_EVENT,Bidule";

    it("should add an unknown event to the encounter", () => {
        Encounter.prototype.addUnknownEvent = jest.fn().mockImplementation();

        const encounters: Encounters = new Encounters();
        const encounter = new Encounter("");
        encounters.add(encounter);

        const event: UnknownEvent = new UnknownEvent(EVENT_LINE);
        event.applyOn(encounters);

        expect(Encounter.prototype.addUnknownEvent).toBeCalled();
    });
});
