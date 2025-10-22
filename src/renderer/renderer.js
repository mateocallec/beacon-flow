/**
 * @file renderer.js
 * @brief Main renderer process script that initializes the app view and controller,
 *        handles window frame hover effects, and loads localized text based on the
 *        document language.
 */

import { AppView } from './views/AppView.js';
import { AppController } from './controllers/AppController.js';

/** @type {HTMLElement} Reference to the custom window frame element */
const winFrame = document.getElementById('win-frame');

/**
 * @brief Initializes the application view and controller once the DOM is ready.
 */
function initializeApp() {
  const view = new AppView();
  const controller = new AppController(view);
}

/**
 * @brief Handles hover effect on the custom window frame when the mouse is near the top.
 * @param {MouseEvent} event - The mousemove event.
 * 
 * Note: Feature not fully implemented.
 */
function handleFrameHover(event) {
  const mouseY = event.clientY;

  if (mouseY <= 50) {
    winFrame.classList.add('c-hover');
  } else {
    winFrame.classList.remove('c-hover');
  }
}

/**
 * @brief Loads the appropriate language JSON file and applies translations to
 *        elements with a `data-lang` attribute.
 */
async function loadLanguage() {
  try {
    const htmlLang = document.documentElement.getAttribute('lang') || 'en';
    const response = await fetch(`./../lang/${htmlLang}.json`);
    const lang = await response.json();

    document.querySelectorAll('[data-lang]').forEach(el => {
      const code = el.getAttribute('data-lang');
      el.textContent = lang[code] || `?${code}`;
    });
  } catch (error) {
    console.error('Failed to load language file:', error);
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  loadLanguage();
});

document.addEventListener('mousemove', handleFrameHover);
