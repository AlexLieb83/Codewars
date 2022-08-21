// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:

// c2 = a2 + b2
// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

function isPythagoreanTriple(integers) {
  let sorted = integers.sort((a, b) => a - b);

  return sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2;
}
