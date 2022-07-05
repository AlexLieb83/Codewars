// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  //filter integers into even array and odd array
  let oddArr = integers.filter((n) => n % 2 !== 0);
  let evenArr = integers.filter((n) => n % 2 === 0);

  //if there is more than 1 number in oddArr, then return the even number, else return the odd number
  if (oddArr.length > 1) {
    return Number(evenArr.join(""));
  } else {
    return Number(oddArr.join(""));
  }
}
