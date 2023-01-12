// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
  let prefix = "";

  // base case
  if (strs === null || strs.length === 0) return prefix;

  // loop throught all chars of first string
  for (let i = 0; i < strs[0].length; i++) {
    // store current char we are looking at from the original string
    const char = strs[0][i];

    // loop through all the chars in the rest of the strings in the array
    for (let j = 1; j < strs.length; j++) {
      // check if char from other string is not the same as the original string
      if (strs[j][i] !== char) return prefix;
    }
    // if char is same, add it to our common prefix string
    prefix = prefix + char;
  }
  return prefix;
}

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
