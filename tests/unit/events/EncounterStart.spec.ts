import {Encounters} from "../../../src/domain/encounters/Encounters";
import {EncounterStartEvent} from "../../../src/domain/parser/events/implementations/EncounterStartEvent";
import {EncounterStartParser} from "../../../src/domain/parser/matchers/implementations/EncounterStartParser";
import {EncounterEvent} from "../../../src/domain/parser/events/EncounterEvent";
import Encounter from "../../../src/domain/encounters/Encounter";

jest.mock("../../../src/domain/encounters/Encounters");

describe("EncounterStartParser and EncounterStartEvent", () => {

    const EVENT_LINE = "7/4 22:24:39.439  ENCOUNTER_START,2273,\"Uu’nat, héraut du Vide\",15,16,2096";

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it(`should add an Encounter to the encounter list`, () => {
        Encounters.prototype.add = jest.fn().mockImplementation(() => {
        });
        const encounters: Encounters = new Encounters();
        const event: EncounterStartEvent = new EncounterStartEvent("");

        event.applyOn(encounters);

        expect(Encounters.prototype.add).toBeCalled();
    });

    it(`should add an Encounter with the specified name to the encounter list`, () => {
        Encounters.prototype.add = jest.fn().mockImplementation(() => {
        });
        const encounters: Encounters = new Encounters();
        const parser: EncounterStartParser = new EncounterStartParser();

        const event: EncounterEvent | undefined = parser.parse(EVENT_LINE);
        expect(event).not.toBeUndefined();
        if (event === undefined) {
            return;
        }

        const encounterStartEvent = (event as EncounterStartEvent);
        encounterStartEvent.applyOn(encounters);

        expect(Encounters.prototype.add).toBeCalledWith(new Encounter("Uu’nat, héraut du Vide"));
    });
});