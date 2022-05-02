const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let arrayNum = n.toString().split("");

  for (let i = 0; i < arrayNum.length; i++) {
    let itemNum = arrayNum.splice(i, 1)[0];
    let tempNum = parseInt(arrayNum.join(""));

    if (tempNum > result) {
      result = tempNum;
    }

    arrayNum.splice(i, 0, itemNum);
  }

  return result;
}

module.exports = {
  deleteDigit,
};
