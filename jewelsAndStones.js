// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A"

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  let map = {}
  let matches = 0

  //Fill in our map with our jewel letters
  for(let i=0; i < jewels.length; i++){
      map[jewels[i]] = 1
  }

  //Loop over our stones
  for(let i=0; i < stones.length; i++){
      //If we find a stone that matches one from our jewels, then ++ our matches
      if(map.hasOwnProperty(stones[i])){
          matches++
      }
  }

  return matches
  //compare both strings, if matching +1 to output
};


 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.