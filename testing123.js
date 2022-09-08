// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let number = (el) => el.map((str, i) => `${i + 1}: ${str}`);

// var number = function (array) {
//   let arr = [];

//   for (let i = 0; i < array.length; i++) {
//     let newEl = `${i + 1}: ${array[i]}`;
//     arr.push(newEl);
//   }

//   return arr;
// };

//p - array of strings
//r - array of strings with 1, 2, 3, etc in front of it, counting each
//ps - loop through array, grab index+1 and push to new array, return that array
