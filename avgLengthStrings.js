// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(arr) {
  let letterCount = arr.join("").length;
  let avgLetterCount = Math.round(letterCount / arr.length);

  return arr.map((string) => string[0].repeat(avgLetterCount));
}

//p - array of several strings
//r - array of strings with the same letters as original, but the lengths of each string will be the average of the lengths of the original array's strings
//ps - get average lengths of original array, so we can create a var to hold total letters in array
// then divide that var, by length of array
// then loop over original array and add each letter * avg letter count to new array, return new array
