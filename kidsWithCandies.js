var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  let arr = [];
  for (let i = 0; i < candies.length; i++) {
    max = Math.max(max, candies[i]);
  }
  for (let i = 0; i < candies.length; i++) {
    let number = candies[i] + extraCandies;
    if (number >= max) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};
