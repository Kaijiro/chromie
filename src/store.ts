import {createStore} from "vuex";
import Encounter from "./domain/encounters/Encounter";

export interface ChromieState {
    encounters: Encounter[]
}

const state = {
    encounters: []
};

export const mutations = {
    addEncounter(currentState: ChromieState, encounter: Encounter) {
        currentState.encounters.push(encounter);
    }
};

export const store = createStore<ChromieState>({
    state: state,
    mutations: mutations
});
