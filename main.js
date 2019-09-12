const electron = require('electron');
const path = require('path');
const url = require('url');
const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;
const { initSplashScreen, OfficeTemplate } = require('electron-splashscreen');
// const isDev = require('electron-is-dev');
const { resolve } = require('app-root-path');
let mainWindow;
var directExit = false; 
process.env.NODE_ENV = 'development';

app.on('ready', function () { 
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  // win = new BrowserWindow({ width, height })
  mainWindow = new BrowserWindow({show:false,width, height,frame:false}); 

  const hideSplashscreen = initSplashScreen({
    mainWindow, 
    icon: resolve('icon/favicon.ico'), 
    url: OfficeTemplate,
    width: 500,
    height: 300,
    brand: 'ByGoz',
    productName: 'ByGoz',
    logo:resolve('logo.png'), 
    website: 'www.ByGoz.com',
    text: 'Initializing ...'
  }); 
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.once('ready-to-show', () => { 
    // mainWindow.setMenu(null);
    mainWindow.show();  
    // mainWindow.setFullScreen(false);
    // window.location.reload();
    hideSplashscreen();
  }); 
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