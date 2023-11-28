/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Calculates the total number of words in a given string.
 * @param {string} sentence - The input string (sentence).
 * @returns {number} - The total number of words in the sentence.
 */
const getTotalWordsFromString = function (sentence) {
  let words = sentence.split(/\s+/);
  return words.length;
};

export default getTotalWordsFromString;
