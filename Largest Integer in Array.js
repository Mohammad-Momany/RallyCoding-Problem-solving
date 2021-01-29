const solve = (intArray) => {
  let min = 0;
  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] > min) {
      min = intArray[i];
    }
  }
  return min;
};
