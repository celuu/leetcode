

let s = "tacocat is my favorite palindrome";

const reverseString = (string) => {
    let split = string.split(" ").reverse();
    let res = [];
    for(let i = 0; i < split.length; i++) {
        let current = split[i];
        res.push(reverseWord(current))       
    }
    return res.join(" ")
}

const reverseWord = (word) => {
    word = word.split("")
    for(let i = 0; i < Math.floor(word.length/2); i++) {
        [word[i], word[word.length - 1 - i]] = [word[word.length - 1- i], word[i]]
    }
    return word.join("")
}


console.log(reverseString(s))

