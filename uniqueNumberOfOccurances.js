var uniqueOccurrences = function (arr) {
  let hash = {};
  let newHash = {};
  let bool = true;
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  Object.values(hash).forEach(function (key) {
    newHash[key] = (newHash[key] || 0) + 1;
    if (newHash[key] > 1) {
      bool = false;
    }
  });
  return bool;
};
