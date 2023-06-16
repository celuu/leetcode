var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  if (s.length === 0) return true;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      if (i === s.length - 1) return true;
      i++;
    }
    j++;
  }
  return false;
};
