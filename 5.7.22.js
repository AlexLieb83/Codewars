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