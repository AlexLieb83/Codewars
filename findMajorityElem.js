// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};

  //store nums as keys, and count as value
  for (const num of nums) {
    if (map[num] !== undefined) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  //loop over map, return key when value >= nums.length/2
  for (const val in map) {
    if (map[val] >= nums.length / 2) {
      return val;
    }
  }
};

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
