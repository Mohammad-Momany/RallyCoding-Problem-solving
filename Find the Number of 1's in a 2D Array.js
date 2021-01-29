const solve = (intArray) => {
  let arrays = [];
  for (i = 0; i < intArray.length; i++) {
    arrays.push(...intArray[i]);
  }
  return arrays.filter((arr) => arr === 1).length;
};
