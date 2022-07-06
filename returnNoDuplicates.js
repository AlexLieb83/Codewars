// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   //turn s1 and s2 into sorted arrays
//   s1 = s1.toLowerCase().split("").sort();
//   s2 = s2.toLowerCase().split("").sort();
//   //concat the two arrays
//   let arr = s1.concat(s2);
//   //use Set to remove the duplicates from the array
//   let unique = [...new Set(arr)];

//   //then sort the letters and turn them into our string
//   return unique.sort().join("");
// }

//better way
function longest(s1, s2) {
  //use Set to remove the duplicates from the array
  return [...new Set(s1 + s2)].sort().join("");
}
