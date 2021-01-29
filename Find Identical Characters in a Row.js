const solve = (strArg) => {
  let obj = {};
  for (i = 0; i < strArg.length; i++) {
    !obj[strArg[i]] ? (obj[strArg[i]] = 1) : obj[strArg[i]]++;
  }
  return Object.values(obj).includes(2);
};
