// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  let evens = array.filter((num) => num % 2 === 0);

  return evens.slice(evens.length - number);
}

//p - array of ints, and number
//r - array of even ints from original array, with a length of number, starting
//from the end. so like last 3, or last 7 even numbers
//ps - loop over array, grab all even numbers. store into new array. then slice out
//from (length - number) to end of new array
