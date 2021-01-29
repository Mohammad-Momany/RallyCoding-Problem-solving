const solve = (strArg, k) => {
  let spliceArr = [];
  strArg = strArg.split("");
  for (let i = 0; i < strArg.length + 2; i++) {
    spliceArr.push(strArg.splice(0, k));
  }
  return spliceArr;
};
