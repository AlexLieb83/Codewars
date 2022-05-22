// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  //return map of array
  return array.map(x => {
    //define the sqrt of elem in array
    let r = Math.sqrt(x);
    //if sqrt of elem is solid num then return it, if not, return elem ** 2
    return (r % 1 == 0) ? r : (x*x);
  });;  
}