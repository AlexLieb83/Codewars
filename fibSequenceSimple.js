// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  //first two of fib sequence
  //we will push the rest of the numbers in
  let arr = [0, 1];

  // loop from index 2 to the target numb
  for (let i = 2; i <= n; i++) {
    // add the prev two nums together to get the next number in the sequence, and push it to the array
    arr[i] = arr[i - 2] + arr[i - 1];
    arr.push(num);
  }

  // return the last number in the array
  return arr[n];
};

//fib sequence
//0,1,1,2,3,5,8,13

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
