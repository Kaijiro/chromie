const {app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
    appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    appWindow.loadFile("src/views/index.html");
    appWindow.openDevTools();
}

app.on("ready", createWindow);
