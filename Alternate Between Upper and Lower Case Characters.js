const solve = (strArray) => {
  return strArray.map((arr, index) => {
    if (index % 2 === 1) {
      return arr.toUpperCase();
    }
    return arr;
  });
};
