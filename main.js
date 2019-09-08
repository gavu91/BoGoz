const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;

let mainWindow;
var directExit = false;

process.env.NODE_ENV = 'development';

app.on('ready', function () {
  mainWindow = new BrowserWindow({});
  mainWindow.maximize();
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('close', function (e) {
    if (!directExit) {
      var choice = dialog.showMessageBox({
        type: 'question',
        buttons: ['Yes', 'No'],
        title: 'Confirm',
        message: 'Are you sure you want to quit?'
      });

      if (choice == 0) {
        mainWindow = null;
        app.exit();
      }
      else {
        if (e != null && e != undefined)
          e.preventDefault();
      }
    }
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function preventClose(e) {
  var choice = dialog.showMessageBox({
    type: 'question',
    buttons: ['Yes', 'No'],
    title: 'Confirm',
    message: 'Are you sure you want to quit?'
  });

  if (choice == 0) {
    directExit = true;
    app.quit();
  }
  else {
    directExit = false;
    if (e != null && e != undefined)
      e.preventDefault();
  }
};

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          directExit = true;
          preventClose();
        }
      }
    ]
  },
  {
    label: 'View'
  },
  {
    label: 'Go'
  },
  {
    label: 'Tools'
  },
  {
    label: 'Help'
  }
];

if (process.platform == 'darwin') {
  mainMenuTemplate.unshift({});
}

if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}