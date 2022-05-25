const arr = [-1, 2, 0, 3, 4, 1, -8, 16]; //10
const findMaxSum = (arr) => {
  let maxSum = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < length; j++) {
      sum = sum + arr[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(findMaxSum(arr));
