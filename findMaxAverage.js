var findMaxAverage = function (nums, k) {
  let i = 0;
  let sum = 0;
  while (i < k) {
    sum += nums[i];
    i++;
  }
  let max = sum;
  i = 0;
  j = k - 1;
  while (j < nums.length - 1) {
    j++;
    // console.log(nums[j], nums[i])
    let newSum = sum + nums[j] - nums[i];
    i++;
    // console.log(i, k, sum, max, newSum)
    max = Math.max(max, newSum);
  }
  return max / k;
};
