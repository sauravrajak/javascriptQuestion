function findMaxAndMin(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return { max, min };
}

const inputArray = [5, 2, 7, 1, 9, 50, 90];
const maxAndMin = findMaxAndMin(inputArray);
console.log(maxAndMin); // Output: { max: 90, min: 1 }
