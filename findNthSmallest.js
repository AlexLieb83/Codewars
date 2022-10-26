// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

function nthSmallest(arr, pos) {
  let sorted = arr.sort((a, b) => a - b);

  return sorted[pos - 1];
}

//sort the array, then grab the element with index of pos - 1, -1 due to counting from 0

// nthSmallest({3,1,2} ,2) ==> return (2)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)
