import {mutations} from "../../src/store";
import Encounter from "../../src/domain/encounters/Encounter";

describe('Store', () => {
    describe('Store mutations', () => {
        it("should add an Encounter in the Encounters in the store", () => {
            const state = {encounters: [], selectedEncounterIndex: 0};
            const {addEncounter} = mutations;

            addEncounter(state, new Encounter('Titi'));

            expect(state.encounters).toHaveLength(1);
        });
    });

    describe('Select encounter', () => {
        it("should set the index of the selected encounter from the encounters array", () => {
            const state = {encounters: [], selectedEncounterIndex: -1};
            const {selectEncounter} = mutations;

            selectEncounter(state, 1);

            expect(state.selectedEncounterIndex).toBe(1);
        });
    });
});
