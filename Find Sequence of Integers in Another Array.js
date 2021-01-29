const solve = (intArray, sequence) => {
  let indexFirst = intArray.indexOf(sequence[0]);
  let indexLast = intArray.indexOf(sequence[sequence.length - 1] + 1);

  return intArray.slice(indexFirst, indexLast).join("") === sequence.join("");
};
