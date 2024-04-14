// Problem - 283. Move Zeroes
const moveZeroes = function (nums) {
  let n = nums.length;
  if (n < 2) return nums;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};
