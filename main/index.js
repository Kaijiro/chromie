const electron = require('electron');
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
    mainWindow = new electron.BrowserWindow({
        width: 1000,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: `${app.getAppPath()}/../dist/preload.js`
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    loadRoute(mainWindow, '');

    require(`${app.getAppPath()}/../dist/listeners.js`);
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    createMainWindow();
});
