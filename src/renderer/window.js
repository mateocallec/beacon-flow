/**
 * @file window.js
 * @brief Handles custom window control buttons in the Electron renderer process.
 */

const { ipcRenderer } = require('electron');

/**
 * @brief Sends a message to the main process to close the window.
 */
function closeWindow() {
  ipcRenderer.send('window-close');
}

/**
 * @brief Sends a message to the main process to minimize the window.
 */
function minimizeWindow() {
  ipcRenderer.send('window-minimize');
}

/**
 * @brief Attaches event listeners to the window control buttons.
 */
function initializeWindowControls() {
  const quitButton = document.getElementById('win-quit');
  const minimizeButton = document.getElementById('win-minimize');

  if (quitButton) {
    quitButton.addEventListener('click', closeWindow);
  }

  if (minimizeButton) {
    minimizeButton.addEventListener('click', minimizeWindow);
  }
}

// Initialize controls when the document is ready
document.addEventListener('DOMContentLoaded', initializeWindowControls);
