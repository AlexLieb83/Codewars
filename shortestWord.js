// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  //turn sentance into array of words
  let arr = s.split(" ");
  //map over array of words, storing all of the lengths in array
  let lengths = arr.map((word) => word.length);
  //return the shortest length in the array
  return Math.min(...lengths);
}
