var guessNumber = function (n) {
  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    console.log(mid);
    if (guess(mid) === -1) {
      right = mid - 1;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};
