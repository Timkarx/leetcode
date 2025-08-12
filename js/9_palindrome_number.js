/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split("").toReversed().join("") == x;
};

let x = 1012101;

console.log(isPalindrome(x));
