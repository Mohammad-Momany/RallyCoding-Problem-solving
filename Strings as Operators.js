const solve = (intArray, test) => {
  return intArray.filter((n) => eval(`${n} ${test}`));
};
