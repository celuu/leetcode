var calculate = function (prices, discount) {
    var sum = 0;
    var expensive = prices[0];
    for (var i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    console.log(sum);
    return sum;
};
console.log(calculateTotalPrice([1, 2, 3, 4, 5], 10));
