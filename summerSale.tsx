const calculateTotalPrice = (prices: number[], discount: number): number => {
    let sum = 0;
    let expensive = prices[0]
    for(let i = 0; i < prices.length; i++) {
        sum += prices[i]
    }
    console.log(sum)
    return sum
}

console.log(calculateTotalPrice([1, 2, 3, 4, 5], 10))