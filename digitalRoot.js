// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let result = 0;

  //turn numbers to string, split into array, map over array,
  //adding the numbers together one by one and storing into result
  n.toString()
    .split("")
    .map((number) => (result += Number(number)));

  //if result is greater than or equal to 10, run the function again, adding until the
  //result is below 10, therefore 1 digit, then return that result
  return result >= 10 ? digital_root(result) : result;
}
