import {store} from "./store";
import {IpcRendererEvent} from "electron/renderer";
import Encounter from "./domain/encounters/Encounter";

console.debug("Front IPC listeners setup");

export default function registerListeners() {
    window.chromie_ipc.on("CHROMIE_IPC_CHANNEL", (event: IpcRendererEvent, encounters: Encounter[]) => {
        encounters.forEach(encounter => store.commit("addEncounter", encounter));
    });
}
