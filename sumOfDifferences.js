// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])

// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

//first we use sort to get numbers into descending order. 
//then we set our sum and diff variables to 0
//then we run our for loop over the length of the array - 1. we use diff to store the difference between index 0 and 1, 1 and 2, etc
//we use sum to store the results of the diff + next diff. then we return sum
function sumOfDifferences(arr) {
  arr.sort((a,b) => b - a)
  let sum = 0
  let diff = 0
  
  for(let i = 0; i < arr.length - 1; i++){
    diff = arr[i] - arr[i + 1]
    sum += diff
  } return sum
}