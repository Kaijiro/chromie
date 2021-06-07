import {createStore} from "vuex";
import Encounter from "./domain/encounters/Encounter";

export interface ChromieState {
    encounters: Encounter[];
    selectedEncounterIndex: number;
}

const state = {
    encounters: [],
    selectedEncounterIndex: -1
};

export const mutations = {
    addEncounter(currentState: ChromieState, encounter: Encounter) {
        currentState.encounters.push(encounter);
    },
    selectEncounter(currentState: ChromieState, index: number){
        currentState.selectedEncounterIndex = index;
    }
};

export const store = createStore<ChromieState>({
    state: state,
    mutations: mutations
});
