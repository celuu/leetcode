// F(0) = 1
// F(1) = 4
// F(N) = 2 * F(N-1) + 3 * F(N-2)

let hash = {0: 1, 1: 4}

function ArithmeticSequenceFormula(num) { 
    let val1 = hash[num - 1];
    if(val1 === undefined){
        val1 = ArithmeticSequenceFormula(num - 1)
        hash[num - 1] = val1
    }

    let val2 = hash[num - 2]
    if(val2 === undefined){
        val2 = ArithmeticSequenceFormula(num - 2)
        hash[num - 2] = val2
    }
    return 2 * val1 + 3 * val2;
}
   
// keep this function call here 

// console.log(ArithmeticSequenceFormula(45)) //1268493608
console.log(ArithmeticSequenceFormula(22)) //571618847, no hash 39226324511
// console.log(ArithmeticSequenceFormula(2)) //11
// console.log(ArithmeticSequenceFormula(3)) //
// console.log(ArithmeticSequenceFormula(4)) //

console.log(hash)
