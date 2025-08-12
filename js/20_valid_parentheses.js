/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let dict = { "[": "]", "{": "}", "(": ")" };
  let stack = [];

  for (let char of s) {
    if (Object.hasOwn(dict, char)) {
      stack.push(char);
    } else {
      let x = stack.pop();
      if (dict[x] != char) {
        return false;
      } else {
        continue;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
