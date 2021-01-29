const solve = (intArray, k) => {
  return (
    intArray
      .map((arr) => {
        return arr % k === 0;
      })
      .filter((arr) => arr === false).length === 0
  );
};
