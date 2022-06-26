// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//the number of odd numbers will be roughly half of even numbers, give or take 1. So therefore
//we can cut n in half and then floor it, to cut off the give or take 1
function oddCount(n) {
  return Math.floor(n / 2);
}
