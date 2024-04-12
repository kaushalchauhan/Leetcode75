// Problem - 334. Increasing Triplet Subsequence
const increasingTriplet = function (nums) {
  const n = nums.length;
  if (n < 3) return false;

  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= secondMin) {
      secondMin = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
