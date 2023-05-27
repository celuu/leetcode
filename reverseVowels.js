var reverseVowels = function (s) {
  let letter = s.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let newArr = [];
  for (let i = 0; i < letter.length; i++) {
    let current = letter[i].toLowerCase();
    if (vowels.includes(current)) {
      newArr.push(letter[i]);
    }
  }

  for (let i = 0; i < letter.length; i++) {
    let current = letter[i].toLowerCase();
    if (vowels.includes(current)) {
      letter[i] = newArr.pop();
    }
  }

  return letter.join("");
};
