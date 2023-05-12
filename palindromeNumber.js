var isPalindrome = function (x) {
  let xstring = x.toString();
  if (xstring[0] === "-") {
    return false;
  }

  for (let i = 0; i <= xstring.length / 2; i++) {
    console.log(xstring[i], xstring[i - 1]);
    if (xstring[i] != xstring[xstring.length - i - 1]) {
      return false;
    }
  }
  return true;
};
