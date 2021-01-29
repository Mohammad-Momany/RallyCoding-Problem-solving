const solve = (intArray) => {
  let sums = 0;
  intArray.map((arr) => (sums += arr));
  return sums;
};
