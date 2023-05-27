var reverseWords = function (s) {
  let split = s.split(" ");
  let arr = [];
  for (let i = split.length - 1; i >= 0; i--) {
    if (split[i] === "") {
      continue;
    } else {
      arr.push(split[i]);
    }
  }
  return arr.join(" ");
};
