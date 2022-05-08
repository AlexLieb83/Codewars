// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((acc, c) => acc + c, 0)
}


// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('')
}


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(x => x).length
}


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" (in COBOL "found the needle at position 6")


function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}


// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
  if(input == null || input.length === 0){
    return []
  } else{
  let arr = []
  let positive = input.filter(x => x > 0).length
  let negative = input.filter(x => x < 0).reduce((acc, c) => acc + c, 0)
  arr.push(positive, negative)
  return arr
  }
}
