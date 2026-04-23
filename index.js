"use strict";

const camelCase = require("lodash/camelCase");

/**
 * Converts arbitrary text to camelCase (e.g. "foo bar" → "fooBar").
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
  return camelCase(String(str));
}

module.exports = toCamelCase;
