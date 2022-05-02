const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSObject = {};

  for (let domain of domains) {
    let array = domain.split(".");
    let num = "";

    for (let i = array.length; i > 0; i--) {
      num += "." + array.slice(i - 1, i);
      if (DNSObject[num]) DNSObject[num] += 1;
      else DNSObject[num] = 1;
    }
  }

  return DNSObject;
}

module.exports = {
  getDNSStats,
};
