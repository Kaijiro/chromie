import {shallowMount} from "@vue/test-utils";
import FileDragAndDrop from "../../../src/components/FileDragAndDrop.vue";
import LogFileParser from "../../../src/domain/parser/LogFileParser";
import Encounters from "../../../src/domain/encounters/Encounters";
import Encounter from "../../../src/domain/encounters/Encounter";

jest.mock("../../../src/domain/parser/LogFileParser");

describe("FileDragAndDrop component", () => {
    let component: any;

    beforeEach(() => {
        component = shallowMount(FileDragAndDrop, {});
    });

    it(`should not crash`, () => {
        expect(component.vm.files).toEqual([]);
    });

    it(`should react when a file is dropped`, () => {
        const fileDroppedMock = jest.fn();

        component.vm.addFile = fileDroppedMock;
        component.find('.container').trigger('drop');

        expect(fileDroppedMock).toBeCalledTimes(1);
    });

    it(`should call the LogFileParser to retrieve the encounters from the dropped file`, () => {
        const parsedEncounters = new Encounters();
        parsedEncounters.add(new Encounter("Test Encounter"));
        const parserMock = jest.fn().mockResolvedValueOnce(parsedEncounters);
        component.vm.$data.parser.parseEncounters = parserMock;

        component.find('.container').trigger('drop', {dataTransfer: {files: [{name: "filename", path: "/path/to/file"}]}});

        expect(parserMock).toBeCalledTimes(1);
        expect(parserMock.mock.calls[0][0]).toBe("/path/to/file");
    });

    it(`should emit an encountersParsed event when a log file has been parsed`, async () => {
        const parsedEncounters = new Encounters();
        parsedEncounters.add(new Encounter("Test Encounter"));
        component.vm.$data.parser.parseEncounters = jest.fn().mockResolvedValueOnce(parsedEncounters);

        component.find('.container').trigger('drop', {dataTransfer: {files: [{name: "", path: ""}]}});

        await component.vm.$nextTick();

        expect(component.emitted('encountersParsed')).toBeTruthy();
        expect(component.emitted('encountersParsed').length).toBe(1);
        expect(component.emitted('encountersParsed')[0]).toEqual([parsedEncounters]);
    });
});
