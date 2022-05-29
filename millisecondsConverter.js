// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  //Take each time, and convert it into seconds, so 1 h * 3600 = 3600 seconds, 1 min * 60 = 60 seconds, etc.
  //Then multiply it all by 1000 to convert the time into milliseconds
  return ((h * 3600) + (m * 60) + (s)) * 1000
}