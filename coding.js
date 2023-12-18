

const isValidArr = (s) => {
    const newArr = [];
    for(i = 0; i < s.length; i++){
        if(isOpening(s[i])){
            newArr.push(s[i])
        }
        if(isClosing(s[i]) && s[i] === matches(newArr[newArr.length - 1])){
            newArr.pop(s[i])
        }
    }

    if(newArr.length === 0){
        return true
    } else {
        return false
    }

}

const matches = function(string){
    if (string === "("){
        return ")"
    } else if (string === "{"){
        return "}"
    } else if (string === "["){
        return "]"
    }
}

const isOpening = function(string){
    const opening = ["(", "{", "["]
    if (opening.includes(string)){
        return true;
    } else {
        return false;
    }
}

const isClosing = function(string){
    const closing = [")", "}", "]"];
    if (closing.includes(string)) {
        return true;
    } else {
        return false;
    }

}

let s = " {()}";
// let s = "()";
// let s = "()[]{}";
console.log(isValidArr(s))