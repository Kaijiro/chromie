import {getters, mutations} from "../../src/store";
import Encounter from "../../src/domain/encounters/Encounter";

describe('Store', () => {
    describe('Store mutations', () => {
        it("should add an Encounter in the Encounters in the store", () => {
            const state = {encounters: [], selectedEncounterIndex: 0};
            const {addEncounter} = mutations;

            addEncounter(state, new Encounter('Titi'));

            expect(state.encounters).toHaveLength(1);
        });

        it("should set the index of the selected encounter from the encounters array", () => {
            const state = {encounters: [], selectedEncounterIndex: -1};
            const {selectEncounter} = mutations;

            selectEncounter(state, 1);

            expect(state.selectedEncounterIndex).toBe(1);
        });
    });

    describe('Store getters', () => {
        it("should return the selected encounter", () => {
            const state = {encounters: [new Encounter("a"), new Encounter("b")], selectedEncounterIndex: 0};
            const {selectedEncounter} = getters;

            const encounter = selectedEncounter(state);

            expect(encounter).toBe(state.encounters[0]);
        });

        it("should return null if there is no selected encounter", () => {
            const state = {encounters: [new Encounter("a"), new Encounter("b")], selectedEncounterIndex: -1};
            const {selectedEncounter} = getters;

            const encounter = selectedEncounter(state);

            expect(encounter).toBe(null);
        });
    });
});
