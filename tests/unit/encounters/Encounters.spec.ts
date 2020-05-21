import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("Encounters", () => {
    it("should add an encounter to the encounter list", () => {
        const encounters: Encounters = new Encounters();

        encounters.add(new Encounter("Someone"));

        expect(encounters['encounters']).toHaveLength(1);
    });

    it("should retrieve the last added encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter("Someone1"));

        let lastEncounter = encounters.last();
        expect(lastEncounter['name']).toBe("Someone1");

        encounters.add(new Encounter("Someone2"));
        encounters.add(new Encounter("Someone3"));

        lastEncounter = encounters.last();
        expect(lastEncounter['name']).toBe("Someone3");
    });

    it("should add an unknown event with the line details", () => {
        const unknownEventLine = "8/12 21:18:29.434  DUMMY_EVENT,Bidule";
        const encounters: Encounters = new Encounters();
        encounters.add(new Encounter("myself"));

        const lastEncounter = encounters.last();
        lastEncounter.addUnknownEvent(unknownEventLine);

        expect(lastEncounter['unknownLines']).toHaveLength(1);
    });
});
