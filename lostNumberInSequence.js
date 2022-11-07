// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).
function findDeletedNumber(arr, mixArr) {
  //reduce both arrays, to find sum
  //we have to use ,0, to correct for empty array errors
  let arrTotal = arr.reduce((acc, c) => acc + c, 0);
  let mixArrTotal = mixArr.reduce((acc, c) => acc + c, 0);

  //return diff between both arrays
  return arrTotal - mixArrTotal;
}

//p - array of ints, arr of ints with one int possibly deleted
//r - int that has been deleted, or 0 if none deleted
//ps - add up arr, add up mixArr, the diff === answer
