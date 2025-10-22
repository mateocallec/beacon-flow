/**
 * @file ipc.js
 * @brief Sets up IPC (Inter-Process Communication) listeners for window controls
 *        such as close and minimize in the main process.
 */

const { ipcMain } = require('electron');

/**
 * @brief Configures IPC event handlers for the main window.
 * @param {BrowserWindow} mainWindow - The main Electron window instance.
 */
function setupIpc(mainWindow) {
  /**
   * @event ipcMain#window-close
   * @description Closes the main window when triggered from the renderer process.
   */
  ipcMain.on('window-close', () => {
    if (mainWindow) mainWindow.close();
  });

  /**
   * @event ipcMain#window-minimize
   * @description Minimizes the main window when triggered from the renderer process.
   */
  ipcMain.on('window-minimize', () => {
    if (mainWindow) mainWindow.minimize();
  });
}

module.exports = setupIpc;
