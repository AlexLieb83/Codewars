// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//divide the year by 100, so 1705 / 100 = 17.05, then round up. so 1705 is 18th century
function century(year) {
  return Math.ceil(year / 100) 
}