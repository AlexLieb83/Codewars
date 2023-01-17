// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = function (digits) {
  // loop over array backwards
  for (let i = digits.length - 1; i >= 0; i--) {
    // add one to the digit
    digits[i]++;
    // if adding 1 DOES NOT make it 10 or more, then return digits - we are done here
    if (digits[i] < 10) {
      return digits;
      // else change number to 0
    } else {
      digits[i] = 0;
    }
  }
  // add this to the front of two or more zeros, //99 -> 100, 999 -> 1000, etc
  digits.unshift(1);
  return digits;
};

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
