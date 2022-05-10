// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//first split the string into an array, then map over the array, returning the word then the word.length
function addLength(str) {
  return str.split(' ').map(w => `${w} ${w.length}`)
}



// Find Mean

// Find the mean (average) of a list of numbers in an array.
// Information

// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

// 3. The mean (or average) of this list is 4

//first we use reduce to get the sum of the numbers in array, then divide by the length of the array.
var findAverage = function (nums) {
  return nums.reduce((acc, c) => acc + c, 0)/nums.length
}


// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
  return a.includes(x)
};




// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])

// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

//first we use sort to get numbers into descending order. 
//then we set our sum and diff variables to 0
//then we run our for loop over the length of the array - 1. we use diff to store the difference between index 0 and 1, 1 and 2, etc
//we use sum to store the results of the diff + next diff. then we return sum
function sumOfDifferences(arr) {
  arr.sort((a,b) => b - a)
  let sum = 0
  let diff = 0
  
  for(let i = 0; i < arr.length - 1; i++){
    diff = arr[i] - arr[i + 1]
    sum += diff
  } return sum
}


// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

//goose - 1 will return the index of the chosen player. then take the remainder - taking the remainder will allow us to always return the proper place, even if the goose number laps the number of players - of the index / the length of the array. then grab that name and return it
function duckDuckGoose(players, goose) {
  return players[(goose-1)%players.length].name
}



// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){
  let winner = ''
  if(scores[0] > scores[1]){
    winner = `${teams[0]} won!`
  } else if(scores[0] < scores[1]){
    winner = `${teams[1]} won!`
  } else {
    winner = 'teams played draw.'
  }
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}



// Create a method all which takes two params:

//     a sequence
//     a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
// Example

// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all( arr, fun ){
  return arr.every(fun)
}