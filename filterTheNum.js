// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// var FilterString = function(value) {
//   return +value.split('').filter(n => !isNaN(n)).join('');
// }

var filterString = function (value) {
  let numArr = [];
  let arr = value.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == Number(arr[i])) {
      numArr.push(Number(arr[i]));
    }
  }

  let numbers = numArr.join("");
  return Number(numbers);
};

//p - string with letters and nums
//r - return just the numbers from the string
//ps - make array to hold nums, split string into array,
//loop over array, when we run into a number, push it to num array
//return num array
