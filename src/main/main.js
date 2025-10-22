/**
 * @file main.js
 * @brief Main Electron process script. Creates the main application window
 *        and sets up IPC communication.
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const setupIpc = require('./ipc');

/** @type {BrowserWindow} Reference to the main application window */
let mainWindow;

/**
 * @brief Creates the main application window with custom settings.
 */
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 825,
    frame: false,           // Custom frame for custom window controls
    resizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, '..', '..', 'assets', 'icons', 'icon-512x512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the renderer HTML file
  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  // Uncomment for development: open DevTools
  // mainWindow.webContents.openDevTools();

  // Set up IPC communication
  setupIpc(mainWindow);
}

// App ready event
app.on('ready', createMainWindow);

/**
 * @brief Quit the app when all windows are closed, except on macOS.
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * @brief Re-create the main window when the app is activated (macOS).
 */
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
