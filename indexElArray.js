// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(a, b) {
  return a.indexOf(b) >= 0 ? a.indexOf(b) : "Not found";
}

//p - array, element
//r - index of matching element, int, or 'Not found'
//e
//ps - check a for index of b, if it exists then return that, else not found
