// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  // Binary Search
  let left = 0;
  let right = nums.length;
  // loop until our pointers meet
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    // find target
    if (nums[mid] === target) {
      return mid;
      // else look for if target is greater or less than current mid, adjust pointers accordingly
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
