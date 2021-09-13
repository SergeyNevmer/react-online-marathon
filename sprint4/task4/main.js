"use strict";

// Implement the take() function that converts a sequence of iterated values into a sequence of length n.

// Example usage:

// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
// console.log(x);
// }
// Output:
// a
// b

function* take(n, iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i += 1) {
    if (arr.length < n) {
      arr.push(yield iterable[i]);
    }
  }
  return arr;
}
