var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  for (j; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};
