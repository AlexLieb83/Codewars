// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
  return a.map(num => num === 97 ? 'a' : num === 101 ? 'e' : num === 105 ? 'i' : num === 111 ? 'o' : num === 117 ? 'u' : num )
}

//p - array of nums
//r - if value of num = vowel, change that num to val
//ps - loop over array, checking each num if it's a e i o or u, if it is, change it,
//then go to next num, etc etc until the end, return the new array