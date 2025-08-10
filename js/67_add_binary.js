/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = false;

  let lsb_a = a.split("").reverse();
  let lsb_b = b.split("").reverse();

  let output = "";

  let longest = lsb_a.length > lsb_b.length ? lsb_a : lsb_b;
  let shortest = lsb_a.length > lsb_b.length ? lsb_b : lsb_a;
  console.log(longest);
  console.log(shortest);

  for (let i = 0; i < longest.length; i++) {
    const bit_a = longest[i];
    const bit_b = shortest[i];
    console.log("ADD", bit_a, bit_b, carry);

    if (bit_b == undefined) {
      if (carry && bit_a == "1") {
        output += "0";
        continue;
      }
      if (carry && bit_a == "0") {
        output += "1";
        carry = false;
        continue;
      }
      output += bit_a;
      continue;
    }

    // 0-0 && 1-1
    if (bit_a == "0" && bit_b == "0") {
      if (carry) {
        output += "1";
        carry = false;
        continue;
      }
      output += "0";
      continue;
    }

    if (bit_a == "1" && bit_b == "1") {
      if (carry) {
        output += "1";
        continue;
      }
      output += "0";
      carry = true;
      continue;
    }

    if (bit_a != bit_b) {
      if (carry) {
        output += "0";
        continue;
      }
      output += "1";
      continue;
    }
  }

  if (carry) {
    output += "1";
  }

  let ans = output.split("").reverse().join("");
  return ans;
};

let a = "1";
let b = "11";

addBinary(a, b);
