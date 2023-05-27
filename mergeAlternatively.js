var mergeAlternately = function (word1, word2) {
  let merged = [];
  let char1 = word1.split("");
  let char2 = word2.split("");
  let j = 0;
  let i = 0;
  while (merged.length < char1.length + char2.length) {
    if (char1[i]) {
      merged.push(char1[i]);
      i++;
    }
    if (char2[j]) {
      merged.push(char2[j]);
      j++;
    }
  }
  return merged.join("");
};
