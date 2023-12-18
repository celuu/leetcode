
function uncompress(s) {
    let newString = [];
    let number = 0;
    for(let i = 0; i < s.length; i++){
        if (parseInt(s[i]) >= 0){           
            number = number * 10 + parseInt(s[i]);            
        } else {
            let count = 0;
            while (count < number) {
                newString.push(s[i]);
                count += 1;
            }
            number = 0;
        }
        
    }
    return newString.join("")
}

// function assert(input, expected) {
//     const result = uncompress(input);
//     if (result != expected) {
//         console.error(`**ERROR** Expected ${expected}, but got ${result} for ${input}`)
//     } else {
//         console.log(`Passed for ${input} with ${result}`);
//     }
// }

// const input1 = "0a"
// assert(input1, "");

// const input2 = "1a"
// assert(input2, "a");

// const input3 = "2a"
// assert(input3, "aa");

// const input4 = "2a2b"
// assert(input4, "aabb");

// const input5 = "1a2b0c2d"
// assert(input5, "abbdd");

// const input6 = "10a"
// assert(input6, "aaaaaaaaaa");

// const input7 = "10a10a";
// assert(input7, "aaaaaaaaaaaaaaaaaaaa");


function compress(s) {
    let newString = [];
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i + 1]){
            count += 1;
        } else {
            newString.push(count);
            newString.push(s[i])
            count = 1;
        }
    }
    return newString.join("")
}

// function assert(input, expected) {
//     const result = compress(input);
//     if (result != expected) {
//         console.error(`**ERROR** Expected ${expected}, but got ${result} for ${input}`)
//     } else {
//         console.log(`Passed for ${input} with ${result}`);
//     }
// }

// const input11 = "";
// assert(input11, "");

// const input12 = "a";
// assert(input12, "1a");

// const input13 = "aa";
// assert(input13, "2a");

// const input14 = "aabb";
// assert(input14, "2a2b");

// const input15 = "abbccc";
// assert(input15, "1a2b3c");

// const input16 = "abbcccd";
// assert(input16, "1a2b3c1d");

console.log("123a892b83q8h4t" === compress(uncompress("123a892b83q8h4t")));
console.log("92f938w" === compress(uncompress("92f938w")));