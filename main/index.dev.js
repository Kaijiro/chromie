// install devtools
const {default: installExtension, VUEJS_DEVTOOLS} = require('electron-devtools-installer');

// debug
require('electron-debug')();

require('electron').app.on('ready', () => {
    installExtension(VUEJS_DEVTOOLS)
        .then(name => console.debug(`Extension ${name} installed`))
        .catch(err => console.error(`An error occured : ${err}`));
});

require('./index');
