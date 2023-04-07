function extractNameAndStreet(person) {
  const {
    name,
    address: { street },
  } = person;
  return { name, street };
}

const person = {
  personName: "Saurav",
  age: 21,
  address: {
    street: "20, Block A, Rural Area.",
    city: "Ward no 18, Bhagalpur",
    state: "Bihar",
  },
};

const { name, street } = extractNameAndStreet(person);
console.log(name); // Output: "Saurav"
console.log(street); // Output: "20, Block A, Rural Area."
