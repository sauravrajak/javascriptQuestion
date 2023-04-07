function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}
const inputNumbers = [1, 2, 3, 4, 3, 2, 1, 5, 8, 5];
const uniqueNumbers = removeDuplicates(inputNumbers);
console.log(uniqueNumbers); // output [1,2,3,4,5,8]
