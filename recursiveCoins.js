const startHere = (num) => {
    let counter = 0;
    while(num >= 11) {
        num -= 11;
        counter += 1;
    }
    console.log(num, counter)
  doMath(num, 0)
  return minCount + counter
}

let minCount = Infinity

const doMath = (num, count) => {
    if (num < 0) return false
    if (num === 0) {
        minCount = Math.min(minCount, count);
        return true
    }
    if (count > minCount) return false

  let coins = [11, 9, 7, 5, 1]
  for (let i = 0; i < coins.length; i++){
        const current = coins[i];
        if (num >= current){
           doMath(num - current, count + 1); 
        }
  }
}

console.log(startHere(250))
