var productExceptSelf = function (nums) {
  let beg = [1];
  let end = [1];
  let finalArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let last = beg[beg.length - 1];
    beg.push(nums[i] * last);
  }
  console.log(nums.length);
  for (let i = nums.length - 1; i > 0; i--) {
    let last = end[end.length - 1];
    end.push(last * nums[i]);
  }
  end = end.reverse();
  for (let i = 0; i < beg.length; i++) {
    finalArr.push(beg[i] * end[i]);
  }
  return finalArr;
};
