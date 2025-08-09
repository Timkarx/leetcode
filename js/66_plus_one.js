/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let reversed = digits.toReversed();

  for (let idx in reversed) {
    if (reversed[idx] != 9) {
      reversed[idx] = reversed[idx] + 1;
      return reversed.toReversed();
    }
    reversed[idx] = 0;
  }
  reversed.push(1);
  return reversed.toReversed();
};
