var lengthOfLastWord = function (s) {
  let split = s.split(" ");
  if (split.length === 1) return s.length;
  for (let i = split.length - 1; i >= 0; i--) {
    if (split[i].length === 0) {
      continue;
    } else {
      return split[i].length;
    }
  }
};
