/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = [];
  let temp = "";

  for (let char of s) {
    if (char == " ") {
      if (temp.length > 0) {
        arr.push(temp);
      }
      temp = "";
      continue;
    }
    temp += char;
  }
  if (temp.length > 0) {
    arr.push(temp);
  }
  return arr.at(-1).length;
};

let string = "hello";
lengthOfLastWord(string);
