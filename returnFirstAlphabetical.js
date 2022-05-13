// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//first sort s
//then grab the first element in the array
//split it up by letter, into an array
//then join them back together with ***
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}
