// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)

// Task
// Find the minimum number of jumps to go from start to finish

// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

function solution(start, finish) {
  let stepsToClimb = finish - start;
  //we can always jump to 3rd step so 1->4, 4->7, 7->10
  let numBigJumps = Math.floor(stepsToClimb / 3);

  //use this if we need to not jump the full length, 1->3 means we need to jump to 2 with 1 left over
  let numSmallJumps = stepsToClimb % 3;

  return numBigJumps + numSmallJumps;
}
