const arr = [-1, 2, 0, 3, 4, 1, -8, 16]; //10
const findMaxSum = (arr) => {
  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + sum;

    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log(findMaxSum(arr));
