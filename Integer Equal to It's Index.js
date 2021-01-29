const solve = (intArray) => {
  let indexEqulNumPlace = [];
  for (let i = 0; i < intArray.length; i++) {
    if (
      intArray[i] === intArray.indexOf(intArray[i]) &&
      indexEqulNumPlace.lenght === 1
    ) {
      indexEqulNumPlace.push(intArray[i]);
    }
  }
  return indexEqulNumPlace;
};
