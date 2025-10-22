/**
 * @file AppController.js
 * @brief Defines the AppController class which handles user interactions,
 *        updates the RequestModel, and manages sending HTTP requests.
 */

import { RequestModel } from '../models/RequestModel.js';

const axios = window.axios;

/**
 * @class AppController
 * @brief Connects the AppView and RequestModel, handling user input and requests.
 */
export class AppController {
  /**
   * @brief Initializes the controller with a view and binds event handlers.
   * @param {AppView} view - The application view instance.
   */
  constructor(view) {
    /** @type {AppView} */
    this.view = view;

    /** @type {RequestModel} */
    this.model = new RequestModel();

    // Bind view events to controller methods
    this.view.bindAddParam(this.handleAddParam.bind(this));
    this.view.bindSendRequest(this.handleSendRequest.bind(this));
  }

  /**
   * @brief Handles the "Add Parameter" button click by adding a new parameter group.
   */
  handleAddParam() {
    this.view.addParamGroup();
  }

  /**
   * @brief Handles sending the HTTP request when the "Send Request" button is clicked.
   *        Validates the URL, updates the model, sends the request, and updates the view
   *        with the response or error details.
   */
  async handleSendRequest() {
    const method = this.view.getMethod();
    const url = this.view.getUrl();
    const params = this.view.getParams();

    // Validate URL
    try {
      new URL(url);
    } catch {
      // Invalid URL; do nothing
      this.view.setResponse('Error: Invalid URL.');
      return;
    }

    // Update the model with the request data
    this.model.setMethod(method);
    this.model.setUrl(url);
    this.model.clearParams();

    Object.entries(params).forEach(([name, value]) => {
      this.model.addParam(name, value);
    });

    try {
      const config = this.model.getRequestConfig();
      console.log('Request Config:', config);

      // Send the HTTP request using Axios
      const response = await axios(config);

      // Format the response for display
      const responseText = `Status: ${response.status}\n\nHeaders:\n${JSON.stringify(response.headers, null, 2)}\n\nResponse:\n${JSON.stringify(response.data, null, 2)}`;
      this.view.setResponse(responseText);
    } catch (error) {
      // Format error details for display
      let errorText = `Error: ${error.message}\n\n`;

      if (error.response) {
        errorText += `Response:\nStatus: ${error.response.status}\nData: ${JSON.stringify(error.response.data, null, 2)}\nHeaders: ${JSON.stringify(error.response.headers, null, 2)}\n\n`;
      }

      if (error.config) {
        errorText += `Config:\n${JSON.stringify(error.config, null, 2)}\n\n`;
      }

      if (error.request) {
        errorText += `Request:\n${error.request}\n\n`;
      }

      this.view.setResponse(errorText);

      // Log full error in console for debugging
      console.error(error);
    }
  }
}
