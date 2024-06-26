// Problem - 238. Product of Array Except Self
const productExceptSelf = function (nums) {
  const n = nums.length;
  // Initialize arrays to store left and right products
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate left products
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Calculate right products
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Multiply left and right products to get the final answer
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
};
