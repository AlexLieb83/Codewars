// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  let smallest = Math.min(...arr);
  if (toReturn === "value") {
    return smallest;
  } else {
    return arr.indexOf(smallest);
  }
}

//p - array of ints, then return value, either 'value' or 'index'
//r - if value, return smallest value of array, if index, return index of smallest value
//of array
//ps - loop over array, find smallest value and it's index,
//then check toReturn, if value return value of smallest int in array
//if index return index of smallest int in array
