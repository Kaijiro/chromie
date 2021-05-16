import {mutations} from "../../src/store";
import Encounter from "../../src/domain/encounters/Encounter";

describe('Store', () => {
    describe('Store mutations', () => {
        it("should add an Encounter in the Encounters in the store", () => {
            const state = {encounters: []};
            const {addEncounter} = mutations;

            addEncounter(state, new Encounter('Titi'));

            expect(state.encounters).toHaveLength(1);
        });
    });
});
