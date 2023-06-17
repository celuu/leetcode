var maxArea = function (height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let temp = (j - i) * Math.min(height[j], height[i]); //
    if (temp > max) {
      max = temp;
    }
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return max;
};
