import {ipcMain} from "electron";
import LogFileParser from "../domain/parser/LogFileParser";
import Encounter from "../domain/encounters/Encounter";

console.debug("Registering IPC listeners");

ipcMain.on('CHROMIE_IPC_CHANNEL', async (event, arg) => {
    event.reply('CHROMIE_IPC_CHANNEL', await parseLogFile(arg));
});

const parseLogFile = (filePath: string): Promise<Encounter[]> => new LogFileParser().parseEncounters(filePath)
