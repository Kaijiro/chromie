import {app, BrowserWindow} from 'electron';

function createWindow(){
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(`file://${__dirname}/resources/html/index.html`);
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});


// TODO Keep this in mind : https://github.com/paulmillr/chokidar
