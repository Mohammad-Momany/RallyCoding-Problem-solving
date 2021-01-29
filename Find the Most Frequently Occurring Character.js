const solve = (strArg, k) => {
  let obj = {};
  for (i = 0; i < strArg.length; i++) {
    !obj[strArg[i]] ? (obj[strArg[i]] = 1) : obj[strArg[i]]++;
  }

  return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[k - 1];
};
