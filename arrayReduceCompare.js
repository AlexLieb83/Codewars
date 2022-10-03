// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
  let arrA = a.map((num) => num ** 2);
  let sumA = arrA.reduce((acc, c) => acc + c);

  let arrB = b.map((num) => num ** 3);
  let sumB = arrB.reduce((acc, c) => acc + c);

  return sumA > sumB;
}

//p - two arrays, both containing ints
//r - boolean, true if sum of a ** 2 > than b ** 3
//ps - map over a, squaring each int, then reduce to one int
// map over b, cubing each int, then reduce to one int
//then compare and return
