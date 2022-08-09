// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

//parameters
//single string - word

//returns
//array of numbers, all the capital letters

//pseudocode
//loop over word, check if letter is uppercase, if it is, push index to array
