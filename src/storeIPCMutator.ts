//import {store} from "./store";
import {IpcRendererEvent} from "electron/renderer";

console.debug("Front IPC listeners setup");

export default function registerListeners() {
    window.chromie_ipc.on("CHROMIE_IPC_CHANNEL", (event: IpcRendererEvent, arg: any) => {
        console.debug("Got an answer from backend");
        console.debug(arg);
    });
};
