const uncompress = (s) => {
  let res = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (!alphabet.includes(s[j])){
        j++
    } else {
        const num = Number(s.slice(i, j))
        for(let k = 0; k < num; k++) {
            res.push(s[j])
        }
        j += 1;
        i = j;
    }
  }
  return res.join("")
};


console.log(uncompress("2c3a1t"))