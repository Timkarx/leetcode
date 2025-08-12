/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  sorted = nums.toSorted((a, b) => a - b);
  ptr_a = 0;
  ptr_b = nums.length - 1;

  while (ptr_a < ptr_b) {
    const t = sorted[ptr_a] + sorted[ptr_b];

    if (t == target) {
      const idx_1 = nums.indexOf(sorted[ptr_a]);
      const idx_2 = nums.lastIndexOf(sorted[ptr_b]);
      return [idx_1, idx_2];
    } else if (t < target) {
      ptr_a += 1;
    } else {
      ptr_b -= 1;
    }
  }

  return null;
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
