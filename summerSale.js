var calculateTotalPrice = function (prices, discount) {
    var sum = 0;
    var expensive = prices[0];
    for (var i = 0; i < prices.length; i++) {
        sum += prices[i];
        if(prices[i] > expensive) {
            expensive = prices[i]
        }
    }
    sum -= expensive;
    let discountNum = discount/100
    let discounted = (expensive * discountNum)
    return Math.floor(sum += discounted);
};
console.log(calculateTotalPrice([1, 2, 3, 4, 5], 10));
