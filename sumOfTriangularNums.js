// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
  //check for negatives
  if (n < 0) return 0;
  //math problem, basically to get the triangle number we
  //(6 * (6 + 1) * (6 + 2) / 6) -> (6 * 7 * 8 / 6) -> 42 * 8 / 6 -> 56
  //(34 * (35) * (36) / 6) -> 42840 / 6 -> 7140
  return (n * (n + 1) * (n + 2)) / 6;
}
