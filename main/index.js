const path = require('path');
const electron = require('electron');
const ipc = electron.ipcMain;

const {app} = electron;

const isDevMode = process.env.DEV_MODE === "1";

function loadRoute(window, route) {
    let url;

    if (isDevMode) {
        url = `http://localhost:8080/#/${route}`;
    } else {
        url = `file:///${app.getAppPath()}/dist/index.html#${route}`;
    }

    window.loadURL(url);
    window.maximize();
}

// Prevent window being garbage collected
let mainWindow;

function createMainWindow() {
    console.log(app.getAppPath());

    mainWindow = new electron.BrowserWindow({
        width: 1000,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.resolve(app.getAppPath(), "preload.js")
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    loadRoute(mainWindow, '');
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    createMainWindow();
});

ipc.on('parseRequest', (event, args) => {
    console.debug(event, args);
});
