// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//set length array, to hold our final answers. set word to hold our individual words. run a for loop that will return the word[i] then the length. 
function addLength(str) {
  let length = []
  let word = str.split(' ')
  
  for(i = 0; i < word.length; i++){
    length.push(`${word[i]} ${word[i].length}`)
  } return length
}