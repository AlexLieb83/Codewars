//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers){
  return numbers.map(x => x**2).reduce((a, c) => a + c, 0)
}



// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
  return x.map(x => x * 2)
}