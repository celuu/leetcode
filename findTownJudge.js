var findJudge = function (n, trust) {
  if (n === 1) return 1;
  if (n > 1 && trust.length === 0) return -1;
  let toTrust = n - 1;
  let hash = {};
  let arr = [];
  for (let i = 0; i < trust.length; i++) {
    let person = trust[i][0];
    let trusted = trust[i][1];
    arr.push(person);
    hash[trusted] = (hash[trusted] || 0) + 1;
  }

  for (key in hash) {
    if (hash[key] === toTrust) {
      if (arr.includes(parseInt(key))) {
        return -1;
      } else {
        return key;
      }
    }
  }
  return -1;
};
