function wordCount(str) {
  const words = str.split(" "); // Split the string into an array of words
  const countMap = new Map(); // Initialize a Map to hold the word counts

  // Loop through each word and increment its count in the Map
  words.forEach((word) => {
    if (countMap.has(word)) {
      // if word is in the map and repeating
      countMap.set(word, countMap.get(word) + 1);
    } else {
      // if word is not reapeating
      countMap.set(word, 1);
    }
  });

  return countMap;
}
const inputString =
  "I am learning full stack webdevelopment through pwskills pwskills is indias biggest repositry";
const wordCounts = wordCount(inputString);
console.log(wordCounts);
