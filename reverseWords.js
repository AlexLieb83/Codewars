// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//first split will turn string into letters
//reverse all letters
//join back into reverse string, but this leaves the words reversed, not just the letters
//then split by spaces
//then reverse that
//and join at space, will keep letters backwards and words in correct spots
