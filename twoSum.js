// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};

  //loop over nums
  for (let i = 0; i < nums.length; i++) {
    //assign value = nums[i] AKA 2 then 7, etc etc
    let value = nums[i];
    //assign compliment = 9 - 2 = 7
    let compliment = target - nums[i];

    //check map for the compliment, ex: 7: index, map[7] = index
    //if map[compliment] is NOT undefined, then our compliment value, map[7],
    //exists in our map, and our values are found and can be returned
    if (map[compliment] != undefined) {
      //map[compliment] = index, i = other index
      return [map[compliment], i];
    } else {
      // else add this new value to the map and assign it's value to index
      map[value] = i;
    }
  }
};

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
