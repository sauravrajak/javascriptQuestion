function swapValues(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let a = 5;
let b = 10;
[a, b] = swapValues(a, b);
console.log(a); // Output: 10
console.log(b); // Output: 5
