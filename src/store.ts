import {createStore} from "vuex";
import Encounter from "./domain/encounters/Encounter";
import Encounters from "./domain/encounters/Encounters";

export interface ChromieState {
    encounters: Encounters
}

const state = {
    encounters: new Encounters()
};

export const mutations = {
    addEncounter(state: ChromieState, encounter: Encounter){
        state.encounters.add(encounter);
    }
};

export const store = createStore<ChromieState>({
    state: state,
    mutations: mutations
});
