// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let arr = [...numbers];
  let lowestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[lowestIndex]) {
      lowestIndex = i;
    }
  }

  arr.splice(lowestIndex, 1);
  return arr;
}

//p - array of nums
//r - array of nums with lowest num removed
//ps - record index. loop over array, if newNum is less than
//recorded index num, update recorded index.
//then remove the recorded index num, and return array
