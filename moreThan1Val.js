// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function moreThanOnce(arr) {
  let map = {};

  //loop over array
  for (let i = 0; i < arr.length; i++) {
    // if value is already in array, return true
    if (map[arr[i]] !== undefined) {
      return true;
      // else add to map
    } else {
      map[arr[i]] = 1;
    }
  }
  // if we don't have a repeat by the end of the array, then return false
  return false;
}

//p - array of nums
//r - boolean, true if any value occurs more than once, else false
//ps - create map, loop over array, store nums and keep count of how many times they occur
//then loop over map, check if any value occurs more than once, if so true, else false

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
