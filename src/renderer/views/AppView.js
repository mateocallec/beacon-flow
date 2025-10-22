/**
 * @file AppView.js
 * @brief Defines the AppView class responsible for handling the user interface,
 *        including form inputs, parameter groups, and displaying responses.
 */

const htmlLang = document.documentElement.getAttribute('lang') || 'en';

/** @type {Object} Holds localized language strings */
let langData = {};

/**
 * @brief Loads the language JSON file based on the document's `lang` attribute.
 */
async function loadLang() {
  try {
    const response = await fetch(`./../lang/${htmlLang}.json`);
    langData = await response.json();
  } catch (error) {
    console.error('Failed to load language file:', error);
    langData = {};
  }
}

// Load language data on script execution
loadLang();

/**
 * @class AppView
 * @brief Handles UI elements, user input, parameter groups, and response display.
 */
export class AppView {
  /**
   * @brief Initializes references to key UI elements.
   */
  constructor() {
    this.methodSelect = document.getElementById('method');
    this.urlInput = document.getElementById('url');
    this.paramsContainer = document.getElementById('params-container');
    this.addParamButton = document.getElementById('add-param');
    this.sendRequestButton = document.getElementById('send-request');
    this.responseTextarea = document.getElementById('response');
  }

  /**
   * @brief Binds a handler function to the "Add Parameter" button.
   * @param {Function} handler - Function to execute on button click.
   */
  bindAddParam(handler) {
    this.addParamButton.addEventListener('click', handler);
  }

  /**
   * @brief Binds a handler function to the "Send Request" button.
   * @param {Function} handler - Function to execute on button click.
   */
  bindSendRequest(handler) {
    this.sendRequestButton.addEventListener('click', handler);
  }

  /**
   * @brief Returns the selected HTTP method from the method dropdown.
   * @returns {string} The selected HTTP method.
   */
  getMethod() {
    return this.methodSelect.value;
  }

  /**
   * @brief Returns the URL input value.
   * @returns {string} The URL entered by the user.
   */
  getUrl() {
    return this.urlInput.value;
  }

  /**
   * @brief Adds a new parameter input group to the parameters container.
   * @param {string} [name=''] - Optional default parameter name.
   * @param {string} [value=''] - Optional default parameter value.
   */
  addParamGroup(name = '', value = '') {
    const paramGroup = document.createElement('div');
    paramGroup.className = 'param-group';

    const nameInput = document.createElement('input');
    nameInput.className = 'input c-name';
    nameInput.type = 'text';
    nameInput.placeholder = langData['page.settings.params.name'] || 'Name';
    nameInput.value = name;
    nameInput.spellcheck = false;

    const valueInput = document.createElement('input');
    valueInput.className = 'input c-value';
    valueInput.type = 'text';
    valueInput.placeholder = langData['page.settings.params.value'] || 'Value';
    valueInput.value = value;
    valueInput.spellcheck = false;

    const removeButton = document.createElement('button');
    removeButton.className = 'input c-icon c-delete';
    removeButton.addEventListener('click', () => {
    this.paramsContainer.removeChild(paramGroup);
  });

  paramGroup.append(nameInput, valueInput, removeButton);
    this.paramsContainer.appendChild(paramGroup);
  }

  /**
   * @brief Retrieves all parameters entered by the user as an object.
   * @returns {Object} Key-value pairs of parameter names and values.
   */
  getParams() {
    const paramGroups = this.paramsContainer.querySelectorAll('.param-group');
    const params = {};

    paramGroups.forEach(group => {
      const nameInput = group.querySelector('input.c-name');
      const valueInput = group.querySelector('input.c-value');
      const name = nameInput.value.trim();
      const value = valueInput.value.trim();

      if (name && value) {
        params[name] = value;
      }
    });

    return params;
  }

  /**
   * @brief Sets the text of the response textarea.
   * @param {string} text - Text to display in the response textarea.
   */
  setResponse(text) {
    this.responseTextarea.value = text;
  }
}
