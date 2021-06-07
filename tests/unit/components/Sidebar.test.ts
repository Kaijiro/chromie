import {shallowMount} from "@vue/test-utils";
import Sidebar from "../../../src/components/Sidebar.vue";
import Encounter from "../../../src/domain/encounters/Encounter";
import {createStore} from "vuex";

describe("Sidebar component", () => {
    it(`should display a list of all encounters`, () => {
        const mockStore = {
            state: {
                encounters: [new Encounter("Boss n°1"), new Encounter("Boss n°2"), new Encounter("Boss n°3")]
            }
        };
        const component = shallowMount(Sidebar, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        // It's currently a bit dirty to access these private attributes but this is the only way right now
        expect(component["__app"]._container).toMatchSnapshot();
    });

    it(`should set an encounter as selected when user click on a list element`, () => {
        const selectEncounterMock = jest.fn();
        const state = {encounters: [new Encounter("Boss n°1"), new Encounter("Boss n°2"), new Encounter("Boss n°3")]};
        const mockStore = createStore({
            state: state,
            mutations: {
                selectEncounter: selectEncounterMock
            }
        });
        const component = shallowMount(Sidebar, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        component.find("ul>li:nth-child(2)").trigger('click');

        expect(selectEncounterMock).toBeCalled();
        expect(selectEncounterMock).toBeCalledWith(state, 1); // Vuex mutators are call with the state and then the args
    });

    it(`should highlight the selected encounter`, () => {
        const mockStore = createStore({
            state: {
                encounters: [new Encounter("Boss n°1"), new Encounter("Boss n°2"), new Encounter("Boss n°3")],
                selectedEncounterIndex: 1
            }
        });
        const component = shallowMount(Sidebar, {
            global: {
                mocks: {
                    $store: mockStore
                }
            }
        });

        expect(component["__app"]._container).toMatchSnapshot();
    });
});
