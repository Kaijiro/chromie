import {Encounters} from "@/domain/encounters/Encounters";
import Encounter from "@/domain/encounters/Encounter";
import {expect} from "chai";

describe("Encounters", () => {
    describe("add", () => {
        it("should add an encounter to the encounter list", () => {
            const encounters: Encounters = new Encounters();

            encounters.add(Encounter.with("Someone"));

            expect(encounters['encounters']).to.have.lengthOf(1);
        });
    });
});
