import ERROR from "./errors.js";

/**
 * @param {string} str
 * @param {number} index
 * @returns {string} ERROR.OUT_OF_BOUND when index is superior to the length of the given str
 * @returns {string} ERROR.OUT_OF_BOUND when index is inferior to zero
 * @returns {string} The character at index
 */
const charAt = (str, index) => {
  if (index >= str.length) {
    return ERROR.OUT_OF_BOUND;
  }
  if (index < 0) {
    return ERROR.OUT_OF_BOUND;
  }
  return str[index];
};

/**
 * @param {string} str1
 * @param {string} str2
 * @param {string} strN
 * @returns {string} An empty string if no param
 * @returns {string} The concatenation of all strings passed in param
 */
const concat = () => {};

export default { charAt, concat };
