// A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

// Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

// Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.

// Examples
// For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: 7, 49, 97, 130, 10, 1

// While 3 is not, and would give us an infinite sequence: 3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...

function isHappy(n) {
  //keep track of sum
  let sum = 0;

  while (n > 0) {
    //this will split up 19 into e = 19 % 10 = 9
    let e = n % 10;
    //this will split up 19 into n / 10 = 1.9 and floor will give us 1
    n = Math.floor(n / 10);
    //this will give us 9 * 9 = 81
    sum += e * e;
  }

  //If we've found a happy number return true
  if (sum === 1) {
    return true;
    //if we get 2, 3, 4 then we are stuck in an infinite loop
  } else if (sum > 1 && sum <= 4) {
    return false;
  }

  //Recursive case to split our number until we hit an if else condition
  return isHappy(sum);
}

//so 19 -> 1, 9 -> 1 + 81 -> 82, 8, 2 -> 64 + 4 -> 68 -> 36 + 64 -> 100 -> 1 + 0 + 0 -> Happy Num
