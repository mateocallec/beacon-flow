/**
 * @file RequestModel.js
 * @brief Defines the RequestModel class which manages HTTP request data,
 *        including method, URL, parameters, and headers.
 */

/**
 * @class RequestModel
 * @brief Represents a HTTP request and provides methods to manage request data.
 */
export class RequestModel {
  /**
   * @brief Initializes a new RequestModel with default values.
   */
  constructor() {
    /** @type {string} HTTP method (GET, POST, etc.) */
    this.method = 'GET';

    /** @type {string} Request URL */
    this.url = '';

    /** @type {Object} Request parameters */
    this.params = {};

    /** @type {Object} HTTP headers */
    this.headers = {};
  }

  /**
   * @brief Sets the HTTP method for the request.
   * @param {string} method - The HTTP method to use.
   */
  setMethod(method) {
    this.method = method;
  }

  /**
   * @brief Sets the request URL.
   * @param {string} url - The URL to request.
   */
  setUrl(url) {
    this.url = url;
  }

  /**
   * @brief Adds a parameter to the request.
   * @param {string} name - The parameter name.
   * @param {string} value - The parameter value.
   */
  addParam(name, value) {
    this.params[name] = value;
  }

  /**
   * @brief Removes a parameter from the request.
   * @param {string} name - The parameter name to remove.
   */
  removeParam(name) {
    delete this.params[name];
  }

  /**
   * @brief Clears all request parameters.
   */
  clearParams() {
    this.params = {};
  }

  /**
   * @brief Returns a configuration object suitable for use with HTTP clients like Axios.
   * @returns {Object} Request configuration containing method, URL, params, data, and headers.
   */
  getRequestConfig() {
    return {
      method: this.method,
      url: this.url,
      params: this.method === 'GET' ? this.params : {},
      data: this.method !== 'GET' ? this.params : {},
      headers: this.headers,
    };
  }
}
