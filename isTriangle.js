// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   let arr = [a, b, c];
//   let sort = arr.sort((a, b) => a - b);

//   return sort[0] + sort[1] > sort[2];
// }

//better way
function isTriangle(a, b, c) {
  //check that 2 sides are always greater than third
  return a + b > c && a + c > b && c + b > a;
}
