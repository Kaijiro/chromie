import {ipcMain} from "electron";
import Encounters from "../domain/encounters/Encounters";
import LogFileParser from "../domain/parser/LogFileParser";

console.debug("Registering IPC listeners");

ipcMain.on('CHROMIE_IPC_CHANNEL', async (event, arg) => {
    console.debug(arg);

    event.reply('CHROMIE_IPC_CHANNEL', await parseLogFile(arg));
});

const parseLogFile = (filePath: string): Promise<Encounters> => new LogFileParser().parseEncounters(filePath)
