import {expect} from "chai";
import {Encounters} from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";

describe("Encounters", () => {
    it("should add an encounter to the encounter list", () => {
        const encounters: Encounters = new Encounters();

        encounters.add(Encounter.with("Someone"));

        expect(encounters['encounters']).to.have.lengthOf(1);
    });

    it("should retrieve the last added encounter", () => {
        const encounters: Encounters = new Encounters();
        encounters.add(Encounter.with("Someone1"));

        let lastEncounter = encounters.last();
        expect(lastEncounter['name']).to.be.equal("Someone1");

        encounters.add(Encounter.with("Someone2"));
        encounters.add(Encounter.with("Someone3"));

        lastEncounter = encounters.last();
        expect(lastEncounter['name']).to.be.equal("Someone3");
    });
});
