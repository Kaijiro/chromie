import {shallowMount} from "@vue/test-utils";
import FileDragAndDrop from "../../../src/components/FileDragAndDrop.vue";
import Mock = jest.Mock;

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

    it(`should call the IPC channel to retrieve the encounters from the dropped file`, () => {
        // TODO It is actually a will to treat ONLY the first dropped file. Later, treat all file dropped.
        component.find('.container').trigger('drop', {dataTransfer: {files: [{name: "filename", path: "/path/to/file"}]}});

        const IPCSendMock = window.chromie_ipc.send as Mock;
        expect(IPCSendMock).toBeCalledTimes(1);
        expect(IPCSendMock.mock.calls[0][0]).toBe("CHROMIE_IPC_CHANNEL");
        expect(IPCSendMock.mock.calls[0][1]).toBe("/path/to/file");
    });
});
