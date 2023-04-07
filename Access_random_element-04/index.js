function extractElements(array) {
  const [first, second, ...rest] = array;
  // extracting last element and storing int into last variable
  const last = rest.pop();
  return [first, second, last];
}

const inputArray = [1, 2, 3, 4, 5, 8, 12, 13];
const extractedElements = extractElements(inputArray);
console.log(extractedElements); // Output: [1, 2, 13]
